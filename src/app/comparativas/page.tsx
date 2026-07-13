import type { Metadata } from 'next';
import Link from 'next/link';
import ContentPageShell from '../../components/Pages/ContentPageShell';
import { getSiteUrl } from '../../utils/siteUrl';
import { getAllComparisons } from '../../utils/comparisons';

const baseUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Comparativas de herramientas de IA',
  description:
    'Comparativas cara a cara de las herramientas de IA más usadas: ChatGPT vs Claude, Midjourney vs DALL·E, Copilot vs Cursor y muchas más. Diferencias, precios y cuál elegir.',
  alternates: {
    canonical: `${baseUrl}/comparativas`,
  },
  openGraph: {
    title: 'Comparativas de herramientas de IA | AIFinder',
    description:
      'Comparativas cara a cara de las herramientas de IA más usadas: diferencias, precios y cuál elegir.',
    url: `${baseUrl}/comparativas`,
    type: 'website',
    siteName: 'AIFinder',
    locale: 'es_ES',
  },
};

export default function ComparisonsIndexPage() {
  const comparisons = getAllComparisons();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Comparativas de herramientas de IA',
    url: `${baseUrl}/comparativas`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: comparisons.length,
      itemListElement: comparisons.map((comparison, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: `${comparison.a} vs ${comparison.b}`,
        url: `${baseUrl}/comparativa/${comparison.slug}`,
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Comparativas', item: `${baseUrl}/comparativas` },
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
            <li className="text-zinc-200">Comparativas</li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Comparativas de herramientas de IA
          </h1>
          <p className="text-zinc-300 leading-relaxed">
            Elegir entre dos herramientas parecidas es donde más tiempo se pierde. Aquí tienes{' '}
            {comparisons.length} comparativas cara a cara de las IA más usadas, con sus diferencias
            reales, el modelo de precios de cada una y una recomendación clara de a quién le
            conviene cada opción.
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
          {comparisons.map((comparison) => (
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
      </ContentPageShell>
    </>
  );
}
