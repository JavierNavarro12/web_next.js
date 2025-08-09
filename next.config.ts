import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    const isProd = process.env.NODE_ENV === 'production';
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Permitir iframes de YouTube (controlado por CSP frame-src)
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
          // HSTS: forzar HTTPS en navegadores compatibles
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // CSP: política razonable y compatible con Next.js
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              // permitir iframes de YouTube y uso propio
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://*.youtube.com https://*.youtube-nocookie.com",
              // no permitir ser embebidos por otros
              "frame-ancestors 'none'",
              // permitir imágenes
              "img-src 'self' data: blob: https:",
              "font-src 'self' https:",
              // scripts y estilos (permitir eval solo en desarrollo para HMR)
              `script-src 'self' 'unsafe-inline' ${isProd ? '' : "'unsafe-eval'"} https:`,
              "style-src 'self' 'unsafe-inline' https:",
              // bloquear plugins antiguos
              "object-src 'none'",
              // HLS remotos (Mux) y locales
              "media-src 'self' blob: https://*.mux.com",
              // conexiones para hls.js y fetch (incluye Mux y HMR ws en dev)
              `connect-src 'self' https: blob: ${isProd ? '' : 'ws:'} https://*.mux.com`,
            ].join('; '),
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/apple-touch-icon.png',
        destination: '/icons/icon-192x192.png',
        permanent: false,
      },
      {
        source: '/apple-touch-icon-precomposed.png',
        destination: '/icons/icon-192x192.png',
        permanent: false,
      },
      {
        source: '/favicon.ico',
        destination: '/icons/icon-96x96.png',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
