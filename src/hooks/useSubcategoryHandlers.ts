import { useRef } from 'react';
import { scrollToSection } from '../utils/scrollUtils';
import { useMobileNavigation } from './useMobileNavigation';

export const useSubcategoryHandlers = (
  setActiveSubcategory: (subcategory: string | null) => void,
  setIsScrolled: (value: boolean) => void,
  headerRow1Ref: React.RefObject<HTMLDivElement | null>,
  headerRow2Ref: React.RefObject<HTMLDivElement | null>,
  tabRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>,
  tabsContainerRef: React.RefObject<HTMLDivElement | null>,
) => {
  const isProgrammaticScroll = useRef(false);

  // Usar el hook de navegación móvil
  const { handleMobileSubcategoryClick } = useMobileNavigation(
    setActiveSubcategory,
    tabRefs,
    tabsContainerRef,
  );

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

  return {
    handleSubcategoryClick,
    handleMobileSubcategoryClick,
    isProgrammaticScroll,
  };
};
