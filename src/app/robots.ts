import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://aifinder.es';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        // Bloquear URLs con parámetros de estado
        '/*?active=*',
        '/*?category=*',
        // Bloquear rutas erróneas
        '/articles/%7Bslug%7D',
        '/articles/{slug}',
        // Bloquear imágenes OG dinámicas (no deben indexarse como páginas)
        '/*opengraph-image*',
        '/*twitter-image*',
        // Bloquear rutas de API
        '/api/',
        // Bloquear página de desuscripción
        '/unsubscribe',
      ],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
