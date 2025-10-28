import type { FirebaseApp } from 'firebase/app';

import { Config } from './config';

let firebaseApp: FirebaseApp | undefined;

/**
 * Lazy initializer for Firebase client SDK.
 * Only imports and initializes when explicitly called.
 * No side effects on module import.
 */
export async function getFirebaseApp(): Promise<FirebaseApp> {
  if (firebaseApp) {
    return firebaseApp;
  }

  const { initializeApp, getApps } = await import('firebase/app');

  const existingApps = getApps();
  if (existingApps.length > 0 && existingApps[0]) {
    firebaseApp = existingApps[0];
    return firebaseApp;
  }

  firebaseApp = initializeApp(Config.firebase.client);
  return firebaseApp;
}
