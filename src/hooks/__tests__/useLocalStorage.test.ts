// @ts-nocheck
/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

import { renderHook } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock window.scrollTo
const scrollToMock = jest.fn();
Object.defineProperty(window, 'scrollTo', {
  value: scrollToMock,
});

describe('useLocalStorage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Category persistence', () => {
    it('should save active category to localStorage when client-side and category exists', () => {
      renderHook(() => useLocalStorage(true, 'DevTools', null));

      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeCategory', 'DevTools');
    });

    it('should remove active category from localStorage when category is null', () => {
      renderHook(() => useLocalStorage(true, null, null));

      expect(localStorageMock.removeItem).toHaveBeenCalledWith('activeCategory');
    });

    it('should not interact with localStorage when not client-side', () => {
      renderHook(() => useLocalStorage(false, 'DevTools', null));

      expect(localStorageMock.setItem).not.toHaveBeenCalled();
      expect(localStorageMock.removeItem).not.toHaveBeenCalled();
    });

    it('should update localStorage when category changes', () => {
      const { rerender } = renderHook(
        ({ category }) => useLocalStorage(true, category, null),
        { initialProps: { category: 'DevTools' } }
      );

      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeCategory', 'DevTools');

      rerender({ category: 'Generativa' });
      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeCategory', 'Generativa');

      rerender({ category: null });
      expect(localStorageMock.removeItem).toHaveBeenCalledWith('activeCategory');
    });
  });

  describe('Subcategory persistence', () => {
    it('should save active subcategory to localStorage when client-side and subcategory exists', () => {
      renderHook(() => useLocalStorage(true, null, 'Code Generation'));

      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeSubcategory', 'Code Generation');
    });

    it('should remove active subcategory from localStorage when subcategory is null', () => {
      renderHook(() => useLocalStorage(true, null, null));

      expect(localStorageMock.removeItem).toHaveBeenCalledWith('activeSubcategory');
    });

    it('should not interact with localStorage when not client-side', () => {
      renderHook(() => useLocalStorage(false, null, 'Code Generation'));

      expect(localStorageMock.setItem).not.toHaveBeenCalled();
      expect(localStorageMock.removeItem).not.toHaveBeenCalled();
    });

    it('should update localStorage when subcategory changes', () => {
      const { rerender } = renderHook(
        ({ subcategory }) => useLocalStorage(true, null, subcategory),
        { initialProps: { subcategory: 'Code Generation' } }
      );

      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeSubcategory', 'Code Generation');

      rerender({ subcategory: 'Text Processing' });
      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeSubcategory', 'Text Processing');

      rerender({ subcategory: null });
      expect(localStorageMock.removeItem).toHaveBeenCalledWith('activeSubcategory');
    });
  });

  describe('Scroll behavior', () => {
    it('should scroll to top when category changes on client-side', () => {
      const { rerender } = renderHook(
        ({ category }) => useLocalStorage(true, category, null),
        { initialProps: { category: null } }
      );

      rerender({ category: 'DevTools' });

      // Fast-forward the timeout
      jest.advanceTimersByTime(100);

      expect(scrollToMock).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
    });

    it('should not scroll when not client-side', () => {
      const { rerender } = renderHook(
        ({ category }) => useLocalStorage(false, category, null),
        { initialProps: { category: null } }
      );

      rerender({ category: 'DevTools' });
      jest.advanceTimersByTime(100);

      expect(scrollToMock).not.toHaveBeenCalled();
    });

    it('should not scroll when category is null', () => {
      renderHook(() => useLocalStorage(true, null, null));
      
      jest.advanceTimersByTime(100);

      expect(scrollToMock).not.toHaveBeenCalled();
    });

    it('should scroll with correct timing delay', () => {
      const { rerender } = renderHook(
        ({ category }) => useLocalStorage(true, category, null),
        { initialProps: { category: null } }
      );

      rerender({ category: 'DevTools' });

      // Should not scroll before timeout
      expect(scrollToMock).not.toHaveBeenCalled();

      // Should scroll after timeout
      jest.advanceTimersByTime(100);
      expect(scrollToMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Combined scenarios', () => {
    it('should handle category and subcategory changes simultaneously', () => {
      const { rerender } = renderHook(
        ({ category, subcategory }) => useLocalStorage(true, category, subcategory),
        { initialProps: { category: 'DevTools', subcategory: 'Code Generation' } }
      );

      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeCategory', 'DevTools');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeSubcategory', 'Code Generation');

      rerender({ category: 'Generativa', subcategory: 'Text Processing' });

      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeCategory', 'Generativa');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeSubcategory', 'Text Processing');
    });

    it('should handle client-side flag changes', () => {
      const { rerender } = renderHook(
        ({ isClient }) => useLocalStorage(isClient, 'DevTools', 'Code Generation'),
        { initialProps: { isClient: false } }
      );

      expect(localStorageMock.setItem).not.toHaveBeenCalled();

      rerender({ isClient: true });

      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeCategory', 'DevTools');
      expect(localStorageMock.setItem).toHaveBeenCalledWith('activeSubcategory', 'Code Generation');
    });
  });
}); 