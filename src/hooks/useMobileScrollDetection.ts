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
    const handleScroll = () => {
      if (isProgrammaticScroll.current) {
        return;
      }

      const now = Date.now();
      lastScrollTime.current = now;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        if (Date.now() - lastScrollTime.current < 200) return;

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
                // Ajustamos para detectar 50px antes (como el offset de navegación)
                const isVisible = elementTop <= headerHeight + 150 && elementBottom > headerHeight;

                if (isVisible) {
                  // Calcular qué porcentaje del elemento está visible
                  const visibleTop = Math.max(elementTop, headerHeight);
                  const visibleBottom = Math.min(elementBottom, window.innerHeight);
                  const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                  const totalHeight = elementBottom - elementTop;
                  const visibilityPercentage =
                    totalHeight > 0 ? (visibleHeight / totalHeight) * 100 : 0;

                  const distance = Math.abs(elementTop - headerHeight);

                  // Solo considerar elementos con al menos 20% de visibilidad
                  if (visibilityPercentage >= 20 && distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = subcat.name;
                  }
                }
              }
            });
          });

          if (!closestSection && currentCategory.subcategories.length > 0) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop < headerHeight) {
              closestSection = currentCategory.subcategories[0].name;
            } else if (
              scrollTop + window.innerHeight >=
              document.documentElement.scrollHeight - 100
            ) {
              closestSection =
                currentCategory.subcategories[currentCategory.subcategories.length - 1].name;
            }
          }

          if (
            closestSection &&
            closestSection !== activeSubcategory &&
            closestSection !== lastActiveSection.current &&
            !isProgrammaticScroll.current
          ) {
            lastActiveSection.current = closestSection;
            setActiveSubcategory(closestSection);
          }
        }
      }, 200);
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll, { passive: true });

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        mainElement.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
      };
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
      };
    }
  }, [currentCategory, setActiveSubcategory, activeSubcategory, isProgrammaticScroll]);

  useEffect(() => {
    lastActiveSection.current = null;
  }, [currentCategory]);
};
