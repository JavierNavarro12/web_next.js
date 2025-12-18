import type { Metadata } from 'next';
import React from 'react';
import { getSiteUrl } from '../../utils/siteUrl';

const baseUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Directrices de Listado - Criterios para Aparecer',
  description:
    'Conoce los criterios y directrices que seguimos en AIFinder para listar herramientas de IA. Garantía de calidad, mantenimiento activo y propuesta de valor clara.',
  alternates: {
    canonical: `${baseUrl}/directrices`,
  },
  openGraph: {
    title: 'Directrices de Listado | AIFinder',
    description:
      'Conoce los criterios y directrices que seguimos en AIFinder para listar herramientas de IA.',
    url: `${baseUrl}/directrices`,
    type: 'website',
    siteName: 'AIFinder',
  },
  twitter: {
    card: 'summary',
    title: 'Directrices de Listado | AIFinder',
    description: 'Criterios para aparecer en el directorio de herramientas de IA.',
  },
};

export default function DirectricesLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Directrices', item: `${baseUrl}/directrices` },
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
