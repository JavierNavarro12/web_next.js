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

      // 2. Esperar a que el DOM se actualice y luego buscar el elemento
      requestAnimationFrame(() => {
        const sectionId = subcategoryName.replace(/\s+/g, '-');

        // 3. Buscar todos los elementos con el mismo ID y encontrar el que tiene posición real
        const allElements = document.querySelectorAll(`[id="${sectionId}"]`);
        console.log(`🔍 Found ${allElements.length} elements with id "${sectionId}"`);

        let targetElement: Element | null = null;
        let bestRect = { top: 0, bottom: 0 };

        // Buscar el elemento que tiene la posición más alta (el que está realmente en el viewport)
        allElements.forEach((el, index) => {
          const rect = el.getBoundingClientRect();
          const htmlEl = el as HTMLElement;
          console.log(`  Element ${index}:`, {
            id: htmlEl.id,
            className: el.className,
            rectTop: rect.top,
            rectBottom: rect.bottom,
            offsetTop: htmlEl.offsetTop,
          });

          // Si este elemento tiene una posición real (no 0,0), usarlo
          if (rect.top !== 0 || rect.bottom !== 0) {
            if (!targetElement || rect.top > bestRect.top) {
              targetElement = el;
              bestRect = rect;
            }
          }
        });

        if (targetElement) {
          console.log('✅ Using element with real position:', {
            id: targetElement.id,
            rectTop: bestRect.top,
            rectBottom: bestRect.bottom,
          });

          // 4. Calcular la altura del header móvil
          let headerHeight = 120; // altura por defecto

          // Intentar diferentes selectores para el header móvil
          const mobileHeader =
            document.querySelector('.md\\:hidden.fixed') ||
            document.querySelector('.md\\:hidden') ||
            document.querySelector('[class*="fixed"][class*="md:hidden"]');

          if (mobileHeader) {
            headerHeight = mobileHeader.getBoundingClientRect().height;
            console.log('📏 Header height:', headerHeight);
          } else {
            console.log('⚠️ Header not found, using default height:', headerHeight);
          }

          // 5. Calcular la posición absoluta del elemento
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const elementAbsoluteTop = scrollTop + bestRect.top;
          // Ajustar el offset para que vaya un poco más arriba y sea más preciso
          const targetScrollPosition = Math.max(0, elementAbsoluteTop - headerHeight - 125);

          console.log('📍 Calculated positions:', {
            elementAbsoluteTop: elementAbsoluteTop,
            targetScrollPosition: targetScrollPosition,
            currentScrollTop: scrollTop,
            bestRectTop: bestRect.top,
            bestRectBottom: bestRect.bottom,
            headerHeight: headerHeight,
            offset: 125,
          });

          // 6. Hacer scroll hacia la sección
          window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth',
          });

          console.log('🔄 Scrolling to position:', targetScrollPosition);
        } else {
          console.log('❌ No element found with real position for:', sectionId);
        }

        // 7. Hacer scroll del carrusel de tabs después de un delay
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

        // 8. Resetear flags después de un tiempo
        setTimeout(() => {
          isNavigating.current = false;
          isProgrammaticScroll.current = false;
          console.log('✅ Navigation completed');
        }, 800);
      });
    },
    [setActiveSubcategory, tabRefs, tabsContainerRef, isProgrammaticScroll],
  );

  return {
    handleMobileSubcategoryClick,
  };
};
