import type { App } from 'firebase-admin/app';

import { Config } from './config';

let adminApp: App | undefined;

/**
 * Lazy initializer for Firebase Admin SDK.
 * ONLY use this in server-side contexts (API routes, Server Components, etc.).
 * No side effects on module import.
 */
export async function getFirebaseAdmin(): Promise<App> {
  // Guard: ensure we're on the server
  if (typeof window !== 'undefined') {
    throw new TypeError('Firebase Admin SDK can only be used on the server');
  }

  if (adminApp) {
    return adminApp;
  }

  const admin = await import('firebase-admin/app');

  const existingApps = admin.getApps();
  if (existingApps.length > 0 && existingApps[0]) {
    adminApp = existingApps[0];
    return adminApp;
  }

  adminApp = admin.initializeApp({
    credential: admin.cert({
      projectId: Config.firebase.admin.projectId,
      clientEmail: Config.firebase.admin.clientEmail,
      privateKey: Config.firebase.admin.privateKey,
    }),
  });

  return adminApp;
}
