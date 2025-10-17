/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
// @ts-nocheck
'use client';

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AppProviders, {
  useAppContext,
  useSubcategoryContext,
  SidebarDrawerContext,
  useFeedbackContext,
  useBugReportContext,
  useAddAIToolContext,
  useHighlightedToolContext,
  useActiveNavContext,
} from '../providers';
import { CookieConsentProvider } from '../../store/cookieConsent';

function ConsumersDemo() {
  const { activeCategory, setActiveCategory } = useAppContext();
  const { activeSubcategory, setActiveSubcategory } = useSubcategoryContext();
  const { showFeedback, setShowFeedback } = useFeedbackContext();
  const { showBugReport, setShowBugReport } = useBugReportContext();
  const { showAddAITool, setShowAddAITool } = useAddAIToolContext();
  const { highlightedTool, setHighlightedTool } = useHighlightedToolContext();
  const { activeNav, setActiveNav } = useActiveNavContext();
  const { setSidebarOpen } = React.useContext(SidebarDrawerContext);

  return (
    <div>
      <div data-testid="vals">
        <span data-testid="cat">{activeCategory ?? 'none'}</span>
        <span data-testid="sub">{activeSubcategory ?? 'none'}</span>
        <span data-testid="feedback">{showFeedback ? '1' : '0'}</span>
        <span data-testid="bug">{showBugReport ? '1' : '0'}</span>
        <span data-testid="add">{showAddAITool ? '1' : '0'}</span>
        <span data-testid="hi">{highlightedTool ?? 'none'}</span>
        <span data-testid="nav">{activeNav}</span>
      </div>
      <button onClick={() => setActiveCategory('Generativa')}>setCat</button>
      <button onClick={() => setActiveSubcategory('Texto')}>setSub</button>
      <button onClick={() => setShowFeedback(true)}>openFeedback</button>
      <button onClick={() => setShowBugReport(true)}>openBug</button>
      <button onClick={() => setShowAddAITool(true)}>openAdd</button>
      <button onClick={() => setHighlightedTool('ToolX')}>hiTool</button>
      <button onClick={() => setActiveNav('herramientas')}>setNav</button>
      <button onClick={() => setSidebarOpen(true)}>openSidebar</button>
    </div>
  );
}

describe('AppProviders contexts', () => {
  test('provides and updates contexts, renders drawer and add-ai UI', async () => {
    render(
      <CookieConsentProvider>
        <AppProviders>
          <ConsumersDemo />
        </AppProviders>
      </CookieConsentProvider>,
    );

    // Initial values (children appears twice due to desktop+mobile containers)
    expect(screen.getAllByTestId('cat')[0].textContent).toBe('none');
    expect(screen.getAllByTestId('sub')[0].textContent).toBe('none');
    expect(screen.getAllByTestId('feedback')[0].textContent).toBe('0');
    expect(screen.getAllByTestId('bug')[0].textContent).toBe('0');
    expect(screen.getAllByTestId('add')[0].textContent).toBe('0');
    expect(screen.getAllByTestId('hi')[0].textContent).toBe('none');
    expect(screen.getAllByTestId('nav')[0].textContent).toBe('explorar');

    // Update via actions (buttons duplicated by desktop+mobile containers)
    fireEvent.click(screen.getAllByText('setCat')[0]);
    fireEvent.click(screen.getAllByText('setSub')[0]);
    fireEvent.click(screen.getAllByText('openFeedback')[0]);
    fireEvent.click(screen.getAllByText('openBug')[0]);
    fireEvent.click(screen.getAllByText('openAdd')[0]);
    fireEvent.click(screen.getAllByText('hiTool')[0]);
    fireEvent.click(screen.getAllByText('setNav')[0]);
    fireEvent.click(screen.getAllByText('openSidebar')[0]);

    // Values updated
    expect(screen.getAllByTestId('cat')[0].textContent).toBe('Generativa');
    expect(screen.getAllByTestId('sub')[0].textContent).toBe('Texto');
    expect(screen.getAllByTestId('feedback')[0].textContent).toBe('1');
    expect(screen.getAllByTestId('bug')[0].textContent).toBe('1');
    // showAddAITool true
    expect(screen.getAllByTestId('add')[0].textContent).toBe('1');
    expect(screen.getAllByTestId('hi')[0].textContent).toBe('ToolX');
    expect(screen.getAllByTestId('nav')[0].textContent).toBe('herramientas');

    // Drawer overlay (mobile) should render close button label
    // aria-label="Cerrar menú de navegación"
    await waitFor(() => {
      expect(screen.getAllByLabelText('Cerrar menú de navegación').length).toBeGreaterThanOrEqual(
        1,
      );
    });

    // Add AI UI appears (modal/page heading)
    expect(screen.getAllByText('Sugerir una IA').length).toBeGreaterThanOrEqual(1);
  });

  test('initializes activeCategory and subcategory from localStorage', async () => {
    const getItemSpy = jest.spyOn(window.localStorage.__proto__, 'getItem');
    getItemSpy.mockImplementation((key: string) => {
      if (key === 'activeCategory') return 'Negocios';
      if (key === 'activeSubcategory') return 'Automatización de flujos';
      return null;
    });

    function Reader() {
      const { activeCategory } = useAppContext();
      const { activeSubcategory } = useSubcategoryContext();
      return (
        <div>
          <span data-testid="catR">{activeCategory ?? 'none'}</span>
          <span data-testid="subR">{activeSubcategory ?? 'none'}</span>
        </div>
      );
    }

    render(
      <CookieConsentProvider>
        <AppProviders>
          <Reader />
        </AppProviders>
      </CookieConsentProvider>,
    );

    await waitFor(() => {
      expect(screen.getAllByTestId('catR')[0].textContent).toBe('Negocios');
      expect(screen.getAllByTestId('subR')[0].textContent).toBe('Automatización de flujos');
    });

    getItemSpy.mockRestore();
  });

  test('hooks return safe defaults outside providers in test env', () => {
    function Outside() {
      const app = useAppContext();
      const sub = useSubcategoryContext();
      const fb = useFeedbackContext();
      const bug = useBugReportContext();
      const add = useAddAIToolContext();
      const hi = useHighlightedToolContext();
      const nav = useActiveNavContext();
      return (
        <div>
          <span data-testid="ok">
            {app.activeCategory === null &&
            sub.activeSubcategory === null &&
            !fb.showFeedback &&
            !bug.showBugReport &&
            !add.showAddAITool &&
            hi.highlightedTool === null &&
            nav.activeNav === 'explorar'
              ? 'ok'
              : 'bad'}
          </span>
        </div>
      );
    }

    render(<Outside />);
    expect(screen.getByTestId('ok').textContent).toBe('ok');
  });
});
