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
        const element = document.getElementById(sectionId);

        if (element) {
          console.log('✅ Found element:', sectionId);
          console.log('🔍 Element details:', {
            tagName: element.tagName,
            className: element.className,
            offsetTop: element.offsetTop,
            offsetHeight: element.offsetHeight,
            getBoundingClientRect: element.getBoundingClientRect(),
          });

          // 3. Calcular la altura del header móvil
          let headerHeight = 120; // altura por defecto

          // Intentar diferentes selectores para el header móvil
          const mobileHeader =
            document.querySelector('.md\\:hidden.fixed') ||
            document.querySelector('.md\\:hidden') ||
            document.querySelector('[class*="fixed"][class*="md:hidden"]');

          console.log('🔍 Mobile header search:', {
            selector1: document.querySelector('.md\\:hidden.fixed'),
            selector2: document.querySelector('.md\\:hidden'),
            selector3: document.querySelector('[class*="fixed"][class*="md:hidden"]'),
            allFixedElements: document.querySelectorAll('[class*="fixed"]'),
            allMdHiddenElements: document.querySelectorAll('[class*="md:hidden"]'),
          });

          if (mobileHeader) {
            headerHeight = mobileHeader.getBoundingClientRect().height;
            console.log('📏 Header height:', headerHeight);
          } else {
            console.log('⚠️ Header not found, using default height:', headerHeight);
          }

          // 4. Usar getBoundingClientRect para obtener la posición real en el viewport
          const rect = element.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          console.log('📊 Position calculation:', {
            rectTop: rect.top,
            rectBottom: rect.bottom,
            scrollTop: scrollTop,
            headerHeight: headerHeight,
            windowHeight: window.innerHeight,
          });

          // 5. DEBUGGING: Verificar si el elemento está realmente en el DOM
          console.log('🔍 DOM Debugging:', {
            elementExists: !!element,
            elementParent: element.parentElement?.tagName,
            elementParentClasses: element.parentElement?.className,
            elementDisplay: window.getComputedStyle(element).display,
            elementVisibility: window.getComputedStyle(element).visibility,
            elementPosition: window.getComputedStyle(element).position,
            elementTop: window.getComputedStyle(element).top,
            elementHeight: window.getComputedStyle(element).height,
            elementOffsetHeight: element.offsetHeight,
            elementClientHeight: element.clientHeight,
            elementScrollHeight: element.scrollHeight,
          });

          // 6. Si el elemento tiene rect.top = 0, intentar buscar elementos similares
          if (rect.top === 0 && rect.bottom === 0) {
            console.log('⚠️ Element has rect.top = 0, searching for similar elements...');
            const allDivs = document.querySelectorAll('div');
            const similarElements = Array.from(allDivs).filter(
              (div) => div.className.includes('mb-4') && div.className.includes('md:mb-6'),
            );
            console.log('🔍 Similar elements found:', similarElements.length);
            similarElements.forEach((el, index) => {
              const elRect = el.getBoundingClientRect();
              console.log(`  Element ${index}:`, {
                id: el.id,
                className: el.className,
                rectTop: elRect.top,
                rectBottom: elRect.bottom,
                offsetTop: el.offsetTop,
              });
            });
          }

          // 7. Calcular la posición absoluta del elemento
          const elementAbsoluteTop = scrollTop + rect.top;
          const targetScrollPosition = Math.max(0, elementAbsoluteTop - headerHeight - 20);

          console.log('📍 Calculated positions:', {
            elementAbsoluteTop: elementAbsoluteTop,
            targetScrollPosition: targetScrollPosition,
            currentScrollTop: scrollTop,
          });

          // 8. Hacer scroll hacia la sección
          window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth',
          });

          console.log('🔄 Scrolling to position:', targetScrollPosition);
        } else {
          console.log('❌ Element not found:', sectionId);
          console.log(
            '🔍 Available elements:',
            Array.from(document.querySelectorAll('[id]')).map((el) => el.id),
          );
        }

        // 9. Hacer scroll del carrusel de tabs después de un delay
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

        // 10. Resetear flags después de un tiempo
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
