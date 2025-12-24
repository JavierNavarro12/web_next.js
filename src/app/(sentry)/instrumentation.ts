import * as SentryNode from '@sentry/node';

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

  // Nota: la inicialización del navegador se hace en layout con lazy loading
}

export function initBrowserSentry() {
  if (typeof window === 'undefined') return;
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN || '';
  if (!dsn) return;

  // Lazy load Sentry browser para reducir bundle inicial
  import('@sentry/browser')
    .then((SentryBrowser) => {
      try {
        SentryBrowser.init({
          dsn,
          environment: ENV,
          tracesSampleRate: 0.1,
        });
      } catch {}
    })
    .catch(() => {});
}
