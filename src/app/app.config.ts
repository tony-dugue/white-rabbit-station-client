import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { definePreset } from '@primeng/themes';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: definePreset(Lara, {
          semantic: {
            primary: {
              50: '{yellow.50}',
              100: '{yellow.100}',
              200: '{yellow.200}',
              300: '{yellow.300}',
              400: '{yellow.400}',
              500: '{yellow.500}',
              600: '{yellow.600}',
              700: '{yellow.700}',
              800: '{yellow.800}',
              900: '{yellow.900}',
              950: '{yellow.950}',
            },
            secondary: {
              50: '{slate.50}',
              100: '{slate.100}',
              200: '{slate.200}',
              300: '{slate.300}',
              400: '{slate.400}',
              500: '{slate.500}',
              600: '{slate.600}',
              700: '{slate.700}',
              800: '{slate.800}',
              900: '{slate.900}',
            },
          },
        }),
        options: {
          darkModeSelector: false,
        },
      },
    }),
  ],
};
