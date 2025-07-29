import { useRef, useCallback } from 'react';
import { useNavigationManager } from './useNavigationManager';

export const useMobileNavigation = (
  setActiveSubcategory: (subcategory: string | null) => void,
  tabRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>,
  tabsContainerRef: React.RefObject<HTMLDivElement | null>,
  isProgrammaticScroll: React.MutableRefObject<boolean>,
) => {
  const { navigateToSubcategory } = useNavigationManager(
    setActiveSubcategory,
    isProgrammaticScroll,
  );

  const handleMobileSubcategoryClick = useCallback(
    (subcategoryName: string) => {
      // Usar la función centralizada de navegación
      navigateToSubcategory(subcategoryName);

      // Hacer scroll del carrusel de tabs después de un breve delay
      setTimeout(() => {
        const button = tabRefs.current[subcategoryName];
        const container = tabsContainerRef.current;

        if (button && container) {
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
      }, 150);
    },
    [navigateToSubcategory, tabRefs, tabsContainerRef],
  );

  return {
    handleMobileSubcategoryClick,
  };
};
