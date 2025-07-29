import { useEffect } from 'react';
import { detectActiveSection, autoScrollTab } from '../utils/scrollUtils';
import { AICategory } from '../data/ai-tools';

export const useScrollEffects = (
  currentCategory: AICategory | null,
  activeSubcategory: string | null,
  setActiveSubcategory: (value: string | null) => void,
  setIsScrolled: (value: boolean) => void,
  isProgrammaticScroll: React.MutableRefObject<boolean>,
  tabRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>,
  tabsContainerRef: React.RefObject<HTMLDivElement | null>,
) => {
  // Manejar scroll para detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      // Si es scroll programático, no procesar
      if (isProgrammaticScroll.current) return;

      if (currentCategory) {
        const sections = currentCategory.subcategories.map((subcat) => ({
          id: subcat.name.replace(/\s+/g, '-'),
          name: subcat.name,
          element: document.getElementById(subcat.name.replace(/\s+/g, '-')),
        }));

        const mainElement = document.querySelector('main');
        const scrollTop = mainElement ? mainElement.scrollTop : window.scrollY;

        // En móvil, el header es fijo, así que necesitamos ajustar el offset
        const isMobile = window.innerWidth < 768;
        const mobileHeader = document.querySelector('.md\\:hidden.fixed');
        const headerOffset = isMobile
          ? mobileHeader
            ? mobileHeader.getBoundingClientRect().height
            : 180
          : 50;

        // Encontrar la sección activa considerando también el final de la página
        let closestSection = '';
        let closestDistance = Infinity;

        // Verificar si estamos cerca del final de la página
        const isNearBottom = mainElement
          ? mainElement.clientHeight + scrollTop >= mainElement.scrollHeight - 100
          : window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 100;

        sections.forEach(
          ({ name, element }: { name: string; element: Element | null }, index: number) => {
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = rect.top;
              const elementBottom = rect.bottom;

              // Si estamos cerca del final, activar la última sección visible
              if (isNearBottom && index === sections.length - 1) {
                closestSection = name;
                return;
              }

              // Si el elemento está visible en el viewport (considerando el header)
              if (elementTop <= headerOffset + 100 && elementBottom > headerOffset) {
                const distance = Math.abs(elementTop - headerOffset);
                if (distance < closestDistance) {
                  closestDistance = distance;
                  closestSection = name;
                }
              }
            }
          },
        );

        // Si no encontramos ninguna sección pero hay secciones disponibles
        if (!closestSection && sections.length > 0) {
          // Si estamos al principio, usar la primera sección
          if (scrollTop < headerOffset) {
            closestSection = sections[0].name;
          }
          // Si estamos al final, usar la última sección
          else if (isNearBottom) {
            closestSection = sections[sections.length - 1].name;
          }
        }

        if (closestSection && closestSection !== activeSubcategory) {
          setActiveSubcategory(closestSection);
        }

        // Controlar el estado de scroll para desktop
        if (!isMobile) {
          if (scrollTop > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }
      }
    };

    // Usar throttling para mejorar el rendimiento
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', throttledHandleScroll, { passive: true });
      return () => mainElement.removeEventListener('scroll', throttledHandleScroll);
    } else {
      window.addEventListener('scroll', throttledHandleScroll, { passive: true });
      return () => window.removeEventListener('scroll', throttledHandleScroll);
    }
  }, [
    currentCategory,
    setActiveSubcategory,
    activeSubcategory,
    setIsScrolled,
    isProgrammaticScroll,
  ]);

  // Detectar sección activa al cargar y cuando cambie la categoría
  useEffect(() => {
    if (currentCategory) {
      // Detectar inmediatamente
      detectActiveSection(currentCategory, setActiveSubcategory);
    }
  }, [currentCategory, setActiveSubcategory]);

  // Auto-scroll del tab cuando cambie la subcategoría activa
  useEffect(() => {
    // Solo hacer auto-scroll si no es programático
    if (!isProgrammaticScroll.current) {
      autoScrollTab(activeSubcategory, tabRefs, tabsContainerRef);
    }
  }, [activeSubcategory, tabRefs, tabsContainerRef, isProgrammaticScroll]);
};
