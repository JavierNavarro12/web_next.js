import { useRef } from 'react';
import { useNavigationManager } from './useNavigationManager';
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

  // Usar el hook de navegación centralizada
  const { navigateToSubcategory } = useNavigationManager(
    setActiveSubcategory,
    isProgrammaticScroll,
  );

  // Usar el hook de navegación móvil
  const { handleMobileSubcategoryClick } = useMobileNavigation(
    setActiveSubcategory,
    tabRefs,
    tabsContainerRef,
    isProgrammaticScroll,
  );

  // Función para manejar clic en subcategoría (desktop)
  const handleSubcategoryClick = (subcategoryName: string) => {
    // Usar la función centralizada de navegación
    navigateToSubcategory(subcategoryName);
  };

  return {
    handleSubcategoryClick,
    handleMobileSubcategoryClick,
    isProgrammaticScroll,
  };
};
