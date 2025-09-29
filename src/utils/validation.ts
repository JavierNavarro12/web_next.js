/**
 * Utilidades de validación centralizadas
 */

// Regex para validación de email (RFC 5322 simplificado)
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Valida si un email tiene formato válido
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') {
    return false;
  }
  return EMAIL_REGEX.test(email.trim());
}

/**
 * Normaliza un email (lowercase y trim)
 */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/**
 * Valida y normaliza un email
 * @returns email normalizado o null si es inválido
 */
export function validateAndNormalizeEmail(email: string): string | null {
  if (!validateEmail(email)) {
    return null;
  }
  return normalizeEmail(email);
}

/**
 * Tipos de source válidos para newsletter
 */
export const VALID_NEWSLETTER_SOURCES = new Set(['hero', 'footer', 'modal', 'articles'] as const);

export type NewsletterSource = 'hero' | 'footer' | 'modal' | 'articles';

/**
 * Valida si un source de newsletter es válido
 */
export function validateNewsletterSource(source: string): source is NewsletterSource {
  return VALID_NEWSLETTER_SOURCES.has(source as NewsletterSource);
}
