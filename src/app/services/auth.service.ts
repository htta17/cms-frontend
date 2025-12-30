import { computed, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly router = inject(Router);

  private readonly TOKEN_KEY = 'token';
  private readonly ID_TOKEN_KEY = 'id_token';
  private readonly REDIRECT_URL_KEY = 'redirect_url';

  private readonly API_URL = environment.apiUrl.replace(/\/$/, ''); 
  private readonly http = inject(HttpClient);

  /** Login via API */
  async login(username: string, password: string): Promise<boolean> {
    if (!username || !password) return false;

    try {
      const url = `${this.API_URL}/auth/login`;
      const resp: any = await firstValueFrom(
        this.http.post(url, { username, password })
      );

      // Expecting { accessToken: string, idToken?: string }
      const accessToken = resp?.accessToken || resp?.token;
      if (!accessToken) {
        return false;
      }

      localStorage.setItem(this.TOKEN_KEY, accessToken);
      if (resp.idToken) localStorage.setItem(this.ID_TOKEN_KEY, resp.idToken);
      this.tokenSignal.set(accessToken);
      this.isAuthenticatedSignal.set(true);
      return true;
    } catch (e) {
      console.error('Login failed', e);
      return false;
    }
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ID_TOKEN_KEY);
    sessionStorage.removeItem(this.REDIRECT_URL_KEY);
    this.tokenSignal.set(null);
    this.isAuthenticatedSignal.set(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {   
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setRedirectUrl(url: string) {
    sessionStorage.setItem(this.REDIRECT_URL_KEY, url);
  }

  getRedirectUrl(): string {
    return sessionStorage.getItem(this.REDIRECT_URL_KEY) || '/admin';
  }

  private readonly tokenSignal = signal<string | null>(null);
  private readonly isAuthenticatedSignal = signal<boolean>(false);

  readonly isAuthenticated = this.isAuthenticatedSignal.asReadonly();
  readonly token = this.tokenSignal.asReadonly();

  readonly isTokenValid = computed(() => {
    const token = this.tokenSignal();

    if (!token) {
      return false;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const now = Math.floor(Date.now() / 1000);
      return payload.exp > now;
    } catch (e) {
      return false;
    }
  });

  redirectToLogin(redirectUrl?: string): void {
    if (redirectUrl) {
      sessionStorage.setItem(this.REDIRECT_URL_KEY, redirectUrl);
    }
  }


}
