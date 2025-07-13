import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms'; // For ngModel

// Firebase imports - these provide EnvironmentProviders directly
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(FormsModule), // FormsModule still uses importProvidersFrom as it's NgModule-based
    // Firebase services are now directly in the providers array
    provideFirebaseApp(() => {
      // Use global __firebase_config if available, otherwise define it here
      const config = (window as any).__firebase_config ? JSON.parse((window as any).__firebase_config) : {};
      return initializeApp(config);
    }),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};