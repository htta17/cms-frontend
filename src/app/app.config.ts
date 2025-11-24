import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';


import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    
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
