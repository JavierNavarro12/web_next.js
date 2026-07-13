import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { aiCategories } from '../../../data/ai-tools';
import ContentPageShell from '../../../components/Pages/ContentPageShell';
import ToolGrid from '../../../components/Sections/ToolGrid';
import { slugify, findCategoryBySlug } from '../../../utils/slugify';
import { getSiteUrl } from '../../../utils/siteUrl';
import { getCategoryContent } from '../../../utils/categoryContent';
import { getToolsBySubcategory } from '../../../utils/tools';

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
  const content = getCategoryContent(category.name);

  const title = content?.title || `${category.name} - Herramientas de IA`;
  const description =
    content?.intro.slice(0, 155) ||
    `Descubre las mejores herramientas de IA en ${category.name}. ${toolCount || 'Múltiples'} herramientas con comparativas, precios y características.`;

  return {
    title,
    description,
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
  const content = getCategoryContent(category.name);
  const toolCount = categoryData.subcategories.reduce((acc, sub) => acc + sub.tools.length, 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: content?.title || `${category.name} - Herramientas de IA`,
    description: content?.intro || `Herramientas de IA en la categoría ${category.name}`,
    url: `${baseUrl}/categoria/${slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: toolCount,
      itemListElement: categoryData.subcategories.flatMap((sub) =>
        sub.tools.map((tool, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: tool.name,
          url: `${baseUrl}/herramienta/${slugify(tool.name)}`,
        })),
      ),
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
    ],
  };

  const faqJsonLd = content?.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      }
    : null;

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
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <ContentPageShell>
        <nav aria-label="Miga de pan" className="text-sm text-zinc-400 mb-6">
          <ol className="flex flex-wrap items-center gap-2 list-none p-0">
            <li>
              <Link href="/" className="hover:text-white">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-zinc-200">{category.name}</li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {content?.title || `${category.name} - Herramientas de IA`}
          </h1>
          <p className="text-zinc-300 leading-relaxed mb-4">
            {content?.intro ||
              `Recopilamos ${toolCount} herramientas de IA en la categoría ${category.name}.`}
          </p>
          {content?.body && <p className="text-zinc-300 leading-relaxed">{content.body}</p>}
          <p className="text-zinc-500 text-sm mt-4">
            {toolCount} herramientas en {categoryData.subcategories.length} subcategorías.
          </p>
        </header>

        {categoryData.subcategories.map((subcategory) => {
          const tools = getToolsBySubcategory(category.name, subcategory.name);
          const subSlug = slugify(subcategory.name);

          return (
            <section key={subcategory.name} className="mb-10">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h2 className="text-2xl font-bold">
                  <Link href={`/categoria/${slug}/${subSlug}`} className="hover:underline">
                    {subcategory.name}
                  </Link>
                </h2>
                <Link
                  href={`/categoria/${slug}/${subSlug}`}
                  className="text-blue-400 hover:underline text-sm shrink-0"
                >
                  Ver todas
                </Link>
              </div>
              <ToolGrid tools={tools} />
            </section>
          );
        })}

        {content?.faqs && content.faqs.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Preguntas frecuentes sobre {category.name.toLowerCase()}
            </h2>
            <div className="space-y-4">
              {content.faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-zinc-800 p-5">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <p className="text-zinc-500 text-sm">
          ¿Prefieres buscar y filtrar?{' '}
          <Link
            href={`/?category=${encodeURIComponent(category.name)}`}
            className="text-blue-400 hover:underline"
          >
            Explora {category.name} en el buscador
          </Link>
          .
        </p>
      </ContentPageShell>
    </>
  );
}
