import React from 'react';
import Link from 'next/link';
import ToolsPage from '../../components/Pages/ToolsPage';
import { aiCategories } from '../../data/ai-tools';
import { slugify } from '../../utils/slugify';
import { getAllTools } from '../../utils/tools';
import { isToolPublished } from '../../utils/publishing';

export default function HerramientasPage() {
  // Índice del catálogo servido desde el servidor: la vista interactiva es de
  // cliente y sus enlaces no llegan al HTML, así que esta era la única página
  // del menú que no enlazaba ninguna ficha para Google.
  const publishedSlugs = new Set(
    getAllTools()
      .filter((tool) => isToolPublished(tool.name))
      .map((tool) => tool.slug),
  );
  const index = aiCategories
    .map((category) => ({
      name: category.name,
      tools: category.subcategories
        .flatMap((sub) => sub.tools)
        .map((tool) => ({ name: tool.name, slug: slugify(tool.name) }))
        .filter((tool) => publishedSlugs.has(tool.slug))
        .filter((tool, position, list) => list.findIndex((t) => t.slug === tool.slug) === position)
        .sort((a, b) => a.name.localeCompare(b.name, 'es')),
    }))
    .filter((category) => category.tools.length > 0);

  const total = index.reduce((acc, category) => acc + category.tools.length, 0);

  return (
    <ToolsPage>
      <section className="bg-black text-white border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-2">Índice del directorio</h2>
          <p className="text-zinc-400 mb-8">
            Las {total} herramientas con ficha publicada, ordenadas por categoría.
          </p>
          {index.map((category) => (
            <div key={category.name} className="mb-8">
              <h3 className="font-bold mb-3">
                <Link
                  href={`/categoria/${slugify(category.name)}`}
                  className="text-blue-400 hover:underline"
                >
                  {category.name}
                </Link>
              </h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-2 list-none p-0 text-sm">
                {category.tools.map((tool) => (
                  <li key={tool.slug}>
                    <Link
                      href={`/herramienta/${tool.slug}`}
                      className="text-zinc-300 hover:text-white underline decoration-zinc-700 underline-offset-4"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </ToolsPage>
  );
}
