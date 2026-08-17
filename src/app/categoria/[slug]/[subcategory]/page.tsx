import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { aiCategories } from '../../../../data/ai-tools';
import ContentPageShell from '../../../../components/Pages/ContentPageShell';
import ToolGrid from '../../../../components/Sections/ToolGrid';
import { slugify, findCategoryBySlug } from '../../../../utils/slugify';
import { getSiteUrl } from '../../../../utils/siteUrl';
import { getSubcategoryContent } from '../../../../utils/categoryContent';
import { getToolsBySubcategory } from '../../../../utils/tools';
import { NOINDEX_ROBOTS } from '../../../../utils/publishing';

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
  const content = getSubcategoryContent(category.name, subcategory.name);

  const title = content?.title || `${subcategory.name} - ${category.name} | Herramientas de IA`;
  const description =
    content?.intro.slice(0, 155) ||
    `Descubre ${toolCount} herramientas de IA en ${subcategory.name} (${category.name}). Comparativas, precios y características.`;

  return {
    title,
    description,
    // Las subcategorías son índices de enlaces con poco texto propio: se
    // rastrean y se siguen sus enlaces, pero no compiten por entrar al índice.
    robots: NOINDEX_ROBOTS,
    alternates: {
      canonical: `${baseUrl}/categoria/${slug}/${subcategorySlug}`,
    },
    openGraph: {
      title: `${title} | AIFinder`,
      description,
      url: `${baseUrl}/categoria/${slug}/${subcategorySlug}`,
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
  const content = getSubcategoryContent(category.name, subcategory.name);
  const tools = getToolsBySubcategory(category.name, subcategory.name);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: content?.title || `${subcategory.name} - Herramientas de IA`,
    description: content?.intro || `Herramientas de IA en ${subcategory.name}`,
    url: `${baseUrl}/categoria/${slug}/${subcategorySlug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: tools.length,
      itemListElement: tools.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: tool.name,
        url: `${baseUrl}/herramienta/${tool.slug}`,
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
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

      <ContentPageShell>
        <nav aria-label="Miga de pan" className="text-sm text-zinc-400 mb-6">
          <ol className="flex flex-wrap items-center gap-2 list-none p-0">
            <li>
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`/categoria/${slug}`} className="hover:text-white">
                {category.name}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-zinc-200">{subcategory.name}</li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {content?.title || `${subcategory.name} - ${category.name}`}
          </h1>
          <p className="text-zinc-300 leading-relaxed mb-4">
            {content?.intro ||
              `Recopilamos ${tools.length} herramientas de IA en ${subcategory.name}.`}
          </p>
          {content?.body && <p className="text-zinc-300 leading-relaxed">{content.body}</p>}
          <p className="text-zinc-500 text-sm mt-4">{tools.length} herramientas.</p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Herramientas de {subcategory.name.toLowerCase()}
          </h2>
          <ToolGrid tools={tools} />
        </section>

        <p className="text-zinc-500 text-sm">
          Ver todas las categorías de{' '}
          <Link href={`/categoria/${slug}`} className="text-blue-400 hover:underline">
            {category.name}
          </Link>
          .
        </p>
      </ContentPageShell>
    </>
  );
}
