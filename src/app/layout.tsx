import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppProviders from './providers';
import React from 'react';
import { initBrowserSentry } from '../app/(sentry)/instrumentation';
import PWAStartupRedirect from '../components/PWA/PWAStartupRedirect';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aifinder.es';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'AIFinder',
  description: 'Descubre y compara las mejores herramientas de IA',
  applicationName: 'AIFinder',
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
    description: 'Descubre y compara las mejores herramientas de IA',
    siteName: 'AIFinder',
    url: baseUrl,
    type: 'website',
    images: [{ url: '/icons/icon-512x512.png', width: 512, height: 512, alt: 'AIFinder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIFinder',
    description: 'Descubre y compara las mejores herramientas de IA',
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
        <link rel="preconnect" href="https://mux.com" />
        <link rel="dns-prefetch" href="https://mux.com" />
        <link rel="preconnect" href="https://manifest-gcp-us-east1-vop1.fastly.mux.com" />
        <link rel="dns-prefetch" href="https://manifest-gcp-us-east1-vop1.fastly.mux.com" />
        <link rel="preconnect" href="https://chunk-gcp-us-east1-vop1.fastly.mux.com" />
        <link rel="dns-prefetch" href="https://chunk-gcp-us-east1-vop1.fastly.mux.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <AppProviders>
          <PWAStartupRedirect />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
