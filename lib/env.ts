import { z } from 'zod';

const envSchema = z.object({
  // App
  APP_ENV: z.enum(['local', 'dev', 'staging', 'production']).default('local'),
  NEXT_PUBLIC_APP_URL: z.string().optional(),

  // Firebase Client SDK
  NEXT_PUBLIC_FIREBASE_API_KEY: z.string().min(1, 'NEXT_PUBLIC_FIREBASE_API_KEY is required'),
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z
    .string()
    .min(1, 'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN is required'),
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: z
    .string()
    .min(1, 'NEXT_PUBLIC_FIREBASE_PROJECT_ID is required'),
  NEXT_PUBLIC_FIREBASE_APP_ID: z.string().min(1, 'NEXT_PUBLIC_FIREBASE_APP_ID is required'),
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z
    .string()
    .min(1, 'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID is required'),
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: z
    .string()
    .min(1, 'NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID is required'),

  // Firebase Admin SDK (server-only)
  FIREBASE_ADMIN_PROJECT_ID: z.string().min(1, 'FIREBASE_ADMIN_PROJECT_ID is required'),
  FIREBASE_ADMIN_CLIENT_EMAIL: z.string().email('FIREBASE_ADMIN_CLIENT_EMAIL must be valid email'),
  FIREBASE_ADMIN_PRIVATE_KEY: z
    .string()
    .min(1, 'FIREBASE_ADMIN_PRIVATE_KEY is required')
    .transform((val) => val.replaceAll(String.raw`\n`, '\n')),

  // Google Analytics
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),

  // Google Search Console
  NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION: z.string().optional(),
});

function validateEnv() {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues.map((issue) => `  - ${issue.path.join('.')}: ${issue.message}`);
      throw new Error(`Environment validation failed:\n${missingVars.join('\n')}`);
    }
    throw error;
  }
}

export const env = validateEnv();
