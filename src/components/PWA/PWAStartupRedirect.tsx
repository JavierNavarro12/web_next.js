'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAppContext, useSubcategoryContext, useActiveNavContext } from '../../app/providers';

function isStandaloneDisplay(): boolean {
  if (typeof window === 'undefined') return false;
  // matchMedia para PWA instaladas y navigator.standalone para iOS
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (typeof navigator !== 'undefined' &&
      (navigator as unknown as { standalone?: boolean }).standalone === true)
  );
}

export default function PWAStartupRedirect() {
  const pathname = usePathname();
  const router = useRouter();
  const { setActiveCategory } = useAppContext();
  const { setActiveSubcategory } = useSubcategoryContext();
  const { setActiveNav } = useActiveNavContext();

  useEffect(() => {
    if (!isStandaloneDisplay()) return;
    if (typeof window === 'undefined') return;
    // Solo forzar la página inicial una vez por sesión de la PWA
    const alreadyRedirected = sessionStorage.getItem('pwaInitRedirect');
    if (alreadyRedirected) return;
    sessionStorage.setItem('pwaInitRedirect', '1');

    // Reset de estado SIEMPRE al inicio de la sesión de la PWA,
    // aunque ya estemos en '/': evita reabrir con categoría almacenada
    setActiveCategory(null);
    setActiveSubcategory(null);
    setActiveNav('explorar');
    try {
      localStorage.removeItem('activeCategory');
      localStorage.removeItem('activeSubcategory');
    } catch {}

    // Si no estamos en '/', navegar a inicio (Explorar)
    if (pathname !== '/') {
      router.replace('/');
    }

    // Asegurar scroll al top tras el arranque
    requestAnimationFrame(() => {
      const mainElement = document.querySelector('main');
      if (mainElement) {
        (mainElement as HTMLElement).scrollTo({ top: 0, behavior: 'auto' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- solo debe ejecutarse una vez al montar (inicio de sesión PWA)
  }, []);

  return null;
}
