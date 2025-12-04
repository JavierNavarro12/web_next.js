'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useActiveNavContext } from '../providers';

/**
 * Página dedicada /articulos que redirige a la home con la vista de artículos activa.
 * Esto proporciona una URL limpia y SEO-friendly para la sección de artículos.
 */
export default function ArticulosPage() {
  const router = useRouter();
  const { setActiveNav } = useActiveNavContext();

  useEffect(() => {
    // Activar la vista de artículos y redirigir a la home
    setActiveNav('articulos');
    router.replace('/');
  }, [router, setActiveNav]);

  // Mostrar loading mientras redirige
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p>Cargando artículos...</p>
      </div>
    </div>
  );
}
