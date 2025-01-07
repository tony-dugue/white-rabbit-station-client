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
              50: '{rose.50}',
              100: '{rose.100}',
              200: '{rose.200}',
              300: '{rose.300}',
              400: '{rose.400}',
              500: '{rose.500}',
              600: '{rose.600}',
              700: '{rose.700}',
              800: '{rose.800}',
              900: '{rose.900}',
              950: '{rose.950}',
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
