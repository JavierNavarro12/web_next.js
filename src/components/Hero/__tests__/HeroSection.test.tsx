// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import HeroSection from '../HeroSection';

// Mock de newsletterService
const mockSubscribeToNewsletter = jest.fn();
jest.mock('../../../services/newsletterService', () => ({
  newsletterService: {
    subscribeToNewsletter: mockSubscribeToNewsletter,
  },
}));

// Mock de FloatingCards
jest.mock('../FloatingCards', () => {
  return function MockFloatingCards({ isMobile }: { isMobile: boolean }) {
    return <div data-testid={`floating-cards-${isMobile ? 'mobile' : 'desktop'}`}>Floating Cards</div>;
  };
});

describe('HeroSection', () => {
  beforeEach(() => {
    mockSubscribeToNewsletter.mockClear();
  });

  it('renderiza el título principal', () => {
    render(<HeroSection />);
    expect(screen.getByText(/todas las ias/i)).toBeInTheDocument();
    expect(screen.getByText(/que necesitas en un lugar/i)).toBeInTheDocument();
  });

  it('renderiza el subtítulo', () => {
    render(<HeroSection />);
    expect(screen.getByText(/herramientas, recursos y productos de ia/i)).toBeInTheDocument();
  });

  it('renderiza el formulario de newsletter', () => {
    render(<HeroSection />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Suscribirse' })).toBeInTheDocument();
  });

  it('maneja el envío del formulario de newsletter exitosamente', async () => {
    mockSubscribeToNewsletter.mockResolvedValue(undefined);
    
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByRole('button', { name: 'Suscribirse' });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    expect(mockSubscribeToNewsletter).toHaveBeenCalledWith('test@example.com', 'hero');
  });

  it('maneja errores en el envío del formulario', async () => {
    mockSubscribeToNewsletter.mockRejectedValue(new Error('Error de conexión'));
    
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByRole('button', { name: 'Suscribirse' });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    expect(mockSubscribeToNewsletter).toHaveBeenCalledWith('test@example.com', 'hero');
  });

  it('valida el formato de email', () => {
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('requiere el campo de email', () => {
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('muestra mensaje de éxito después del envío', async () => {
    mockSubscribeToNewsletter.mockResolvedValue(undefined);
    
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByRole('button', { name: 'Suscribirse' });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    // Verificar que aparece el mensaje de éxito
    expect(screen.getByText('¡Suscripción exitosa! Revisa tu email.')).toBeInTheDocument();
  });

  it('maneja el estado de loading durante el envío', async () => {
    mockSubscribeToNewsletter.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve(undefined), 100)));
    
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByRole('button', { name: 'Suscribirse' });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    // Verificar que el botón está deshabilitado durante el envío
    expect(submitButton).toBeDisabled();
    expect(submitButton).toHaveTextContent('Enviando...');
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 150));
    });
  });

  it('renderiza los componentes FloatingCards', () => {
    render(<HeroSection />);
    
    expect(screen.getByTestId('floating-cards-mobile')).toBeInTheDocument();
    expect(screen.getByTestId('floating-cards-desktop')).toBeInTheDocument();
  });

  it('maneja validación de email vacío', async () => {
    render(<HeroSection />);
    
    const submitButton = screen.getByRole('button', { name: 'Suscribirse' });
    fireEvent.click(submitButton);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    expect(screen.getByText('Por favor ingresa tu email')).toBeInTheDocument();
  });

  it('maneja validación de email inválido', async () => {
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByRole('button', { name: 'Suscribirse' });
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    expect(screen.getByText('Por favor ingresa un email válido')).toBeInTheDocument();
  });

  it('limpia el campo de email después del envío exitoso', async () => {
    mockSubscribeToNewsletter.mockResolvedValue(undefined);
    
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByRole('button', { name: 'Suscribirse' });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    expect(emailInput).toHaveValue('');
  });

  it('oculta el mensaje de éxito después de 5 segundos', async () => {
    mockSubscribeToNewsletter.mockResolvedValue(undefined);
    
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText('Email');
    const submitButton = screen.getByRole('button', { name: 'Suscribirse' });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    // Verificar que aparece el mensaje de éxito
    expect(screen.getByText('¡Suscripción exitosa! Revisa tu email.')).toBeInTheDocument();
    
    // Avanzar el tiempo 5 segundos
    act(() => {
      jest.advanceTimersByTime(5000);
    });
    
    // Verificar que el mensaje desapareció
    expect(screen.queryByText('¡Suscripción exitosa! Revisa tu email.')).not.toBeInTheDocument();
  });
}); 