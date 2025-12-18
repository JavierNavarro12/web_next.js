import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { aiCategories } from '../../../data/ai-tools';
import { slugify, findCategoryBySlug } from '../../../utils/slugify';
import CategoryPageClient from '../../../components/Pages/CategoryPageClient';
import { getSiteUrl } from '../../../utils/siteUrl';

type Props = {
  params: Promise<{ slug: string }>;
};

// Pre-renderizar todas las categorías en build time
export async function generateStaticParams() {
  return aiCategories.map((category) => ({
    slug: slugify(category.name),
  }));
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategoryBySlug(aiCategories, slug);

  if (!category) {
    return {
      title: 'Categoría no encontrada',
    };
  }

  const baseUrl = getSiteUrl();
  const categoryData = aiCategories.find((c) => c.name === category.name);
  const toolCount = categoryData?.subcategories.reduce((acc, sub) => acc + sub.tools.length, 0);

  // Extraer nombres de herramientas populares para keywords
  const topTools =
    categoryData?.subcategories
      .flatMap((sub) => sub.tools.slice(0, 3))
      .map((tool) => tool.name)
      .slice(0, 6) || [];

  const subcategoryNames = categoryData?.subcategories.map((s) => s.name) || [];

  const title = `${category.name} - Herramientas de IA`;
  const description = `Descubre las mejores herramientas de IA en ${category.name}. ${toolCount || 'Múltiples'} herramientas organizadas por subcategorías con comparativas, precios y características.`;

  return {
    title,
    description,
    keywords: [
      `IA ${category.name}`,
      `herramientas ${category.name}`,
      'inteligencia artificial',
      ...topTools,
      ...subcategoryNames,
    ],
    alternates: {
      canonical: `${baseUrl}/categoria/${slug}`,
    },
    openGraph: {
      title: `${title} | AIFinder`,
      description,
      url: `${baseUrl}/categoria/${slug}`,
      type: 'website',
      siteName: 'AIFinder',
      locale: 'es_ES',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AIFinder`,
      description,
      creator: '@aifinder_es',
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = findCategoryBySlug(aiCategories, slug);

  if (!category) {
    notFound();
  }

  const categoryData = aiCategories.find((c) => c.name === category.name);

  if (!categoryData) {
    notFound();
  }

  const baseUrl = getSiteUrl();

  // JSON-LD para SEO estructurado
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} - Herramientas de IA`,
    description: `Herramientas de IA en la categoría ${category.name}`,
    url: `${baseUrl}/categoria/${slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: categoryData.subcategories.reduce((acc, sub) => acc + sub.tools.length, 0),
      itemListElement: categoryData.subcategories.map((sub, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: sub.name,
        description: `${sub.tools.length} herramientas de IA`,
      })),
    },
  };

  // Breadcrumb JSON-LD
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
        name: 'Categorías',
        item: `${baseUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `${baseUrl}/categoria/${slug}`,
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
      <CategoryPageClient categoryName={category.name} />
    </>
  );
}
