import type { MetadataRoute } from 'next';
import { articles } from '../data/articles';
import { aiCategories } from '../data/ai-tools';
import { slugify } from '../utils/slugify';

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
    {
      url: `${base}/articulos`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // Páginas de categorías (SEO optimizado)
  const categoryPages: MetadataRoute.Sitemap = aiCategories.map((category) => ({
    url: `${base}/categoria/${slugify(category.name)}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Páginas de subcategorías (SEO optimizado)
  const subcategoryPages: MetadataRoute.Sitemap = aiCategories.flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      url: `${base}/categoria/${slugify(category.name)}/${slugify(subcategory.name)}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
  );

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
  ];

  return [
    ...mainPages,
    ...categoryPages,
    ...subcategoryPages,
    ...articlePages,
    ...institutionalPages,
  ];
}
