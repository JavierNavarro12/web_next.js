import type { Metadata } from 'next';
import { articles } from '../../../data/articles';
import React from 'react';

type Props = { children: React.ReactNode; params: Promise<{ slug: string }> };

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
    openGraph: {
      type: 'article',
      url,
      title,
      description,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map((i) => i.url),
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

  // JSON-LD Article
  const jsonLd = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: [article.image],
        author: article.author ? { '@type': 'Person', name: article.author } : undefined,
        datePublished: article.date,
        mainEntityOfPage: `${base}/articles/${article.slug}`,
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
      {children}
    </>
  );
}
