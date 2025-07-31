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
      if (isNavigating.current) return;

      isNavigating.current = true;
      isProgrammaticScroll.current = true;

      setActiveSubcategory(subcategoryName);

      requestAnimationFrame(() => {
        const sectionId = subcategoryName.replace(/\s+/g, '-');
        const allElements = document.querySelectorAll(`[id="${sectionId}"]`);

        let targetElement: Element | null = null;
        let bestRect = { top: 0, bottom: 0 };

        allElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const _htmlEl = el as HTMLElement;

          if (rect.top !== 0 || rect.bottom !== 0) {
            if (!targetElement || rect.top > bestRect.top) {
              targetElement = el;
              bestRect = rect;
            }
          }
        });

        if (targetElement) {
          let headerHeight = 120;
          const mobileHeader =
            document.querySelector('.md\\:hidden.fixed') ||
            document.querySelector('.md\\:hidden') ||
            document.querySelector('[class*="fixed"][class*="md:hidden"]');

          if (mobileHeader) {
            headerHeight = mobileHeader.getBoundingClientRect().height;
          }

          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const elementAbsoluteTop = scrollTop + bestRect.top;
          const targetScrollPosition = Math.max(0, elementAbsoluteTop - headerHeight - 125);

          window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth',
          });
        }

        setTimeout(() => {
          const button = tabRefs.current[subcategoryName];
          const container = tabsContainerRef.current;

          if (button && container) {
            const containerRect = container.getBoundingClientRect();
            const buttonRect = button.getBoundingClientRect();

            if (buttonRect.left < containerRect.left || buttonRect.right > containerRect.right) {
              const scrollLeft = button.offsetLeft - containerRect.width / 2 + buttonRect.width / 2;
              container.scrollTo({
                left: Math.max(0, scrollLeft),
                behavior: 'smooth',
              });
            }
          }
        }, 300);

        setTimeout(() => {
          isNavigating.current = false;
          isProgrammaticScroll.current = false;
        }, 800);
      });
    },
    [setActiveSubcategory, tabRefs, tabsContainerRef, isProgrammaticScroll],
  );

  return {
    handleMobileSubcategoryClick,
  };
};
