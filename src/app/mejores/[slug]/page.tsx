import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContentPageShell from '../../../components/Pages/ContentPageShell';
import { getSiteUrl } from '../../../utils/siteUrl';
import { findToolBySlug, toolSlug } from '../../../utils/tools';
import { bestOfGuides, findBestOfGuide } from '../../../data/best-of';
import { getAffiliateLink } from '../../../data/affiliates';
import AffiliateCta from '../../../components/Affiliate/AffiliateCta';
import AffiliateNotice from '../../../components/Affiliate/AffiliateNotice';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return bestOfGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = findBestOfGuide(slug);

  if (!guide) {
    return { title: 'Guía no encontrada' };
  }

  const baseUrl = getSiteUrl();
  const year = new Date().getFullYear();
  const title = `${guide.metaTitle} (${year})`;

  return {
    title,
    description: guide.metaDescription,
    alternates: {
      canonical: `${baseUrl}/mejores/${slug}`,
    },
    openGraph: {
      title: `${title} | AIFinder`,
      description: guide.metaDescription,
      url: `${baseUrl}/mejores/${slug}`,
      type: 'article',
      siteName: 'AIFinder',
      locale: 'es_ES',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AIFinder`,
      description: guide.metaDescription,
    },
  };
}

export default async function BestOfPage({ params }: Props) {
  const { slug } = await params;
  const guide = findBestOfGuide(slug);

  if (!guide) {
    notFound();
  }

  const baseUrl = getSiteUrl();

  const entries = guide.items.map((item) => {
    const tool = findToolBySlug(toolSlug(item.tool));
    if (!tool) {
      notFound();
    }
    return { item, tool, affiliate: getAffiliateLink(item.tool) };
  });
  const hasAffiliates = entries.some((entry) => entry.affiliate);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: guide.title,
        item: `${baseUrl}/mejores/${slug}`,
      },
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: guide.title,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: entries.map(({ item, tool }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.tool,
      url: `${baseUrl}/herramienta/${tool.slug}`,
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
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
            <li className="text-zinc-200">{guide.title}</li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">{guide.title}</h1>

        <section className="mb-8">
          {guide.intro.map((paragraph) => (
            <p key={paragraph} className="text-zinc-300 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </section>

        <div className="space-y-6 mb-8">
          {entries.map(({ item, tool, affiliate }, index) => (
            <article
              key={tool.slug}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 md:p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-extrabold text-zinc-500 w-8 shrink-0">
                  {index + 1}
                </span>
                <Image
                  src={tool.logo || tool.image}
                  alt={item.tool}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-bold leading-tight">
                    <Link href={`/herramienta/${tool.slug}`} className="hover:underline">
                      {item.tool}
                    </Link>
                  </h2>
                  <p className="text-zinc-400 text-sm">{tool.description}</p>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-3">
                <span className="font-semibold text-zinc-200">Precio: </span>
                {item.priceLine}
              </p>
              {item.why.map((paragraph) => (
                <p key={paragraph} className="text-zinc-300 leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}
              <p className="text-zinc-300 leading-relaxed mb-4">
                <span className="font-semibold text-zinc-200">Ideal para: </span>
                {item.bestFor}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`/herramienta/${tool.slug}`}
                  className="inline-block px-4 py-2 rounded-lg border border-zinc-700 text-zinc-200 font-semibold hover:border-zinc-500 transition-colors"
                >
                  Ver ficha completa
                </Link>
                {affiliate && (
                  <AffiliateCta
                    href={affiliate.url}
                    toolName={item.tool}
                    source="mejores"
                    className="inline-block px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
                  >
                    Probar {item.tool} →
                  </AffiliateCta>
                )}
              </div>
              {affiliate?.perk && <p className="text-zinc-400 text-sm mt-3">{affiliate.perk}</p>}
            </article>
          ))}
        </div>

        {hasAffiliates && (
          <div className="mb-8">
            <AffiliateNotice />
          </div>
        )}

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Cómo elegimos</h2>
          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            {guide.criteria.map((criterion) => (
              <li key={criterion}>{criterion}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {guide.faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-zinc-800 p-5">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {guide.related.length > 0 && (
          <p className="text-zinc-500 text-sm">
            Sigue comparando:{' '}
            {guide.related.map((rel, index) => (
              <span key={rel.slug}>
                {index > 0 && ' · '}
                <Link href={`/comparativa/${rel.slug}`} className="text-blue-400 hover:underline">
                  {rel.label}
                </Link>
              </span>
            ))}
          </p>
        )}
      </ContentPageShell>
    </>
  );
}
