'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAppContext, useSubcategoryContext, useActiveNavContext } from '../../app/providers';

function isStandaloneDisplay(): boolean {
  if (typeof window === 'undefined') return false;
  // matchMedia para PWA instaladas y navigator.standalone para iOS
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    // @ts-expect-error: property 'standalone' solo existe en Safari iOS
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
    if (pathname !== '/') {
      // Reset de estado y navegación a inicio (Explorar)
      setActiveCategory(null);
      setActiveSubcategory(null);
      setActiveNav('explorar');
      router.replace('/');
      requestAnimationFrame(() => {
        const mainElement = document.querySelector('main');
        if (mainElement) {
          (mainElement as HTMLElement).scrollTo({ top: 0, behavior: 'auto' });
        } else {
          window.scrollTo({ top: 0, behavior: 'auto' });
        }
      });
    }
  }, [pathname, router, setActiveCategory, setActiveSubcategory, setActiveNav]);

  return null;
}
