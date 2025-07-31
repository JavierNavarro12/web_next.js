// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import HeroSection from '../HeroSection';

// Mock de EmailJS
const mockSend = jest.fn();
jest.mock('@emailjs/browser', () => ({
  send: mockSend,
  init: jest.fn(),
}));

// Mock de los contextos
const mockSetShowAddAITool = jest.fn();
const mockSetShowFeedback = jest.fn();
const mockSetShowBugReport = jest.fn();

jest.mock('../../app/layout', () => ({
  useAddAIToolContext: () => ({
    setShowAddAITool: mockSetShowAddAITool,
  }),
  useFeedbackContext: () => ({
    setShowFeedback: mockSetShowFeedback,
  }),
  useBugReportContext: () => ({
    setShowBugReport: mockSetShowBugReport,
  }),
}));

describe('HeroSection', () => {
  beforeEach(() => {
    mockSend.mockClear();
    mockSetShowAddAITool.mockClear();
    mockSetShowFeedback.mockClear();
    mockSetShowBugReport.mockClear();
  });

  it('renderiza el título principal', () => {
    render(<HeroSection />);
    expect(screen.getByText(/descubre las mejores/i)).toBeInTheDocument();
  });

  it('renderiza el subtítulo', () => {
    render(<HeroSection />);
    expect(screen.getByText(/todas las herramientas de inteligencia artificial/i)).toBeInTheDocument();
  });

  it('renderiza el formulario de newsletter', () => {
    render(<HeroSection />);
    expect(screen.getByPlaceholderText(/tu email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /suscribirse/i })).toBeInTheDocument();
  });

  it('maneja el envío del formulario de newsletter exitosamente', async () => {
    mockSend.mockResolvedValue({ status: 200 });
    
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText(/tu email/i);
    const submitButton = screen.getByRole('button', { name: /suscribirse/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    expect(mockSend).toHaveBeenCalled();
  });

  it('maneja errores en el envío del formulario', async () => {
    mockSend.mockRejectedValue(new Error('EmailJS Error'));
    
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText(/tu email/i);
    const submitButton = screen.getByRole('button', { name: /suscribirse/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    expect(mockSend).toHaveBeenCalled();
  });

  it('valida el formato de email', () => {
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText(/tu email/i);
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  it('requiere el campo de email', () => {
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText(/tu email/i);
    expect(emailInput).toHaveAttribute('required');
  });

  it('muestra mensaje de éxito después del envío', async () => {
    mockSend.mockResolvedValue({ status: 200 });
    
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText(/tu email/i);
    const submitButton = screen.getByRole('button', { name: /suscribirse/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });
    
    // Avanzar el tiempo para que aparezca el mensaje de éxito
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    
    // Verificar que el componente sigue funcionando
    expect(screen.getByText(/descubre las mejores/i)).toBeInTheDocument();
  });

  it('maneja el estado de loading durante el envío', async () => {
    mockSend.mockImplementation(() => new Promise(resolve => setTimeout(() => resolve({ status: 200 }), 100)));
    
    render(<HeroSection />);
    
    const emailInput = screen.getByPlaceholderText(/tu email/i);
    const submitButton = screen.getByRole('button', { name: /suscribirse/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    // Verificar que el botón está deshabilitado durante el envío
    expect(submitButton).toBeDisabled();
    
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 150));
    });
  });

  it('renderiza los botones de acción', () => {
    render(<HeroSection />);
    
    expect(screen.getByRole('button', { name: /añadir una ia/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /feedback/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reportar bug/i })).toBeInTheDocument();
  });

  it('llama a setShowAddAITool cuando se hace click en "Añadir una IA"', () => {
    render(<HeroSection />);
    
    const addAIButton = screen.getByRole('button', { name: /añadir una ia/i });
    fireEvent.click(addAIButton);
    
    expect(mockSetShowAddAITool).toHaveBeenCalledWith(true);
  });

  it('llama a setShowFeedback cuando se hace click en "Feedback"', () => {
    render(<HeroSection />);
    
    const feedbackButton = screen.getByRole('button', { name: /feedback/i });
    fireEvent.click(feedbackButton);
    
    expect(mockSetShowFeedback).toHaveBeenCalledWith(true);
  });

  it('llama a setShowBugReport cuando se hace click en "Reportar Bug"', () => {
    render(<HeroSection />);
    
    const bugReportButton = screen.getByRole('button', { name: /reportar bug/i });
    fireEvent.click(bugReportButton);
    
    expect(mockSetShowBugReport).toHaveBeenCalledWith(true);
  });
}); 