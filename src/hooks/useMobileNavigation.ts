import { useRef, useCallback } from 'react';

export const useMobileNavigation = (
  setActiveSubcategory: (subcategory: string | null) => void,
  tabRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>,
  tabsContainerRef: React.RefObject<HTMLDivElement | null>,
  isProgrammaticScroll: React.MutableRefObject<boolean>,
) => {
  const isNavigating = useRef(false);

  const handleMobileSubcategoryClick = useCallback(
    (subcategoryName: string) => {
      // Evitar múltiples clics simultáneos
      if (isNavigating.current) return;

      console.log('🚀 Mobile navigation clicked:', subcategoryName);

      isNavigating.current = true;
      isProgrammaticScroll.current = true;

      // 1. Actualizar inmediatamente la subcategoría activa
      setActiveSubcategory(subcategoryName);

      // 2. Buscar el elemento de la sección
      const sectionId = subcategoryName.replace(/\s+/g, '-');
      const element = document.getElementById(sectionId);

      if (element) {
        console.log('✅ Found element:', sectionId);

        // 3. Calcular la altura del header móvil
        const mobileHeader = document.querySelector('.md\\:hidden.fixed');
        let headerHeight = 120; // altura por defecto

        if (mobileHeader) {
          headerHeight = mobileHeader.getBoundingClientRect().height;
          console.log('📏 Header height:', headerHeight);
        }

        // 4. Calcular la posición del elemento
        const elementPosition = element.offsetTop - headerHeight - 10;
        console.log('📍 Element position:', elementPosition);

        // 5. Hacer scroll hacia la sección usando window.scrollTo
        window.scrollTo({
          top: Math.max(0, elementPosition),
          behavior: 'smooth',
        });

        console.log('🔄 Scrolling to position:', Math.max(0, elementPosition));
      } else {
        console.log('❌ Element not found:', sectionId);
        console.log('🔍 Available elements:', document.querySelectorAll('[id]'));
      }

      // 6. Hacer scroll del carrusel de tabs después de un delay
      setTimeout(() => {
        const button = tabRefs.current[subcategoryName];
        const container = tabsContainerRef.current;

        if (button && container) {
          console.log('🎯 Centering tab in carousel');
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
      }, 300);

      // 7. Resetear flags después de un tiempo
      setTimeout(() => {
        isNavigating.current = false;
        isProgrammaticScroll.current = false;
        console.log('✅ Navigation completed');
      }, 800);
    },
    [setActiveSubcategory, tabRefs, tabsContainerRef, isProgrammaticScroll],
  );

  return {
    handleMobileSubcategoryClick,
  };
};
