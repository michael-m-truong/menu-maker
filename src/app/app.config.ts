import { APP_INITIALIZER, ApplicationConfig, PLATFORM_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { firstValueFrom, tap, delay } from 'rxjs'; // Import delay operator
import { isPlatformBrowser } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [HttpClient, PLATFORM_ID],
    }, provideAnimationsAsync(),
  ]
};

export function initializeApp(http: HttpClient, platformId: Object) {
  return () => {
    if (isPlatformBrowser(platformId)) {
               console.log(`Current URL: ${window.location.href}`);
               }
  }
    // firstValueFrom(
    //   http.get("https://jsonplaceholder.typicode.com/posts")
    //     .pipe(
    //       //delay(2000), // Delay for 2 seconds
    //       tap(posts => { 
    //         if (isPlatformBrowser(platformId)) {
    //           console.log(`Current URL: ${window.location.href}`);
    //         }
    //         console.log('Posts:', posts);
    //       })
    //     )
    // );
}
