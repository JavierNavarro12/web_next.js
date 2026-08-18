// Next.js ejecuta register() al arrancar el servidor. El init de Sentry vivía
// en src/app/(sentry)/instrumentation.ts, donde nada lo importaba y nunca corría.
export async function register() {
  const dsn = process.env.SENTRY_DSN || '';
  if (!dsn) return;

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const Sentry = await import('@sentry/node');
    try {
      Sentry.init({
        dsn,
        environment: process.env.NODE_ENV || 'development',
        tracesSampleRate: 0.1,
      });
    } catch {}
  }
}
