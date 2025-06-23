import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "angular-proj-2b3b6", appId: "1:662218297498:web:254fd723f8bc38214b4f23", storageBucket: "angular-proj-2b3b6.firebasestorage.app", apiKey: "AIzaSyDBkheHtdu9oI_Atc5I9hpTidgdBqXgB54", authDomain: "angular-proj-2b3b6.firebaseapp.com", messagingSenderId: "662218297498", measurementId: "G-Z7TWLG54QB" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
