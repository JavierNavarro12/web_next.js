import type { Metadata } from 'next';
import React from 'react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aifinder.es';

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description:
    'Términos y condiciones de uso de AIFinder. Información legal sobre el uso del directorio de herramientas de inteligencia artificial.',
  alternates: {
    canonical: `${baseUrl}/terminos`,
  },
  openGraph: {
    title: 'Términos y Condiciones | AIFinder',
    description: 'Términos y condiciones de uso del directorio AIFinder.',
    url: `${baseUrl}/terminos`,
    type: 'website',
    siteName: 'AIFinder',
  },
  twitter: {
    card: 'summary',
    title: 'Términos y Condiciones | AIFinder',
    description: 'Términos de uso de AIFinder.',
  },
};

export default function TerminosLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Términos', item: `${baseUrl}/terminos` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
