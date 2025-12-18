import type { Metadata } from 'next';
import React from 'react';
import { getSiteUrl } from '../../utils/siteUrl';

const baseUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Herramientas de IA - Directorio Completo',
  description:
    'Explora nuestro directorio completo de herramientas de inteligencia artificial. Comparadores, benchmarks, leaderboards y recursos para desarrolladores de IA.',
  keywords: [
    'herramientas IA',
    'comparador IA',
    'benchmark LLM',
    'leaderboard IA',
    'Chatbot Arena',
    'Hugging Face',
    'recursos IA',
    'desarrolladores IA',
  ],
  alternates: {
    canonical: `${baseUrl}/herramientas`,
  },
  openGraph: {
    title: 'Herramientas de IA - Directorio Completo | AIFinder',
    description:
      'Explora nuestro directorio completo de herramientas de inteligencia artificial. Comparadores, benchmarks, leaderboards y recursos para desarrolladores.',
    url: `${baseUrl}/herramientas`,
    type: 'website',
    siteName: 'AIFinder',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herramientas de IA - Directorio Completo | AIFinder',
    description: 'Explora nuestro directorio completo de herramientas de inteligencia artificial.',
    creator: '@aifinder_es',
  },
};

export default function HerramientasLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Herramientas de IA',
    description: 'Directorio completo de herramientas de inteligencia artificial',
    url: `${baseUrl}/herramientas`,
    mainEntity: {
      '@type': 'ItemList',
      name: 'Herramientas de IA',
      description: 'Comparadores, benchmarks y recursos de IA',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Herramientas', item: `${baseUrl}/herramientas` },
    ],
  };

  // FAQ Schema para rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cómo comparar modelos de IA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Puedes usar herramientas como Chatbot Arena para comparaciones crowdsourced, o Hugging Face Leaderboard para rankings por benchmarks específicos. AIFinder recopila las mejores herramientas para comparar modelos.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué benchmarks existen para evaluar LLMs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Los principales benchmarks incluyen MMLU (conocimiento general), HumanEval (código), GSM8K (matemáticas), y TruthfulQA (veracidad). Herramientas como Artificial Analysis y Open LLM Leaderboard agregan estos resultados.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
