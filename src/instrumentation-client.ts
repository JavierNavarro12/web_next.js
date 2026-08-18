// Next.js ejecuta este archivo en el navegador al cargar la página.
// Lazy load de Sentry browser para no engordar el bundle inicial.
const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN || '';

if (dsn) {
  import('@sentry/browser')
    .then((Sentry) => {
      try {
        Sentry.init({
          dsn,
          environment: process.env.NODE_ENV || 'development',
          tracesSampleRate: 0.1,
        });
      } catch {}
    })
    .catch(() => {});
}

export {};
