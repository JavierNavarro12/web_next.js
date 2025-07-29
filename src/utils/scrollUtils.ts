// Función para scroll suave a sección con offset dinámico
export const scrollToSection = (
  sectionId: string,
  headerRow1Ref: React.RefObject<HTMLDivElement | null>,
  headerRow2Ref: React.RefObject<HTMLDivElement | null>,
  setIsScrolled: (value: boolean) => void,
) => {
  const element = document.getElementById(sectionId);
  if (element) {
    // Calcular la altura real del header
    let offset = 0;
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // En móvil, usar el header fijo
      const mobileHeader = document.querySelector('.md\\:hidden.fixed');
      offset = mobileHeader ? mobileHeader.getBoundingClientRect().height : 120;
    } else {
      // En desktop, usar los refs del header
      if (headerRow1Ref.current) offset += headerRow1Ref.current.offsetHeight;
      if (headerRow2Ref.current) offset += headerRow2Ref.current.offsetHeight;
    }

    const elementPosition = element.offsetTop - offset;
    const mainScrollElement = document.querySelector('main');
    if (mainScrollElement) {
      mainScrollElement.scrollTo({ top: elementPosition, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }

    // Solo forzar isScrolled si NO es la primera subcategoría
    const scrollElement = document.querySelector('main');
    let lastScrollY = scrollElement ? scrollElement.scrollTop : window.scrollY;
    let stableCount = 0;
    const poll = setInterval(() => {
      const currentScrollY = scrollElement ? scrollElement.scrollTop : window.scrollY;
      if (currentScrollY === lastScrollY) {
        stableCount++;
      } else {
        stableCount = 0;
        lastScrollY = currentScrollY;
      }
      if (stableCount > 2 || stableCount > 30) {
        if (currentScrollY > 50) setIsScrolled(true);
        else setIsScrolled(false);
        clearInterval(poll);
      }
    }, 16);
  }
};

import { AICategory } from '../data/ai-tools';

// Función para detectar la sección activa basada en el scroll actual
export const detectActiveSection = (
  currentCategory: AICategory | null,
  setActiveSubcategory: (value: string | null) => void,
) => {
  if (!currentCategory) return;

  const sections = currentCategory.subcategories.map((subcat) => ({
    id: subcat.name.replace(/\s+/g, '-'),
    name: subcat.name,
    element: document.getElementById(subcat.name.replace(/\s+/g, '-')),
  }));

  let currentSection = '';
  const isMobile = window.innerWidth < 768;
  const mobileHeader = document.querySelector('.md\\:hidden.fixed');
  const headerOffset = isMobile
    ? mobileHeader
      ? mobileHeader.getBoundingClientRect().height
      : 120
    : 50;

  sections.forEach(({ name, element }: { name: string; element: Element | null }) => {
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      // Si el elemento está visible en el viewport (considerando el header)
      if (elementTop <= headerOffset + 100 && elementBottom > headerOffset) {
        const distance = Math.abs(elementTop - headerOffset);
        if (!currentSection || distance < 100) {
          currentSection = name;
        }
      }
    }
  });

  if (currentSection && setActiveSubcategory) {
    setActiveSubcategory(currentSection);
  }
};

// Función para hacer scroll automático del tab cuando cambie la subcategoría activa
export const autoScrollTab = (
  activeSubcategory: string | null,
  tabRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>,
  tabsContainerRef: React.RefObject<HTMLDivElement | null>,
) => {
  if (activeSubcategory && tabRefs.current[activeSubcategory] && tabsContainerRef.current) {
    const button = tabRefs.current[activeSubcategory];
    const container = tabsContainerRef.current;

    // Verificar si es móvil
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // En móvil, siempre centrar la subcategoría activa
      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();

      const isOutOfView =
        buttonRect.left < containerRect.left || buttonRect.right > containerRect.right;

      // Si está fuera de vista o queremos centrarlo automáticamente
      if (isOutOfView) {
        // Scroll para poner el elemento seleccionado al inicio
        const scrollLeft = button.offsetLeft - 16; // 16px de padding

        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth',
        });
      }
    }
  }
};
