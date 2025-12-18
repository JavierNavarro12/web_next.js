export const DEFAULT_SITE_URL = 'https://www.aifinder.es';

/**
 * Canonical site URL used for metadata, robots and sitemap.
 *
 * Why this exists:
 * - Vercel is currently redirecting `aifinder.es` -> `www.aifinder.es` (HTTP 307).
 * - If we emit sitemap/canonicals with `aifinder.es`, Google ends up crawling URLs that redirect.
 *
 * This helper normalizes the environment value so the app consistently uses the canonical host.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
  const trimmed = raw.replace(/\/+$/, '');

  // If someone configured the env to the apex domain, normalize to the canonical www domain.
  if (trimmed === 'https://aifinder.es') return DEFAULT_SITE_URL;

  return trimmed;
}
