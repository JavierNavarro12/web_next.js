import * as SentryNode from '@sentry/node';
import * as SentryBrowser from '@sentry/browser';

const SENTRY_DSN = process.env.SENTRY_DSN || '';
const ENV = process.env.NODE_ENV || 'development';

export function register() {
  // Inicialización ligera para server y (en edge/SSR) sin romper si no hay DSN
  if (!SENTRY_DSN) return;

  // Server runtime (Node)
  try {
    SentryNode.init({
      dsn: SENTRY_DSN,
      environment: ENV,
      tracesSampleRate: 0.1,
    });
  } catch {}

  // Nota: la inicialización del navegador se hace en layout con un guard de window
}

export function initBrowserSentry() {
  if (typeof window === 'undefined') return;
  if (!SENTRY_DSN) return;
  try {
    SentryBrowser.init({
      dsn: SENTRY_DSN,
      environment: ENV,
      tracesSampleRate: 0.1,
    });
  } catch {}
}
