import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';


import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    
    /* ng PrimeNG Animations */
    providePrimeNG({
        theme: {
            preset: Aura, 
            options: {
                dark: false,                
            }
        }
    }), 
    /* end of ng PrimeNG */

    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
