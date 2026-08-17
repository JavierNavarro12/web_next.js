import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContentPageShell from '../../../components/Pages/ContentPageShell';
import { getSiteUrl } from '../../../utils/siteUrl';
import { findToolBySlug, toolSlug } from '../../../utils/tools';
import { findComparisonBySlug, getAllComparisons } from '../../../utils/comparisons';
import { isComparisonPublished, NOINDEX_ROBOTS } from '../../../utils/publishing';
import { discontinuedTools } from '../../../data/discontinued';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllComparisons().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comparison = findComparisonBySlug(slug);

  if (!comparison) {
    return { title: 'Comparativa no encontrada' };
  }

  const baseUrl = getSiteUrl();
  const description = comparison.intro.slice(0, 155);

  return {
    title: comparison.title,
    description,
    ...(isComparisonPublished() ? {} : { robots: NOINDEX_ROBOTS }),
    alternates: {
      canonical: `${baseUrl}/comparativa/${slug}`,
    },
    openGraph: {
      title: `${comparison.title} | AIFinder`,
      description,
      url: `${baseUrl}/comparativa/${slug}`,
      type: 'article',
      siteName: 'AIFinder',
      locale: 'es_ES',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${comparison.title} | AIFinder`,
      description,
      creator: '@aifinder_es',
    },
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const comparison = findComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  const toolA = findToolBySlug(toolSlug(comparison.a));
  const toolB = findToolBySlug(toolSlug(comparison.b));

  if (!toolA || !toolB) {
    notFound();
  }

  const baseUrl = getSiteUrl();

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${comparison.a} vs ${comparison.b}`,
        item: `${baseUrl}/comparativa/${slug}`,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: comparison.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const contenders = [
    { tool: toolA, name: comparison.a },
    { tool: toolB, name: comparison.b },
  ];

  // Si una de las dos ha cerrado, la comparativa deja de ser una decisión real
  const retired = [comparison.a, comparison.b]
    .filter((name) => discontinuedTools[name])
    .map((name) => ({ name, note: discontinuedTools[name].note }));
  const stillAlive = discontinuedTools[comparison.a] ? comparison.b : comparison.a;

  return (
    <>
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
            <li className="text-zinc-200">
              {comparison.a} vs {comparison.b}
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
          {comparison.title}
        </h1>

        {retired.length > 0 && (
          <div
            role="note"
            className="mb-8 rounded-xl border border-amber-700/60 bg-amber-950/30 p-5"
          >
            <p className="font-bold text-amber-200 mb-2">
              {retired.map((r) => r.name).join(' y ')}{' '}
              {retired.length > 1 ? 'ya no están disponibles' : 'ya no está disponible'}
            </p>
            {retired.map((r) => (
              <p key={r.name} className="text-zinc-300 leading-relaxed mb-2">
                {r.note}
              </p>
            ))}
            <p className="text-zinc-400 text-sm mt-3">
              Mantenemos la comparativa como referencia histórica, pero si estás eligiendo hoy,{' '}
              <Link
                href={`/herramienta/${toolSlug(stillAlive)}`}
                className="text-blue-400 hover:underline"
              >
                mira la ficha de {stillAlive}
              </Link>{' '}
              o sus alternativas.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 mb-8">
          {contenders.map(({ tool, name }) => (
            <Link
              key={tool.slug}
              href={`/herramienta/${tool.slug}`}
              className="flex flex-col items-center text-center rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-600 transition-colors"
            >
              <Image
                src={tool.logo || tool.image}
                alt={name}
                width={56}
                height={56}
                className="w-14 h-14 object-contain rounded-lg mb-2"
                priority
              />
              <span className="font-bold text-lg">{name}</span>
              <span className="text-zinc-400 text-sm">{tool.description}</span>
              <span className="text-blue-400 text-sm mt-2">Ver ficha</span>
            </Link>
          ))}
        </div>

        <section className="mb-8">
          <p className="text-zinc-300 leading-relaxed">{comparison.intro}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">
            {comparison.a} vs {comparison.b}: comparativa
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse border border-zinc-800">
              <thead>
                <tr className="bg-zinc-900/60">
                  {comparison.table.headers.map((header) => (
                    <th key={header} className="px-4 py-2 border border-zinc-800 text-zinc-200">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.table.rows.map((row, index) => (
                  <tr key={row[0]} className={index % 2 === 0 ? 'bg-black' : 'bg-zinc-900/40'}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-2 border border-zinc-800 text-zinc-300 align-top"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {comparison.sections?.map((section) => (
          <section key={section.title} className="mb-8">
            <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="text-zinc-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Veredicto</h2>
          <p className="text-zinc-300 leading-relaxed">{comparison.verdict}</p>
        </section>

        <section className="mb-8 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
            <h2 className="text-xl font-bold mb-3">Elige {comparison.a} si...</h2>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              {comparison.whenA.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
            <h2 className="text-xl font-bold mb-3">Elige {comparison.b} si...</h2>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300">
              {comparison.whenB.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {comparison.faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-zinc-800 p-5">
                <h3 className="font-bold mb-2">{faq.question}</h3>
                <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-zinc-500 text-sm">
          Ver todas las{' '}
          <Link href="/comparativas" className="text-blue-400 hover:underline">
            comparativas de herramientas de IA
          </Link>
          .
        </p>
      </ContentPageShell>
    </>
  );
}
