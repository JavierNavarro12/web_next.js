import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '../../utils/siteUrl';

const baseUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Sobre AIFinder',
  description:
    'Qué es AIFinder, quién lo mantiene y con qué criterio se elabora el directorio: precios verificados en la web de cada fabricante, con fuente y fecha.',
  alternates: { canonical: `${baseUrl}/sobre` },
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">Sobre AIFinder</h1>

        <p className="text-zinc-300 leading-relaxed mb-4">
          AIFinder es un directorio de herramientas de inteligencia artificial en español. Reúne más
          de 200 herramientas organizadas por categorías, cada una con su ficha: qué es, para qué
          sirve, ventajas, inconvenientes, precios y alternativas. Lo completan comparativas
          directas entre las herramientas que la gente de verdad se plantea a la vez, y artículos
          prácticos sin humo.
        </p>
        <p className="text-zinc-300 leading-relaxed mb-8">
          Lo mantiene <strong className="text-white">Javier Navarro</strong>, desarrollador web,
          desde España. No pertenece a ninguna de las empresas listadas.
        </p>

        <h2 className="text-2xl font-bold mb-4">Criterio editorial</h2>
        <ul className="space-y-3 text-zinc-300 leading-relaxed list-disc pl-5 mb-8">
          <li>
            <strong className="text-white">
              Los precios se verifican en la web del fabricante
            </strong>
            , con fuente enlazada y fecha de consulta. Si una herramienta no publica sus tarifas de
            forma comprobable, su ficha lo dice en vez de inventar una cifra.
          </li>
          <li>
            <strong className="text-white">Las herramientas cerradas no se esconden</strong>: si un
            producto ha dejado de operar, su ficha lo cuenta con fecha y fuente, y deja de
            recomendarse como alternativa.
          </li>
          <li>
            <strong className="text-white">Sin patrocinios en el listado</strong>: ninguna
            herramienta paga por aparecer, por su posición ni por el tono de su ficha.
          </li>
          <li>
            <strong className="text-white">Cada comparativa tiene veredicto</strong>, con casos
            concretos de cuándo elegir cada opción — incluido cuándo no elegir ninguna de las dos.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p className="text-zinc-300 leading-relaxed mb-8">
          ¿Falta una herramienta, hay un precio desactualizado o algo no cuadra? Escríbenos a{' '}
          <a href="mailto:info@aifinder.es" className="text-blue-400 hover:underline">
            info@aifinder.es
          </a>{' '}
          o usa el formulario de feedback del pie de página. Las correcciones de datos se revisan y
          publican en días, no en meses.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/herramientas"
            className="px-5 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors"
          >
            Explorar el directorio
          </Link>
          <Link
            href="/directrices"
            className="px-5 py-2.5 border border-zinc-700 text-white rounded-lg font-medium hover:border-zinc-500 transition-colors"
          >
            Directrices de listado
          </Link>
        </div>
      </div>
    </div>
  );
}
