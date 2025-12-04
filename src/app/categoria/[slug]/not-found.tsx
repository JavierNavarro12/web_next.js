import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-white mb-4">Categoría no encontrada</h1>
      <p className="text-zinc-400 mb-8 text-center max-w-md">
        La categoría que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
