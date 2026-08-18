import React from 'react';
import Link from 'next/link';
import HomeContainer from '../components/views/HomeContainer';
import { aiCategories } from '../data/ai-tools';
import { slugify } from '../utils/slugify';
import { getAllTools } from '../utils/tools';
import { getAllComparisons } from '../utils/comparisons';

const homeFaqs = [
  {
    question: '¿Qué es AIFinder?',
    answer:
      'AIFinder es un directorio de herramientas de inteligencia artificial en español. Reúne más de 200 herramientas organizadas por categorías (texto, imagen, audio, vídeo, código, negocio) con una ficha propia para cada una: qué es, para qué sirve, ventajas, inconvenientes, precios y alternativas.',
  },
  {
    question: '¿Cuáles son las mejores IA para generar imágenes?',
    answer:
      'Entre las más usadas están Midjourney, DALL·E, Stable Diffusion, Adobe Firefly y Leonardo AI. Midjourney destaca en resultados artísticos, DALL·E en seguir bien el prompt y Stable Diffusion en ser open source y ejecutable en local. Cada una encaja en un caso de uso distinto.',
  },
  {
    question: '¿Cuál es la mejor IA para programar?',
    answer:
      'Depende de cómo trabajes. GitHub Copilot y Cursor se integran en el editor y completan código mientras escribes; Claude y ChatGPT funcionan mejor para explicar código, diseñar soluciones y depurar. Muchos desarrolladores combinan un asistente en el IDE con un chat para razonar.',
  },
  {
    question: '¿Hay herramientas de IA gratuitas?',
    answer:
      'Sí. Muchas ofrecen plan gratuito o freemium con límites de uso, como ChatGPT, Claude, Gemini o Perplexity, y otras son directamente open source, como Stable Diffusion o LLaMA. En AIFinder puedes filtrar el catálogo por herramientas gratuitas.',
  },
];

export default function HomePage() {
  // Sin searchParams a propósito: leerlos aquí vuelve dinámica toda la home y
  // pierde la caché de edge. HomeContainer los lee de la URL tras hidratar.
  const toolCount = getAllTools().length;
  const allComparisons = getAllComparisons();
  const comparisonCount = allComparisons.length;
  const featuredComparisons = allComparisons.slice(0, 8);

  // Los schemas Organization y WebSite están en layout.tsx <head>.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* La sección SEO va como children: HomeContainer la renderiza en el HTML
          del servidor (donde la app aún no se ha hidratado y Google la lee) y,
          ya en cliente, las vistas la colocan justo antes del footer. */}
      <HomeContainer>
        <section className="bg-black text-white border-t border-zinc-800">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Directorio de herramientas de IA en español
            </h1>
            <p className="text-zinc-300 leading-relaxed mb-4">
              AIFinder reúne {toolCount} herramientas de inteligencia artificial organizadas por
              categorías y subcategorías. Cada herramienta tiene su ficha con qué es, para qué
              sirve, características, ventajas, inconvenientes, precios y alternativas, para que
              puedas comparar sin dar vueltas por webs en inglés.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              Encontrarás IA para escribir y generar texto, crear imágenes y vídeo, clonar y
              sintetizar voz, programar, automatizar tareas de negocio, estudiar o analizar datos.
              Puedes filtrar por herramientas gratuitas y de pago, y explorar por categoría.
            </p>

            <h2 className="text-2xl font-bold mb-4">Categorías de herramientas de IA</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 list-none p-0 mb-12">
              {aiCategories.map((category) => {
                const count = category.subcategories.reduce(
                  (acc, sub) => acc + sub.tools.length,
                  0,
                );
                return (
                  <li key={category.name}>
                    <Link
                      href={`/categoria/${slugify(category.name)}`}
                      className="block rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-3 hover:border-zinc-600 transition-colors"
                    >
                      <span className="font-semibold">{category.name}</span>
                      {/* zinc-400: zinc-500 sobre este fondo no llega al contraste 4.5:1 (Lighthouse) */}
                      <span className="block text-zinc-400 text-sm">{count} herramientas</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <h2 className="text-2xl font-bold mb-4">Comparativas más buscadas</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0 mb-4">
              {featuredComparisons.map((comparison) => (
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
            <p className="text-zinc-500 text-sm mb-12">
              <Link href="/comparativas" className="text-blue-400 hover:underline">
                Ver las {comparisonCount} comparativas
              </Link>
            </p>

            <h2 className="text-2xl font-bold mb-4">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {homeFaqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-zinc-800 p-5">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-zinc-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </HomeContainer>
    </>
  );
}
