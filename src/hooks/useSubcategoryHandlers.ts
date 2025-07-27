import { useRef } from 'react';
import { scrollToSection } from '../utils/scrollUtils';

export const useSubcategoryHandlers = (
  setActiveSubcategory: (subcategory: string | null) => void,
  setIsScrolled: (value: boolean) => void,
  headerRow1Ref: React.RefObject<HTMLDivElement | null>,
  headerRow2Ref: React.RefObject<HTMLDivElement | null>,
  tabRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>,
  tabsContainerRef: React.RefObject<HTMLDivElement | null>,
) => {
  const isProgrammaticScroll = useRef(false);

  // Función para manejar clic en subcategoría (desktop)
  const handleSubcategoryClick = (subcategoryName: string) => {
    setActiveSubcategory(subcategoryName);
    isProgrammaticScroll.current = true;
    scrollToSection(
      subcategoryName.replace(/\s+/g, '-'),
      headerRow1Ref,
      headerRow2Ref,
      setIsScrolled,
    );
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 400);
  };

  // Función para manejar clic en subcategoría (móvil)
  const handleMobileSubcategoryClick = (subcategoryName: string) => {
    // 1. Primero actualizar la subcategoría activa y hacer scroll a la sección
    setActiveSubcategory(subcategoryName);
    const sectionId = subcategoryName.replace(/\s+/g, '-');
    const element = document.getElementById(sectionId);

    if (element) {
      // Calcular la altura real del header móvil
      const mobileHeader = document.querySelector('.md\\:hidden.sticky');
      const headerHeight = mobileHeader ? mobileHeader.getBoundingClientRect().height : 120;
      const elementPosition = element.offsetTop - headerHeight - 10; // 10px extra de padding

      // Scroll hacia la sección
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth',
      });
    }

    // 2. Después hacer scroll del carrusel de tabs
    setTimeout(() => {
      const button = tabRefs.current[subcategoryName];
      const container = tabsContainerRef.current;

      if (button && container) {
        // Calcular scroll para poner el elemento seleccionado al inicio
        const scrollLeft = button.offsetLeft - 16; // 16px de padding

        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return {
    handleSubcategoryClick,
    handleMobileSubcategoryClick,
    isProgrammaticScroll,
  };
};
