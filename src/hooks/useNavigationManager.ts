import { useRef, useCallback, useEffect } from 'react';

export const useNavigationManager = (
  setActiveSubcategory: (subcategory: string | null) => void,
  isProgrammaticScroll: React.MutableRefObject<boolean>,
) => {
  const navigationTimeout = useRef<NodeJS.Timeout | null>(null);
  const isNavigating = useRef(false);

  // Función centralizada para navegar a una subcategoría
  const navigateToSubcategory = useCallback(
    (subcategoryName: string) => {
      // Evitar múltiples navegaciones simultáneas
      if (isNavigating.current) return;

      isNavigating.current = true;
      isProgrammaticScroll.current = true;

      // Limpiar timeout anterior si existe
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current);
      }

      const sectionId = subcategoryName.replace(/\s+/g, '-');
      const element = document.getElementById(sectionId);

      if (element) {
        // Calcular la altura real del header móvil
        const isMobile = window.innerWidth < 768;
        const mobileHeader = document.querySelector('.md\\:hidden.fixed');
        let headerHeight = 120; // altura por defecto

        if (isMobile && mobileHeader) {
          headerHeight = mobileHeader.getBoundingClientRect().height;
        } else if (!isMobile) {
          // En desktop, calcular altura del header desktop
          const headerRow1 = document.querySelector('[data-header-row="1"]');
          const headerRow2 = document.querySelector('[data-header-row="2"]');
          headerHeight = 0;
          if (headerRow1) headerHeight += headerRow1.getBoundingClientRect().height;
          if (headerRow2) headerHeight += headerRow2.getBoundingClientRect().height;
        }

        const elementPosition = element.offsetTop - headerHeight - 10; // 10px extra de padding

        // Actualizar el estado de la subcategoría activa INMEDIATAMENTE
        setActiveSubcategory(subcategoryName);

        // Hacer scroll
        const mainElement = document.querySelector('main');
        if (mainElement) {
          mainElement.scrollTo({
            top: Math.max(0, elementPosition),
            behavior: 'smooth',
          });
        } else {
          window.scrollTo({
            top: Math.max(0, elementPosition),
            behavior: 'smooth',
          });
        }
      }

      // Resetear flags después de un tiempo
      navigationTimeout.current = setTimeout(() => {
        isNavigating.current = false;
        isProgrammaticScroll.current = false;
      }, 500);
    },
    [setActiveSubcategory, isProgrammaticScroll],
  );

  // Función para navegar a la parte superior
  const navigateToTop = useCallback(() => {
    isProgrammaticScroll.current = true;

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 400);
  }, [isProgrammaticScroll]);

  // Cleanup al desmontar
  useEffect(() => {
    return () => {
      if (navigationTimeout.current) {
        clearTimeout(navigationTimeout.current);
      }
    };
  }, []);

  return {
    navigateToSubcategory,
    navigateToTop,
    isNavigating: isNavigating.current,
  };
};
