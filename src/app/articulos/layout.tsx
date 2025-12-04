import type { Metadata } from 'next';
import React from 'react';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aifinder.es';

export const metadata: Metadata = {
  title: 'Artículos sobre Inteligencia Artificial',
  description:
    'Lee los últimos artículos, comparativas y noticias sobre herramientas de inteligencia artificial. Análisis en profundidad de ChatGPT, Claude, Midjourney, Stable Diffusion y más.',
  keywords: [
    'artículos IA',
    'noticias inteligencia artificial',
    'comparativas IA',
    'ChatGPT vs Claude',
    'Midjourney vs DALL-E',
    'herramientas IA',
  ],
  alternates: {
    canonical: `${baseUrl}/articulos`,
  },
  openGraph: {
    title: 'Artículos sobre Inteligencia Artificial | AIFinder',
    description:
      'Lee los últimos artículos, comparativas y noticias sobre herramientas de inteligencia artificial.',
    url: `${baseUrl}/articulos`,
    type: 'website',
    siteName: 'AIFinder',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artículos sobre Inteligencia Artificial | AIFinder',
    description:
      'Lee los últimos artículos, comparativas y noticias sobre herramientas de inteligencia artificial.',
    creator: '@aifinder_es',
  },
};

export default function ArticulosLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Artículos',
        item: `${baseUrl}/articulos`,
      },
    ],
  };

  const collectionPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Artículos sobre Inteligencia Artificial',
    description:
      'Colección de artículos, comparativas y noticias sobre herramientas de inteligencia artificial.',
    url: `${baseUrl}/articulos`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'AIFinder',
      url: baseUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      {children}
    </>
  );
}
