import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ⚠️ Configuración de optimización de imágenes con CDN - ¡IMPLEMENTADO! ✅
  images: {
    // Permitir dominios para CDN (remotePatterns es la nueva API recomendada)
    remotePatterns: [
      // CDN principal (cuando esté configurado)
      {
        protocol: 'https',
        hostname: 'cdn.aifinder.es',
        port: '',
        pathname: '/**',
      },
      // Fallback a Vercel (tu servidor actual)
      {
        protocol: 'https',
        hostname: 'aifinder.es',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.aifinder.es',
        port: '',
        pathname: '/**',
      },
      // Preview deployments
      {
        protocol: 'https',
        hostname: 'vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
        port: '',
        pathname: '/**',
      },
      // Desarrollo local
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      // Mux para videos
      {
        protocol: 'https',
        hostname: '*.mux.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'stream.mux.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Configuración de formato y calidad
    formats: ['image/webp', 'image/avif'], // Formatos modernos y optimizados
    minimumCacheTTL: 60 * 60 * 24 * 30, // Cache por 30 días
    // Optimización automática
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 🔄 Static Generation para categorías - NO IMPLEMENTADO (futura optimización)
  // Para implementar después: crear páginas con generateStaticParams()
  // Ejemplo: /app/categorias/[categoria]/page.tsx
  async headers() {
    const isProd = process.env.NODE_ENV === 'production';
    return [
      // Headers específicos para archivos HLS (.m3u8)
      {
        source: '/images/:path*.m3u8',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, HEAD, OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Range' },
          { key: 'Content-Type', value: 'application/x-mpegURL' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
          { key: 'Accept-Ranges', value: 'bytes' },
        ],
      },
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
              // permitir imágenes (incluye thumbnails de Mux)
              "img-src 'self' data: blob: https: https://*.mux.com https://stream.mux.com",
              "font-src 'self' https:",
              // scripts y estilos (permitir eval solo en desarrollo para HMR)
              `script-src 'self' 'unsafe-inline' ${isProd ? '' : "'unsafe-eval'"} https:`,
              "style-src 'self' 'unsafe-inline' https:",
              // bloquear plugins antiguos
              "object-src 'none'",
              // HLS remotos (Mux) y locales
              "media-src 'self' blob: https://*.mux.com https://stream.mux.com data:",
              // conexiones para hls.js y fetch (incluye Mux y HMR ws en dev)
              `connect-src 'self' https: blob: ${isProd ? '' : 'ws:'} https://*.mux.com https://stream.mux.com`,
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
        destination: '/icons/icon-32x32.png',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
