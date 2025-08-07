/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />
// @ts-nocheck
'use client';

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import AddAIToolModal from '../AddAIToolModal';

jest.mock('@emailjs/browser', () => ({
  __esModule: true,
  default: { init: jest.fn(), send: jest.fn(() => Promise.resolve({ status: 200 })) },
}));

describe('AddAIToolModal', () => {
  test('renders when open and submits successfully', async () => {
    const onClose = jest.fn();
    render(<AddAIToolModal isOpen={true} onClose={onClose} />);

    // Fill fields
    fireEvent.change(screen.getByLabelText('Nombre de la IA'), { target: { value: 'Tool X' } });
    fireEvent.change(screen.getByLabelText('URL de la IA'), {
      target: { value: 'https://toolx.com' },
    });
    fireEvent.change(screen.getByLabelText('Email (Opcional)'), {
      target: { value: 'user@example.com' },
    });
    fireEvent.click(screen.getByLabelText('Esta es mi propia IA/Herramienta'));

    await act(async () => {
      fireEvent.submit(screen.getByRole('button', { name: 'Enviar Sugerencia' }).closest('form')!);
      // wait any queued timers (the component sets timeout to close, but after success state)
    });

    // Success modal appears
    expect(screen.getByText('¡Enviado con Éxito!')).toBeInTheDocument();
  });

  test('calls onClose when clicking overlay', () => {
    const onClose = jest.fn();
    render(<AddAIToolModal isOpen={true} onClose={onClose} />);

    fireEvent.click(screen.getByLabelText('Cerrar modal'));
    expect(onClose).toHaveBeenCalled();
  });
});
