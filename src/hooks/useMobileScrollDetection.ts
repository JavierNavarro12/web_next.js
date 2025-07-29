import { useEffect, useRef } from 'react';
import { AICategory } from '../data/ai-tools';

export const useMobileScrollDetection = (
  currentCategory: AICategory | null,
  activeSubcategory: string | null,
  setActiveSubcategory: (value: string | null) => void,
  isProgrammaticScroll: React.MutableRefObject<boolean>,
) => {
  const lastScrollTime = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastActiveSection = useRef<string | null>(null);

  useEffect(() => {
    console.log('🎯 useMobileScrollDetection: Hook initialized', {
      currentCategory: currentCategory?.name,
      activeSubcategory,
      isProgrammaticScroll: isProgrammaticScroll.current,
    });

    const handleScroll = () => {
      console.log('🎯 Scroll event detected!'); // Test simple

      // Si es scroll programático, no procesar
      if (isProgrammaticScroll.current) {
        console.log('⏸️ Skipping scroll detection - programmatic scroll');
        return;
      }

      const now = Date.now();
      lastScrollTime.current = now;

      // Limpiar timeout anterior
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Esperar a que el scroll se estabilice antes de detectar la sección
      scrollTimeout.current = setTimeout(() => {
        // Verificar que no ha habido más scroll reciente
        if (Date.now() - lastScrollTime.current < 200) return;

        console.log('🔄 Mobile scroll detection: Processing scroll event');
        console.log('📊 Scroll state:', {
          isProgrammaticScroll: isProgrammaticScroll.current,
          currentActiveSubcategory: activeSubcategory,
          lastActiveSection: lastActiveSection.current,
        });

        if (currentCategory) {
          // Buscar el header móvil con el selector correcto
          const mobileHeader =
            document.querySelector(
              '.md\\:hidden.fixed.top-0.left-0.right-0.z-40.bg-black.border-b.border-zinc-800.flex.flex-col.w-full.overflow-hidden',
            ) ||
            document.querySelector('.md\\:hidden.fixed') ||
            document.querySelector('[class*="md:hidden"][class*="fixed"]') ||
            document.querySelector('header') ||
            document.querySelector('[class*="header"]');

          // Si no encontramos el header, usar una altura fija más realista
          // El header móvil tiene: logo + padding + tabs = ~120px
          const headerHeight = mobileHeader ? mobileHeader.getBoundingClientRect().height : 120;

          console.log('📏 Header height for detection:', headerHeight);

          let closestSection = '';
          let closestDistance = Infinity;

          currentCategory.subcategories.forEach((subcat) => {
            const sectionId = subcat.name.replace(/\s+/g, '-');
            const allElements = document.querySelectorAll(`[id="${sectionId}"]`);

            allElements.forEach((el) => {
              const rect = el.getBoundingClientRect();

              if (rect.top !== 0 || rect.bottom !== 0) {
                const elementTop = rect.top;
                const elementBottom = rect.bottom;

                // Una sección está visible si su parte superior está cerca del header
                // y su parte inferior está en el viewport
                // Ajustamos para detectar 130px antes (como el offset de navegación)
                const isVisible = elementTop <= headerHeight + 230 && elementBottom > headerHeight;

                console.log(`🔍 Checking section "${subcat.name}":`, {
                  elementTop: elementTop,
                  elementBottom: elementBottom,
                  headerHeight: headerHeight,
                  isVisible: isVisible,
                });

                if (isVisible) {
                  // Calcular qué porcentaje del elemento está visible
                  const visibleTop = Math.max(elementTop, headerHeight);
                  const visibleBottom = Math.min(elementBottom, window.innerHeight);
                  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                  const totalHeight = elementBottom - elementTop;
                  const visibilityPercentage =
                    totalHeight > 0 ? (visibleHeight / totalHeight) * 100 : 0;

                  const distance = Math.abs(elementTop - headerHeight);
                  console.log(
                    `  ✅ Section "${subcat.name}" is visible, distance: ${distance}, visibility: ${visibilityPercentage.toFixed(1)}%`,
                  );

                  // Solo considerar elementos con al menos 20% de visibilidad
                  if (visibilityPercentage >= 20 && distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = subcat.name;
                  }
                }
              }
            });
          });

          console.log('🎯 Closest section found:', closestSection);

          // Si no encontramos ninguna sección pero hay secciones disponibles
          if (!closestSection && currentCategory.subcategories.length > 0) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            console.log('⚠️ No visible section found, checking scroll position:', {
              scrollTop: scrollTop,
              headerHeight: headerHeight,
              documentHeight: document.documentElement.scrollHeight,
              windowHeight: window.innerHeight,
            });

            // Si estamos al principio, usar la primera sección
            if (scrollTop < headerHeight) {
              closestSection = currentCategory.subcategories[0].name;
              console.log('📌 Using first section (at top)');
            }
            // Si estamos al final, usar la última sección
            else if (
              scrollTop + window.innerHeight >=
              document.documentElement.scrollHeight - 100
            ) {
              closestSection =
                currentCategory.subcategories[currentCategory.subcategories.length - 1].name;
              console.log('📌 Using last section (at bottom)');
            }
          }

          // Solo actualizar si la sección es diferente y no estamos en scroll programático
          if (
            closestSection &&
            closestSection !== activeSubcategory &&
            closestSection !== lastActiveSection.current &&
            !isProgrammaticScroll.current
          ) {
            console.log('🔄 Mobile scroll detection: Active section changed to:', closestSection);
            lastActiveSection.current = closestSection;
            setActiveSubcategory(closestSection);
          } else {
            console.log('⏸️ No section change needed:', {
              closestSection: closestSection,
              activeSubcategory: activeSubcategory,
              lastActiveSection: lastActiveSection.current,
              isProgrammaticScroll: isProgrammaticScroll.current,
            });
          }
        }
      }, 200); // Esperar 200ms para que el scroll se estabilice
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      console.log('🎯 Adding scroll listener to main element');
      mainElement.addEventListener('scroll', handleScroll, { passive: true });

      // También agregar listener a window como backup
      console.log('🎯 Adding scroll listener to window as backup');
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        console.log('🎯 Removing scroll listener from main element');
        mainElement.removeEventListener('scroll', handleScroll);
        console.log('🎯 Removing scroll listener from window');
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
      };
    } else {
      console.log('🎯 Adding scroll listener to window');
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        console.log('🎯 Removing scroll listener from window');
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
      };
    }
  }, [currentCategory, setActiveSubcategory, activeSubcategory, isProgrammaticScroll]);

  // Resetear lastActiveSection cuando cambie la categoría
  useEffect(() => {
    lastActiveSection.current = null;
  }, [currentCategory]);
};
