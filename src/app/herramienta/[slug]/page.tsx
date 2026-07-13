import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContentPageShell from '../../../components/Pages/ContentPageShell';
import ToolGrid from '../../../components/Sections/ToolGrid';
import { getSiteUrl } from '../../../utils/siteUrl';
import { slugify } from '../../../utils/slugify';
import { getPricingText } from '../../../utils/toolUtils';
import { findToolBySlug, getAllTools, getRelatedTools, getToolDetail } from '../../../utils/tools';
import { getComparisonsForTool } from '../../../utils/comparisons';
import { isToolPublished, NOINDEX_ROBOTS } from '../../../utils/publishing';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTools().map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = findToolBySlug(slug);

  if (!tool) {
    return { title: 'Herramienta no encontrada' };
  }

  const detail = getToolDetail(tool.name);
  const baseUrl = getSiteUrl();
  const title = `${tool.name}: qué es, para qué sirve y precios`;
  const description = detail
    ? `${detail.tagline} Guía de ${tool.name}: usos, funciones, ventajas, inconvenientes, precios y alternativas.`
    : `Ficha de ${tool.name}: qué es, para qué sirve, precios y alternativas en ${tool.subcategory}.`;

  return {
    title,
    description: description.slice(0, 300),
    // Las fichas de tandas aún no publicadas se sirven con noindex.
    ...(isToolPublished(tool.name) ? {} : { robots: NOINDEX_ROBOTS }),
    alternates: {
      canonical: `${baseUrl}/herramienta/${slug}`,
    },
    openGraph: {
      title: `${title} | AIFinder`,
      description,
      url: `${baseUrl}/herramienta/${slug}`,
      type: 'article',
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

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = findToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const detail = getToolDetail(tool.name);

  if (!detail) {
    notFound();
  }

  const baseUrl = getSiteUrl();
  const related = getRelatedTools(tool);
  const toolComparisons = getComparisonsForTool(tool.name);
  const categorySlug = slugify(tool.category);
  const subcategorySlug = slugify(tool.subcategory);

  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: detail.intro,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: tool.subcategory,
    operatingSystem: 'Web',
    url: tool.url,
    image: `${baseUrl}${tool.image}`,
    offers: {
      '@type': 'Offer',
      price: tool.pricing === 'paid' ? undefined : '0',
      priceCurrency: 'EUR',
      category: getPricingText(tool.pricing),
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
        name: tool.category,
        item: `${baseUrl}/categoria/${categorySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: tool.subcategory,
        item: `${baseUrl}/categoria/${categorySlug}/${subcategorySlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: tool.name,
        item: `${baseUrl}/herramienta/${slug}`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: detail.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
              <Link href={`/categoria/${categorySlug}`} className="hover:text-white">
                {tool.category}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href={`/categoria/${categorySlug}/${subcategorySlug}`}
                className="hover:text-white"
              >
                {tool.subcategory}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-zinc-200">{tool.name}</li>
          </ol>
        </nav>

        <header className="flex items-start gap-4 mb-6">
          <Image
            src={tool.logo || tool.image}
            alt={tool.name}
            width={72}
            height={72}
            priority
            className="w-16 h-16 md:w-18 md:h-18 object-contain rounded-lg bg-zinc-900 p-2 border border-zinc-800"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{tool.name}</h1>
            <p className="text-zinc-300 mt-1">{detail.tagline}</p>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
              <span className="px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                {getPricingText(tool.pricing)}
              </span>
              <span className="px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                {tool.subcategory}
              </span>
            </div>
          </div>
        </header>

        {tool.url && (
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block mb-8 px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
          >
            Visitar {tool.name}
          </a>
        )}

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">¿Qué es {tool.name}?</h2>
          <p className="text-zinc-300 leading-relaxed">{detail.intro}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">¿Para qué sirve {tool.name}?</h2>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            {detail.useCases.map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Características principales</h2>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            {detail.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
            <h2 className="text-xl font-bold mb-3">Ventajas</h2>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              {detail.pros.map((pro) => (
                <li key={pro}>{pro}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
            <h2 className="text-xl font-bold mb-3">Inconvenientes</h2>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              {detail.cons.map((con) => (
                <li key={con}>{con}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Precio de {tool.name}</h2>
          <p className="text-zinc-300 leading-relaxed">{detail.pricingNote}</p>
        </section>

        {related.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Alternativas a {tool.name}</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Otras herramientas de {tool.subcategory} que puedes comparar con {tool.name}:
            </p>
            <ToolGrid tools={related} />
          </section>
        )}

        {toolComparisons.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-3">Comparativas con {tool.name}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
              {toolComparisons.map((comparison) => (
                <li key={comparison.slug}>
                  <Link
                    href={`/comparativa/${comparison.slug}`}
                    className="block rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3 hover:border-zinc-600 transition-colors"
                  >
                    <span className="font-semibold">
                      {comparison.a} vs {comparison.b}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Preguntas frecuentes sobre {tool.name}</h2>
          <div className="space-y-4">
            {detail.faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-zinc-800 p-5">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-zinc-500 text-sm">
          ¿Buscas algo parecido? Explora todas las herramientas de{' '}
          <Link href={`/categoria/${categorySlug}`} className="text-blue-400 hover:underline">
            {tool.category}
          </Link>
          .
        </p>
      </ContentPageShell>
    </>
  );
}
