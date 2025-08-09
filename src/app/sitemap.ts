import type { MetadataRoute } from 'next';
import { articles } from '../data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://aifinder.es';
  const now = new Date();

  const routes = ['/', '/herramientas'];
  const articleRoutes = articles.map((a) => `/articles/${a.slug}`);

  return [...routes, ...articleRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.6,
  }));
}
