import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Layout } from '../entity/Layout';

@Injectable({
  providedIn: 'root',
})
export class Layoutservice {
  
  private readonly http = inject(HttpClient);
  private readonly API_URL = environment.apiUrl.replace(/\/$/, '');

  // Private writable signals
  private readonly isSearchingSignal = signal<boolean>(false);

  // Public readonly signals
  readonly isSearching = this.isSearchingSignal.asReadonly();

   constructor() { }

  getLayouts(): Observable<Layout[]> {
    return this.http.get<Layout[]>(`${this.API_URL}/layouts`);
  }

  getLayout(id: number): Observable<Layout> {
    return this.http.get<Layout>(`${this.API_URL}/layouts/${id}`);
  }

  createLayout(payload: Partial<Layout>): Observable<Layout> {
    return this.http.post<Layout>(`${this.API_URL}/layouts`, payload);
  }

  updateLayout(id: number, payload: Partial<Layout>): Observable<Layout> {
    return this.http.put<Layout>(`${this.API_URL}/layouts/${id}`, payload);
  }

  deleteLayout(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/layouts/${id}`);
  }
}
