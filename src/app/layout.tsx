import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppProviders from './providers';
import React from 'react';
import '../app/(sentry)/instrumentation';

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
  title: 'AIFinder',
  description: 'Descubre y compara las mejores herramientas de IA',
  applicationName: 'AIFinder',
  icons: {
    icon: [
      { url: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/icon-72x72.png', sizes: '72x72', type: 'image/png' },
    ],
    apple: [{ url: '/icons/icon-192x192.png', sizes: '192x192' }],
    other: [{ rel: 'mask-icon', url: '/icons/icon.svg', color: '#000000' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'AIFinder',
    description: 'Descubre y compara las mejores herramientas de IA',
    siteName: 'AIFinder',
    url: baseUrl,
    type: 'website',
    images: [
      {
        url: '/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'AIFinder',
      },
    ],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
