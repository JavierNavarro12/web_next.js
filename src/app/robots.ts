import type { MetadataRoute } from 'next';
import { getSiteUrl } from '../utils/siteUrl';

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        // Bloquear URLs con parámetros de estado
        '/*?active=*',
        '/*?category=*',
        // Bloquear URLs de búsqueda (SearchAction JSON-LD)
        '/*?q=*',
        // Bloquear rutas erróneas
        '/articles/%7Bslug%7D',
        '/articles/{slug}',
        // Bloquear rutas de API
        '/api/',
        // Bloquear página de desuscripción
        '/unsubscribe',
      ],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
