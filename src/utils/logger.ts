/**
 * Logger centralizado para la aplicación
 * En producción, los logs se envían a Sentry (lazy loaded)
 * En desarrollo, se muestran en consola
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

class Logger {
  private isProduction = process.env.NODE_ENV === 'production';
  private isDevelopment = process.env.NODE_ENV === 'development';

  private shouldLog(level: LogLevel): boolean {
    // En producción, solo errores van a Sentry
    if (this.isProduction) {
      return level === 'error';
    }
    // En desarrollo y test, mostrar todo
    return true;
  }

  info(...args: unknown[]): void {
    if (this.shouldLog('info') && !this.isProduction) {
      console.info('[INFO]', ...args);
    }
  }

  warn(...args: unknown[]): void {
    if (this.shouldLog('warn') && !this.isProduction) {
      console.warn('[WARN]', ...args);
    }
  }

  error(message: string, error?: unknown, context?: Record<string, unknown>): void {
    if (!this.shouldLog('error')) return;

    if (this.isProduction) {
      // Sin DSN configurado, Sentry.captureException sería un no-op silencioso:
      // el error se perdería. Mejor dejarlo al menos en consola.
      if (!process.env.NEXT_PUBLIC_SENTRY_DSN) {
        console.error('[ERROR]', message, error, context);
        return;
      }
      // Enviar a Sentry en producción (lazy load para reducir bundle inicial)
      import('@sentry/browser')
        .then((Sentry) => {
          try {
            if (error instanceof Error) {
              Sentry.captureException(error, {
                contexts: {
                  details: context,
                },
                tags: {
                  customMessage: message,
                },
              });
            } else {
              Sentry.captureMessage(message, {
                level: 'error',
                contexts: {
                  details: { error, ...context },
                },
              });
            }
          } catch {
            console.error('[ERROR]', message, error, context);
          }
        })
        .catch(() => {
          console.error('[ERROR]', message, error, context);
        });
    } else {
      // En desarrollo, mostrar en consola
      console.error('[ERROR]', message, error, context);
    }
  }

  debug(...args: unknown[]): void {
    if (this.isDevelopment) {
      console.debug('[DEBUG]', ...args);
    }
  }
}

export const logger = new Logger();
