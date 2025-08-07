/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
// @ts-nocheck
'use client';

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import PWAInstallPrompt from '../PWAInstallPrompt';

describe('PWAInstallPrompt', () => {
  async function dispatchBeforeInstallPrompt(overrides?: Partial<any>) {
    const event: any = new Event('beforeinstallprompt');
    (event as any).prompt = jest.fn(async () => undefined);
    (event as any).userChoice = Promise.resolve({ outcome: 'accepted', platform: 'web' });
    Object.assign(event, overrides);
    await act(async () => {
      window.dispatchEvent(event);
    });
    return event;
  }

  test('does not render by default', () => {
    render(React.createElement(PWAInstallPrompt));
    expect(screen.queryByText('Instalar AIFinder')).toBeNull();
  });

  test('shows prompt when beforeinstallprompt is fired and can dismiss', async () => {
    render(React.createElement(PWAInstallPrompt));
    await dispatchBeforeInstallPrompt();

    expect(await screen.findByText('Instalar AIFinder')).toBeInTheDocument();

    // Dismiss via "Más tarde"
    fireEvent.click(screen.getByText('Más tarde'));
    expect(screen.queryByText('Instalar AIFinder')).toBeNull();
  });

  test('clicking Instalar calls prompt and hides after user accepts', async () => {
    render(React.createElement(PWAInstallPrompt));
    const evt = await dispatchBeforeInstallPrompt();

    expect(await screen.findByText('Instalar AIFinder')).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByText('Instalar'));
      // Wait for userChoice to resolve
      await (evt as any).userChoice;
    });

    expect((evt as any).prompt).toHaveBeenCalled();
    expect(screen.queryByText('Instalar AIFinder')).toBeNull();
  });
});
