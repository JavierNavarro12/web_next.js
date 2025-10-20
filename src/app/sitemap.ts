import type { MetadataRoute } from 'next';
import { articles } from '../data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://aifinder.es';
  const now = new Date();

  // Página principal
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${base}/herramientas`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // Artículos
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Páginas institucionales
  const institutionalPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/directrices`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/privacidad`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${base}/terminos`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${base}/unsubscribe`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return [...mainPages, ...articlePages, ...institutionalPages];
}
