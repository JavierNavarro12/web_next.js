import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <p className="text-zinc-500 text-sm font-mono mb-2">404</p>
      <h1 className="text-4xl font-bold text-white mb-4 text-center">Esta página no existe</h1>
      <p className="text-zinc-400 mb-8 text-center max-w-md">
        El enlace está roto o la página se ha movido. El directorio sigue aquí: más de 200
        herramientas de IA con fichas, precios y comparativas.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors"
        >
          Volver al inicio
        </Link>
        <Link
          href="/herramientas"
          className="px-6 py-3 border border-zinc-700 text-white rounded-lg font-medium hover:border-zinc-500 transition-colors"
        >
          Ver herramientas
        </Link>
        <Link
          href="/comparativas"
          className="px-6 py-3 border border-zinc-700 text-white rounded-lg font-medium hover:border-zinc-500 transition-colors"
        >
          Comparativas
        </Link>
      </div>
    </div>
  );
}
