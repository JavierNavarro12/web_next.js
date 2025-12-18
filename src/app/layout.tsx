import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppProviders from './providers';
import React from 'react';
import { initBrowserSentry } from '../app/(sentry)/instrumentation';
import PWAStartupRedirect from '../components/PWA/PWAStartupRedirect';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import GoogleAnalytics from '../components/Analytics/GoogleAnalytics';
import MicrosoftClarity from '../components/Analytics/MicrosoftClarity';
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
    images: [{ url: '/icons/icon-512x512.png', width: 512, height: 512, alt: 'AIFinder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIFinder',
    description:
      'Descubre las mejores IA para programar, escribir, generar imágenes y vídeo, voz y estudiar. Comparativas claras, pros/contras y precios en español.',
    images: ['/icons/icon-512x512.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        {/* Sentry (navegador) inicializado de forma segura en cliente */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(${initBrowserSentry.toString()})();`,
          }}
        />
        {/* DataFast analytics */}
        <script
          defer
          data-website-id="dfid_vDROHeJI9P2sNpr1i9WUW"
          data-domain="www.aifinder.es"
          src="https://datafa.st/js/script.js"
        />
        {/* Preconnect para recursos críticos - mejora LCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://datafa.st" />
        <link rel="preconnect" href="https://mux.com" />
        <link rel="dns-prefetch" href="https://mux.com" />
        <link rel="preconnect" href="https://manifest-gcp-us-east1-vop1.fastly.mux.com" />
        <link rel="dns-prefetch" href="https://manifest-gcp-us-east1-vop1.fastly.mux.com" />
        <link rel="preconnect" href="https://chunk-gcp-us-east1-vop1.fastly.mux.com" />
        <link rel="dns-prefetch" href="https://chunk-gcp-us-east1-vop1.fastly.mux.com" />
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
              sameAs: ['https://x.com/aifinder_es'],
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
              potentialAction: {
                '@type': 'SearchAction',
                target: `${baseUrl}/?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <CookieConsentProvider>
          <GoogleAnalytics />
          <MicrosoftClarity />
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
