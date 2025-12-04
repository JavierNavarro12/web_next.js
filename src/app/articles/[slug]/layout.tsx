import type { Metadata } from 'next';
import { articles } from '../../../data/articles';
import React from 'react';

type Props = { children: React.ReactNode; params: Promise<{ slug: string }> };

// Genera las rutas estáticas en build time para SEO
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://aifinder.es';

  const title = article.title;
  const description = article.description;
  const url = `${base}/articles/${article.slug}`;
  const images = [{ url: article.image, width: 1200, height: 630, alt: article.title }];

  return {
    title,
    description,
    alternates: { canonical: url },
    authors: article.author ? [{ name: article.author }] : undefined,
    keywords: [
      'inteligencia artificial',
      'IA',
      'herramientas IA',
      article.categoryLabel,
      ...article.title.split(' ').slice(0, 5),
    ],
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images,
      siteName: 'AIFinder',
      locale: 'es_ES',
      publishedTime: article.date,
      authors: article.author ? [article.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map((i) => i.url),
      creator: '@aifinder',
      site: '@aifinder',
    },
  };
}

export default async function ArticleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://aifinder.es';

  // JSON-LD Article con schema enriquecido
  const jsonLd = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: [article.image],
        author: article.author
          ? {
              '@type': 'Person',
              name: article.author,
              image: article.authorImage,
            }
          : undefined,
        datePublished: article.date,
        dateModified: article.date,
        publisher: {
          '@type': 'Organization',
          name: 'AIFinder',
          logo: {
            '@type': 'ImageObject',
            url: `${base}/icons/icon-512x512.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${base}/articles/${article.slug}`,
        },
        articleSection: article.categoryLabel,
        keywords: ['inteligencia artificial', 'IA', article.categoryLabel],
        inLanguage: 'es-ES',
      }
    : null;

  // JSON-LD BreadcrumbList: Inicio > Artículos > {Título}
  const breadcrumbJsonLd = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: base,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Artículos',
            item: `${base}/articulos`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: `${base}/articles/${article.slug}`,
          },
        ],
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {children}
    </>
  );
}
