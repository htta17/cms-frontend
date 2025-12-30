import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Layoutservice {
  
  private readonly http = inject(HttpClient);

  // Private writable signals
  private readonly isSearchingSignal = signal<boolean>(false);

  // Public readonly signals
  readonly isSearching = this.isSearchingSignal.asReadonly();

   constructor() { }
}
