'use client';

import { Config } from '@/lib/config';

/**
 * Google Analytics component.
 * Returns null if GA measurement ID is not configured or if APP_ENV is 'local'.
 * Ready to be mounted in the app layout when needed.
 */
export function Analytics() {
  const { gaMeasurementId } = Config.analytics;
  const isLocal = Config.app.env === 'local';

  if (!gaMeasurementId || isLocal) {
    return null;
  }

  // Placeholder for future GA4 script injection
  // Example implementation would use next/script to load gtag.js
  return null;
}
