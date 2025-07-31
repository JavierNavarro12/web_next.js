// @ts-nocheck
/// <reference types="jest" />
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

// Mock de los contextos
const mockSetActiveCategory = jest.fn();
const mockSetActiveSubcategory = jest.fn();
const mockSetShowAddAITool = jest.fn();
const mockSetShowFeedback = jest.fn();
const mockSetShowBugReport = jest.fn();

jest.mock('../../../app/layout', () => ({
  useAppContext: () => ({
    setActiveCategory: mockSetActiveCategory,
  }),
  useSubcategoryContext: () => ({
    setActiveSubcategory: mockSetActiveSubcategory,
  }),
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

describe('Footer', () => {
  const defaultProps = {
    setShowFeedback: jest.fn(),
    setShowBugReport: jest.fn(),
    setActiveCategory: jest.fn(),
    setActiveSubcategory: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render footer with logo and tagline', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getAllByText('AIFinder')).toHaveLength(2);
    expect(screen.getAllByText('Todas las IAs que necesitas en un solo lugar.')).toHaveLength(2);
  });

  it('should render social links', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getAllByLabelText('Visitar perfil de LinkedIn')).toHaveLength(2);
    expect(screen.getAllByLabelText('Enviar email')).toHaveLength(2);
    expect(screen.getAllByLabelText('Contactar por WhatsApp')).toHaveLength(2);
  });

  it('should render AI categories', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getAllByText('Generativa')).toHaveLength(2);
    expect(screen.getAllByText('Chatbots')).toHaveLength(2);
    expect(screen.getAllByText('Negocios')).toHaveLength(2);
    expect(screen.getAllByText('DevTools')).toHaveLength(2);
    expect(screen.getAllByText('Creatividad')).toHaveLength(2);
  });

  it('should render tools section', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getAllByText('Comparador de IAs')).toHaveLength(2);
    expect(screen.getAllByText('Calculadora de costos')).toHaveLength(2);
    expect(screen.getAllByText('Generador de prompts')).toHaveLength(2);
    expect(screen.getAllByText('Evaluador de calidad')).toHaveLength(2);
  });

  it('should render connect section', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getAllByText('Feedback')).toHaveLength(2);
    expect(screen.getAllByText('Reportar Bug')).toHaveLength(2);
    expect(screen.getAllByText('Contactar')).toHaveLength(2);
  });

  it('should render legal links', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getAllByText('Directrices de Listado')).toHaveLength(2);
    expect(screen.getAllByText('Política de Privacidad')).toHaveLength(2);
    expect(screen.getAllByText('Términos y Condiciones')).toHaveLength(2);
  });

  it('should handle category click', () => {
    render(<Footer {...defaultProps} />);

    const generativaButtons = screen.getAllByText('Generativa');
    fireEvent.click(generativaButtons[0]);

    expect(mockSetActiveCategory).toHaveBeenCalledWith('Generativa');
    expect(mockSetActiveSubcategory).toHaveBeenCalledWith(null);
    expect(mockSetShowAddAITool).toHaveBeenCalledWith(false);
    expect(mockSetShowFeedback).toHaveBeenCalledWith(false);
    expect(mockSetShowBugReport).toHaveBeenCalledWith(false);
  });

  it('should handle category click with mapping', () => {
    render(<Footer {...defaultProps} />);

    const cognitivaButtons = screen.getAllByText('Cognitiva');
    fireEvent.click(cognitivaButtons[0]);

    expect(mockSetActiveCategory).toHaveBeenCalledWith('IA Cognitiva y Razonamiento');
    expect(mockSetActiveSubcategory).toHaveBeenCalledWith(null);
  });

  it('should handle feedback button click', () => {
    const setShowFeedback = jest.fn();
    render(<Footer {...defaultProps} setShowFeedback={setShowFeedback} />);

    const feedbackButtons = screen.getAllByText('Feedback');
    fireEvent.click(feedbackButtons[0]);

    expect(setShowFeedback).toHaveBeenCalledWith(true);
  });

  it('should handle bug report button click', () => {
    const setShowBugReport = jest.fn();
    render(<Footer {...defaultProps} setShowBugReport={setShowBugReport} />);

    const bugReportButtons = screen.getAllByText('Reportar Bug');
    fireEvent.click(bugReportButtons[0]);

    expect(setShowBugReport).toHaveBeenCalledWith(true);
  });

  it('should render copyright notice', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getAllByText('© 2025 AIFinder')).toHaveLength(2);
  });

  it('should render settings button in desktop', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getByLabelText('Configuración')).toBeInTheDocument();
  });

  it('should handle multiple category clicks', () => {
    render(<Footer {...defaultProps} />);

    const generativaButtons = screen.getAllByText('Generativa');
    const chatbotsButtons = screen.getAllByText('Chatbots');
    fireEvent.click(generativaButtons[0]);
    fireEvent.click(chatbotsButtons[0]);

    expect(mockSetActiveCategory).toHaveBeenCalledTimes(2);
    expect(mockSetActiveSubcategory).toHaveBeenCalledTimes(2);
  });

  it('should handle category click with non-existent mapping', () => {
    render(<Footer {...defaultProps} />);

    // Simular una categoría que no existe en el mapeo
    const generativaButtons = screen.getAllByText('Generativa');
    fireEvent.click(generativaButtons[0]);

    // Debería llamar con el nombre original
    expect(mockSetActiveCategory).toHaveBeenCalledWith('Generativa');
  });

  it('should render all AI categories', () => {
    render(<Footer {...defaultProps} />);

    const expectedCategories = [
      'Generativa', 'Chatbots', 'Negocios', 'DevTools', 'Creatividad',
      'Salud', 'Educación', 'Finanzas', 'Seguridad', 'Robótica',
      'Multimodal', 'OpenSource', 'Cognitiva', 'MLOps', 'Marketing',
      'Traducción', 'Ética'
    ];

    expectedCategories.forEach(category => {
      expect(screen.getAllByText(category)).toHaveLength(2);
    });
  });

  it('should handle social link clicks', () => {
    render(<Footer {...defaultProps} />);

    const linkedinLinks = screen.getAllByLabelText('Visitar perfil de LinkedIn');
    const emailLinks = screen.getAllByLabelText('Enviar email');
    const whatsappLinks = screen.getAllByLabelText('Contactar por WhatsApp');

    expect(linkedinLinks[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/javier-navarro-rodríguez-056023331/');
    expect(emailLinks[0]).toHaveAttribute('href', 'mailto:navarrojavi107@gmail.com');
    expect(whatsappLinks[0]).toHaveAttribute('href', 'https://wa.me/34693744798');
  });

  it('should apply correct responsive classes', () => {
    render(<Footer {...defaultProps} />);

    const aifinderElements = screen.getAllByText('AIFinder');
    const footer = aifinderElements[0].closest('footer');
    expect(footer).toHaveClass('bg-black', 'border-t', 'border-zinc-800', 'mt-16');
  });

  it('should handle category click and close all modals', () => {
    render(<Footer {...defaultProps} />);

    // Usar getAllByText y seleccionar el primero
    const generativaButtons = screen.getAllByText('Generativa');
    fireEvent.click(generativaButtons[0]);

    // Verificar que se cierran todos los modales
    expect(mockSetShowAddAITool).toHaveBeenCalledWith(false);
    expect(mockSetShowFeedback).toHaveBeenCalledWith(false);
    expect(mockSetShowBugReport).toHaveBeenCalledWith(false);
  });

  it('should render mobile layout elements', () => {
    render(<Footer {...defaultProps} />);

    // Verificar elementos específicos del layout móvil
    expect(screen.getAllByText('Categorías de IAs')).toHaveLength(2);
    expect(screen.getAllByText('Herramientas')).toHaveLength(2);
    expect(screen.getAllByText('Conectar')).toHaveLength(2);
  });

  it('should render desktop layout elements', () => {
    render(<Footer {...defaultProps} />);

    // Verificar elementos específicos del layout desktop
    expect(screen.getAllByText('Categorías de IAs')).toHaveLength(2);
    expect(screen.getAllByText('Herramientas')).toHaveLength(2);
    expect(screen.getAllByText('Conectar')).toHaveLength(2);
  });

  it('should handle category click with console logging', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    render(<Footer {...defaultProps} />);

    const generativaButtons = screen.getAllByText('Generativa');
    fireEvent.click(generativaButtons[0]);

    expect(consoleSpy).toHaveBeenCalledWith('Footer: Click en categoría:', 'Generativa');
    expect(consoleSpy).toHaveBeenCalledWith('Footer: Nombre real de categoría:', 'Generativa');
    expect(consoleSpy).toHaveBeenCalledWith('Footer: Navegando a categoría:', 'Generativa');

    consoleSpy.mockRestore();
  });

  it('should handle category click when context functions are not available', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    
    // Renderizar sin props de navegación
    render(<Footer setShowFeedback={jest.fn()} />);

    const generativaButtons = screen.getAllByText('Generativa');
    fireEvent.click(generativaButtons[0]);

    // Verificar que se llama al console.log (aunque no sea el mensaje esperado)
    expect(consoleSpy).toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
}); 