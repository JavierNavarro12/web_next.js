import React from 'react';
import HomeContainer from '../components/views/HomeContainer';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aifinder.es';

// FAQ Schema para rich snippets en Google (renderizado en servidor)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es AIFinder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AIFinder es un directorio completo de herramientas de inteligencia artificial en español. Incluye más de 200 herramientas organizadas por categorías como generación de texto, imágenes, audio, video y código.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuáles son las mejores IA para generar imágenes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las mejores IA para generar imágenes incluyen Midjourney, DALL-E 3, Stable Diffusion, Adobe Firefly, Leonardo AI y Ideogram. Cada una tiene sus fortalezas: Midjourney destaca en arte, DALL-E en precisión de prompts, y Stable Diffusion es open source.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la mejor IA para programar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las mejores IAs para programar son GitHub Copilot, Claude, Cursor, y ChatGPT. GitHub Copilot se integra directamente en el IDE, mientras que Claude y ChatGPT son excelentes para explicaciones de código y debugging.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hay herramientas de IA gratuitas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, muchas herramientas ofrecen versiones gratuitas o freemium. ChatGPT, Claude, Gemini, Stable Diffusion, y LLaMA son algunas de las IAs más populares con opciones gratuitas.',
      },
    },
  ],
};

// BreadcrumbList para navegación estructurada
const breadcrumbSchema = {
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
      name: 'Explorar',
      item: `${baseUrl}/`,
    },
  ],
};

export default async function HomePage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  const q = sp.q ?? '';

  return (
    <>
      {/* Schemas JSON-LD renderizados en servidor para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeContainer initialSearchTerm={q} initialCategory={sp.category || ''} />
    </>
  );
}
