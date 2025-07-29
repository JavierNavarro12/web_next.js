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
      // Si es scroll programático, no procesar
      if (isProgrammaticScroll.current) return;

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

        if (currentCategory) {
          const sections = currentCategory.subcategories.map((subcat) => ({
            id: subcat.name.replace(/\s+/g, '-'),
            name: subcat.name,
            element: document.getElementById(subcat.name.replace(/\s+/g, '-')),
          }));

          const mainElement = document.querySelector('main');
          const scrollTop = mainElement ? mainElement.scrollTop : window.scrollY;

          // Calcular altura del header móvil
          const mobileHeader = document.querySelector('.md\\:hidden.fixed');
          const headerHeight = mobileHeader ? mobileHeader.getBoundingClientRect().height : 180;

          // Encontrar la sección activa
          let closestSection = '';
          let closestDistance = Infinity;

          sections.forEach(({ name, element }) => {
            if (element) {
              const rect = element.getBoundingClientRect();
              const elementTop = rect.top;
              const elementBottom = rect.bottom;

              // Si el elemento está visible en el viewport (considerando el header)
              if (elementTop <= headerHeight + 50 && elementBottom > headerHeight) {
                const distance = Math.abs(elementTop - headerHeight);
                if (distance < closestDistance) {
                  closestDistance = distance;
                  closestSection = name;
                }
              }
            }
          });

          // Si no encontramos ninguna sección pero hay secciones disponibles
          if (!closestSection && sections.length > 0) {
            // Si estamos al principio, usar la primera sección
            if (scrollTop < headerHeight) {
              closestSection = sections[0].name;
            }
            // Si estamos al final, usar la última sección
            else if (
              scrollTop + window.innerHeight >=
              document.documentElement.scrollHeight - 100
            ) {
              closestSection = sections[sections.length - 1].name;
            }
          }

          // Solo actualizar si la sección es diferente y no estamos en scroll programático
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
      }, 200); // Esperar 200ms para que el scroll se estabilice
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        mainElement.removeEventListener('scroll', handleScroll);
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

  // Resetear lastActiveSection cuando cambie la categoría
  useEffect(() => {
    lastActiveSection.current = null;
  }, [currentCategory]);
};
