import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { aiCategories } from '../../../../data/ai-tools';
import { slugify, findCategoryBySlug } from '../../../../utils/slugify';
import CategoryPageClient from '../../../../components/Pages/CategoryPageClient';
import { getSiteUrl } from '../../../../utils/siteUrl';

type Props = {
  params: Promise<{ slug: string; subcategory: string }>;
};

// Pre-renderizar todas las combinaciones categoría/subcategoría en build time
export async function generateStaticParams() {
  const params: { slug: string; subcategory: string }[] = [];

  for (const category of aiCategories) {
    const categorySlug = slugify(category.name);
    for (const subcategory of category.subcategories) {
      params.push({
        slug: categorySlug,
        subcategory: slugify(subcategory.name),
      });
    }
  }

  return params;
}

// Encontrar subcategoría por slug dentro de una categoría
function findSubcategoryBySlug(
  categoryName: string,
  subcategorySlug: string,
): { name: string; tools: { name: string }[] } | undefined {
  const category = aiCategories.find((c) => c.name === categoryName);
  if (!category) return undefined;
  return category.subcategories.find((sub) => slugify(sub.name) === subcategorySlug);
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, subcategory: subcategorySlug } = await params;
  const category = findCategoryBySlug(aiCategories, slug);

  if (!category) {
    return { title: 'Categoría no encontrada' };
  }

  const subcategory = findSubcategoryBySlug(category.name, subcategorySlug);

  if (!subcategory) {
    return { title: 'Subcategoría no encontrada' };
  }

  const baseUrl = getSiteUrl();
  const toolCount = subcategory.tools.length;

  const title = `${subcategory.name} - ${category.name} | Herramientas de IA`;
  const description = `Descubre ${toolCount} herramientas de IA en ${subcategory.name} (${category.name}). Comparativas, precios y características de las mejores opciones.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/categoria/${slug}/${subcategorySlug}`,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/categoria/${slug}/${subcategorySlug}`,
      type: 'website',
      siteName: 'AIFinder',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function SubcategoryPage({ params }: Props) {
  const { slug, subcategory: subcategorySlug } = await params;
  const category = findCategoryBySlug(aiCategories, slug);

  if (!category) {
    notFound();
  }

  const subcategory = findSubcategoryBySlug(category.name, subcategorySlug);

  if (!subcategory) {
    notFound();
  }

  const baseUrl = getSiteUrl();

  // JSON-LD para SEO estructurado
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${subcategory.name} - Herramientas de IA`,
    description: `Herramientas de IA en ${subcategory.name}`,
    url: `${baseUrl}/categoria/${slug}/${subcategorySlug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: subcategory.tools.length,
      itemListElement: subcategory.tools.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: tool.name,
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
        name: category.name,
        item: `${baseUrl}/categoria/${slug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: subcategory.name,
        item: `${baseUrl}/categoria/${slug}/${subcategorySlug}`,
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
      <CategoryPageClient categoryName={category.name} subcategoryName={subcategory.name} />
    </>
  );
}
