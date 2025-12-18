import type { Metadata } from 'next';
import React from 'react';
import { getSiteUrl } from '../../utils/siteUrl';

const baseUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad de AIFinder. Información sobre cómo recopilamos, usamos y protegemos tus datos. Transparencia y control sobre tu información personal.',
  alternates: {
    canonical: `${baseUrl}/privacidad`,
  },
  openGraph: {
    title: 'Política de Privacidad | AIFinder',
    description: 'Información sobre cómo recopilamos, usamos y protegemos tus datos en AIFinder.',
    url: `${baseUrl}/privacidad`,
    type: 'website',
    siteName: 'AIFinder',
  },
  twitter: {
    card: 'summary',
    title: 'Política de Privacidad | AIFinder',
    description: 'Cómo protegemos tu privacidad en AIFinder.',
  },
};

export default function PrivacidadLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Privacidad', item: `${baseUrl}/privacidad` },
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
