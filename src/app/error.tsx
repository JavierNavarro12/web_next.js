'use client';

import Link from 'next/link';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-white mb-4 text-center">Algo ha fallado</h1>
      <p className="text-zinc-400 mb-8 text-center max-w-md">
        Ha ocurrido un error al cargar esta página. Suele arreglarse reintentando.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={reset}
          className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors"
        >
          Reintentar
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-zinc-700 text-white rounded-lg font-medium hover:border-zinc-500 transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
