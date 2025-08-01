// @ts-nocheck
/// <reference types="jest" />
import { renderHook, act } from '@testing-library/react';
import { useSubcategoryHandlers } from '../useSubcategoryHandlers';

jest.mock('../../utils/scrollUtils', () => ({
  scrollToSection: jest.fn(),
}));
jest.mock('../useMobileNavigation', () => ({
  useMobileNavigation: () => ({
    handleMobileSubcategoryClick: jest.fn(),
  }),
}));

import { scrollToSection } from '../../utils/scrollUtils';
import { useMobileNavigation } from '../useMobileNavigation';

describe('useSubcategoryHandlers', () => {
  const setActiveSubcategory = jest.fn();
  const setIsScrolled = jest.fn();
  const headerRow1Ref = { current: {} };
  const headerRow2Ref = { current: {} };
  const tabRefs = { current: {} };
  const tabsContainerRef = { current: {} };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle subcategory click (desktop)', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() =>
      useSubcategoryHandlers(
        setActiveSubcategory,
        setIsScrolled,
        headerRow1Ref,
        headerRow2Ref,
        tabRefs,
        tabsContainerRef,
      ),
    );

    act(() => {
      result.current.handleSubcategoryClick('Test Subcat');
    });

    expect(setActiveSubcategory).toHaveBeenCalledWith('Test Subcat');
    expect(scrollToSection).toHaveBeenCalledWith(
      'Test-Subcat',
      headerRow1Ref,
      headerRow2Ref,
      setIsScrolled,
    );
    expect(result.current.isProgrammaticScroll.current).toBe(true);

    // Avanza el timeout para resetear isProgrammaticScroll
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(result.current.isProgrammaticScroll.current).toBe(false);
    jest.useRealTimers();
  });

  it('should expose handleMobileSubcategoryClick from useMobileNavigation', () => {
    const { result } = renderHook(() =>
      useSubcategoryHandlers(
        setActiveSubcategory,
        setIsScrolled,
        headerRow1Ref,
        headerRow2Ref,
        tabRefs,
        tabsContainerRef,
      ),
    );
    expect(result.current.handleMobileSubcategoryClick).toBeDefined();
    expect(typeof result.current.handleMobileSubcategoryClick).toBe('function');
  });

  it('should expose isProgrammaticScroll ref', () => {
    const { result } = renderHook(() =>
      useSubcategoryHandlers(
        setActiveSubcategory,
        setIsScrolled,
        headerRow1Ref,
        headerRow2Ref,
        tabRefs,
        tabsContainerRef,
      ),
    );
    expect(result.current.isProgrammaticScroll).toBeDefined();
    expect(typeof result.current.isProgrammaticScroll.current).toBe('boolean');
  });
});
