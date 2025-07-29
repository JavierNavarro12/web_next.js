import { useRef, useCallback } from 'react';

export const useMobileNavigation = (
  setActiveSubcategory: (subcategory: string | null) => void,
  tabRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>,
  tabsContainerRef: React.RefObject<HTMLDivElement | null>,
) => {
  const isNavigating = useRef(false);

  const handleMobileSubcategoryClick = useCallback(
    (subcategoryName: string) => {
      // Evitar múltiples clics simultáneos
      if (isNavigating.current) return;

      isNavigating.current = true;

      // 1. Actualizar la subcategoría activa
      setActiveSubcategory(subcategoryName);

      const sectionId = subcategoryName.replace(/\s+/g, '-');
      const element = document.getElementById(sectionId);

      if (element) {
        // Calcular la altura real del header móvil
        const mobileHeader = document.querySelector('.md\\:hidden.fixed');
        let headerHeight = 120; // altura por defecto

        if (mobileHeader) {
          headerHeight = mobileHeader.getBoundingClientRect().height;
        }

        const elementPosition = element.offsetTop - headerHeight - 10; // 10px extra de padding

        // Scroll hacia la sección
        window.scrollTo({
          top: Math.max(0, elementPosition),
          behavior: 'smooth',
        });
      }

      // 2. Hacer scroll del carrusel de tabs después de un breve delay
      setTimeout(() => {
        const button = tabRefs.current[subcategoryName];
        const container = tabsContainerRef.current;

        if (button && container) {
          // Calcular scroll para centrar el elemento seleccionado
          const containerRect = container.getBoundingClientRect();
          const buttonRect = button.getBoundingClientRect();

          // Si el botón está fuera de vista, centrarlo
          if (buttonRect.left < containerRect.left || buttonRect.right > containerRect.right) {
            const scrollLeft = button.offsetLeft - containerRect.width / 2 + buttonRect.width / 2;

            container.scrollTo({
              left: Math.max(0, scrollLeft),
              behavior: 'smooth',
            });
          }
        }

        // Resetear el flag de navegación
        setTimeout(() => {
          isNavigating.current = false;
        }, 300);
      }, 150);
    },
    [setActiveSubcategory, tabRefs, tabsContainerRef],
  );

  return {
    handleMobileSubcategoryClick,
    isNavigating,
  };
};
