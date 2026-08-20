import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppProviders from './providers';
import React from 'react';
import PWAStartupRedirect from '../components/PWA/PWAStartupRedirect';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import GoogleAnalytics from '../components/Analytics/GoogleAnalytics';
import MicrosoftClarity from '../components/Analytics/MicrosoftClarity';
import DataFast from '../components/Analytics/DataFast';
import { CookieConsentProvider } from '../store/cookieConsent';
import CookieBanner from '../components/Cookies/CookieBanner';
import { getSiteUrl } from '../utils/siteUrl';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const baseUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'AIFinder - Directorio de Herramientas de IA',
    template: '%s | AIFinder',
  },
  description:
    'Descubre las mejores IA para programar, escribir, generar imágenes y vídeo, voz y estudiar. Comparativas claras, pros/contras y precios en español.',
  keywords: [
    'inteligencia artificial',
    'IA',
    'herramientas IA',
    'ChatGPT',
    'Claude',
    'Gemini',
    'Midjourney',
    'DALL-E',
    'generador de imágenes IA',
    'chatbot IA',
    'IA para programar',
    'IA español',
  ],
  authors: [{ name: 'AIFinder', url: baseUrl }],
  creator: 'AIFinder',
  publisher: 'AIFinder',
  applicationName: 'AIFinder',
  alternates: {
    canonical: baseUrl,
    languages: {
      'es-ES': baseUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      // Reclamación del sitio en Pinterest (cuenta info@aifinder.es)
      'p:domain_verify': 'b1009be82d37e1ecc8e1ece7052bae6e',
    },
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-64x64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: [{ url: '/icons/icon-180x180.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'AIFinder',
    description:
      'Descubre las mejores IA para programar, escribir, generar imágenes y vídeo, voz y estudiar. Comparativas claras, pros/contras y precios en español.',
    siteName: 'AIFinder',
    url: baseUrl,
    type: 'website',
    locale: 'es_ES',
    // La imagen 1200x630 la genera src/app/opengraph-image.tsx (convención de Next).
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIFinder',
    description:
      'Descubre las mejores IA para programar, escribir, generar imágenes y vídeo, voz y estudiar. Comparativas claras, pros/contras y precios en español.',
    // Sin creator: la cuenta @aifinder_es no existe; si algún día se crea, volver a añadirla.
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        {/* Sentry (navegador) se inicializa en src/instrumentation-client.ts:
            el script inline anterior serializaba la función con toString() y su
            import('@sentry/browser') no podía resolverse en el navegador. */}
        {/* Los preconnect a fonts.googleapis/gstatic sobraban: next/font autoaloja
            las fuentes en build y nunca hay petición a Google Fonts. Los de los
            subdominios fastly de Mux también: cambian por región y solo los usan
            los pocos artículos con vídeo. */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://datafa.st" />
        <link rel="dns-prefetch" href="https://mux.com" />
        {/* Prerender especulativo de fichas y comparativas al pasar el ratón:
            navegación interna casi instantánea en navegadores que lo soportan. */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: {
                    or: [
                      { href_matches: '/herramienta/*' },
                      { href_matches: '/comparativa/*' },
                      { href_matches: '/categoria/*' },
                    ],
                  },
                  eagerness: 'moderate',
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AIFinder',
              url: baseUrl,
              logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/icons/icon-512x512.png`,
                width: 512,
                height: 512,
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  contactType: 'customer support',
                  email: 'info@aifinder.es',
                  availableLanguage: ['es', 'en'],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AIFinder',
              url: baseUrl,
              inLanguage: 'es-ES',
              publisher: { '@type': 'Organization', name: 'AIFinder', url: baseUrl },
            }),
          }}
        />
        {/* El FAQPage vive en src/app/page.tsx: aquí en el layout se inyectaba
            en TODAS las páginas y chocaba con el FAQ propio de fichas y categorías. */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <CookieConsentProvider>
          <GoogleAnalytics />
          <MicrosoftClarity />
          <DataFast />
          <ErrorBoundary>
            <AppProviders>
              <PWAStartupRedirect />
              {children}
            </AppProviders>
          </ErrorBoundary>
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
