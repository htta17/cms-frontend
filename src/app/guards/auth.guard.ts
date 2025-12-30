import { Injectable, inject } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private router = inject(Router);
  private auth = inject(AuthService);

  canActivate(): boolean | UrlTree {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    return this.router.parseUrl('/login');
  }
}
