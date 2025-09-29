/**
 * Logger centralizado para la aplicación
 * En producción, los logs se envían a Sentry
 * En desarrollo, se muestran en consola
 */

import * as Sentry from '@sentry/browser';

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
      // Enviar a Sentry en producción
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
        // Si Sentry falla, al menos log local
        console.error('[ERROR]', message, error, context);
      }
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
