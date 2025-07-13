import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // Import the application configuration
import { AppComponents } from './app/app.component'; // Import your root component

// This is the entry point of your Angular application.
// It bootstraps the AppComponent with the providers defined in appConfig.
bootstrapApplication(AppComponents, appConfig)
  .catch((err) => console.error(err)); // Catch and log any errors during bootstrapping
