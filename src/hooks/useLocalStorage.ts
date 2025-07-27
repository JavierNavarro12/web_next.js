import { useEffect } from 'react';

export const useLocalStorage = (
  isClient: boolean,
  activeCategory: string | null,
  activeSubcategory: string | null,
) => {
  // Efecto para persistir categoría activa en localStorage
  useEffect(() => {
    if (isClient && activeCategory) {
      localStorage.setItem('activeCategory', activeCategory);
    } else if (isClient && !activeCategory) {
      localStorage.removeItem('activeCategory');
    }
  }, [activeCategory, isClient]);

  // Efecto para persistir subcategoría activa en localStorage
  useEffect(() => {
    if (isClient && activeSubcategory) {
      localStorage.setItem('activeSubcategory', activeSubcategory);
    } else if (isClient && !activeSubcategory) {
      localStorage.removeItem('activeSubcategory');
    }
  }, [activeSubcategory, isClient]);

  // Efecto para hacer scroll al principio al cambiar de categoría
  useEffect(() => {
    if (isClient && activeCategory) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 100);
    }
  }, [activeCategory, isClient]);
};
