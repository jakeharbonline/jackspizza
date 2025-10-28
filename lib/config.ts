import { env } from './env';

export const Config = {
  app: {
    env: env.APP_ENV,
    url: env.NEXT_PUBLIC_APP_URL ?? '',
  },
  firebase: {
    client: {
      apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
      messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      measurementId: env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
    admin: {
      projectId: env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: env.FIREBASE_ADMIN_PRIVATE_KEY,
    },
  },
  analytics: {
    gaMeasurementId: env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
  searchConsole: {
    verification: env.NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION,
  },
} as const;
