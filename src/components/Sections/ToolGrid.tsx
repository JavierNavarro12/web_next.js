import Image from 'next/image';
import Link from 'next/link';
import type { ToolWithContext } from '../../utils/tools';
import { getPricingText } from '../../utils/toolUtils';

/**
 * Rejilla de herramientas enlazadas a su ficha. Server component:
 * los enlaces salen en el HTML y Google los rastrea.
 */
export default function ToolGrid({ tools }: { tools: ToolWithContext[] }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-none p-0">
      {tools.map((tool) => (
        <li key={tool.slug}>
          <Link
            href={`/herramienta/${tool.slug}`}
            className="h-full bg-zinc-900 rounded-lg p-4 flex flex-col items-center text-center border border-zinc-800 hover:border-zinc-600 transition-colors"
          >
            <Image
              src={tool.logo || tool.image}
              alt={tool.name}
              width={48}
              height={48}
              loading="lazy"
              className="w-12 h-12 object-contain mb-2 rounded"
            />
            <span className="font-bold text-white">{tool.name}</span>
            <span className="text-zinc-400 text-sm">{tool.description}</span>
            <span className="text-zinc-500 text-xs mt-1">{getPricingText(tool.pricing)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
