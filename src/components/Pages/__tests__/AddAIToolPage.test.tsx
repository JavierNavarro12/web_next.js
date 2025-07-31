import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddAIToolPage from '../AddAIToolPage';

// Mock EmailJS
jest.mock('@emailjs/browser', () => ({
  init: jest.fn(),
  send: jest.fn(),
}));

// Mock components
jest.mock('../../Header/MobileHeader', () => {
  return function MockMobileHeader() {
    return <div data-testid="mobile-header">Mobile Header</div>;
  };
});

jest.mock('../../Footer/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer</div>;
  };
});

// Mock EmailJS config
jest.mock('../../../config/emailjs', () => ({
  EMAILJS_CONFIG: {
    SERVICE_ID: 'test-service-id',
    TEMPLATE_ID: 'test-template-id',
  },
}));

const mockEmailJS = require('@emailjs/browser');

describe('AddAIToolPage', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    setSidebarOpen: jest.fn(),
    setActiveCategory: jest.fn(),
    setActiveSubcategory: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Rendering', () => {
    it('should not render when isOpen is false', () => {
      render(<AddAIToolPage {...defaultProps} isOpen={false} />);
      expect(screen.queryByText('Sugerir una IA')).not.toBeInTheDocument();
    });

    it('should render the form when isOpen is true', () => {
      render(<AddAIToolPage {...defaultProps} />);
      
      expect(screen.getByText('Sugerir una IA')).toBeInTheDocument();
      expect(screen.getByText('¡Apreciamos que tomes el tiempo para sugerir una IA a AIFinder!')).toBeInTheDocument();
      expect(screen.getByLabelText('Nombre de la IA')).toBeInTheDocument();
      expect(screen.getByLabelText('URL de la IA')).toBeInTheDocument();
      expect(screen.getByLabelText('Email (Opcional)')).toBeInTheDocument();
      expect(screen.getByLabelText('Esta es mi propia IA/Herramienta')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Enviar Sugerencia' })).toBeInTheDocument();
    });

    it('should render MobileHeader and Footer components', () => {
      render(<AddAIToolPage {...defaultProps} />);
      
      expect(screen.getByTestId('mobile-header')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
  });

  describe('Form Interactions', () => {
    it('should update form data when inputs change', () => {
      render(<AddAIToolPage {...defaultProps} />);
      
      const toolNameInput = screen.getByLabelText('Nombre de la IA');
      const toolUrlInput = screen.getByLabelText('URL de la IA');
      const emailInput = screen.getByLabelText('Email (Opcional)');
      const checkbox = screen.getByLabelText('Esta es mi propia IA/Herramienta');

      fireEvent.change(toolNameInput, { target: { value: 'Test AI Tool' } });
      fireEvent.change(toolUrlInput, { target: { value: 'https://test.com' } });
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(checkbox);

      expect(toolNameInput).toHaveValue('Test AI Tool');
      expect(toolUrlInput).toHaveValue('https://test.com');
      expect(emailInput).toHaveValue('test@example.com');
      expect(checkbox).toBeChecked();
    });

    it('should handle form submission successfully', async () => {
      mockEmailJS.send.mockResolvedValueOnce({ status: 200 });
      
      render(<AddAIToolPage {...defaultProps} />);
      
      const toolNameInput = screen.getByLabelText('Nombre de la IA');
      const toolUrlInput = screen.getByLabelText('URL de la IA');
      const submitButton = screen.getByRole('button', { name: 'Enviar Sugerencia' });

      fireEvent.change(toolNameInput, { target: { value: 'Test AI Tool' } });
      fireEvent.change(toolUrlInput, { target: { value: 'https://test.com' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockEmailJS.send).toHaveBeenCalledWith(
          'test-service-id',
          'test-template-id',
          {
            tool_name: 'Test AI Tool',
            tool_url: 'https://test.com',
            user_email: '',
            is_own_tool: 'No',
          }
        );
      });
    });

    it('should handle form submission with all fields filled', async () => {
      mockEmailJS.send.mockResolvedValueOnce({ status: 200 });
      
      render(<AddAIToolPage {...defaultProps} />);
      
      const toolNameInput = screen.getByLabelText('Nombre de la IA');
      const toolUrlInput = screen.getByLabelText('URL de la IA');
      const emailInput = screen.getByLabelText('Email (Opcional)');
      const checkbox = screen.getByLabelText('Esta es mi propia IA/Herramienta');
      const submitButton = screen.getByRole('button', { name: 'Enviar Sugerencia' });

      fireEvent.change(toolNameInput, { target: { value: 'My AI Tool' } });
      fireEvent.change(toolUrlInput, { target: { value: 'https://myai.com' } });
      fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
      fireEvent.click(checkbox);
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockEmailJS.send).toHaveBeenCalledWith(
          'test-service-id',
          'test-template-id',
          {
            tool_name: 'My AI Tool',
            tool_url: 'https://myai.com',
            user_email: 'user@example.com',
            is_own_tool: 'Sí',
          }
        );
      });
    });
  });

  describe('Success State', () => {
    it('should show success message after successful submission', async () => {
      mockEmailJS.send.mockResolvedValueOnce({ status: 200 });
      
      render(<AddAIToolPage {...defaultProps} />);
      
      const toolNameInput = screen.getByLabelText('Nombre de la IA');
      const toolUrlInput = screen.getByLabelText('URL de la IA');
      const submitButton = screen.getByRole('button', { name: 'Enviar Sugerencia' });

      fireEvent.change(toolNameInput, { target: { value: 'Test AI Tool' } });
      fireEvent.change(toolUrlInput, { target: { value: 'https://test.com' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('¡Enviado con Éxito!')).toBeInTheDocument();
        expect(screen.getByText('Tu sugerencia ha sido enviada. Te notificaremos cuando sea revisada.')).toBeInTheDocument();
      });
    });

    it('should close the page after 3 seconds on success', async () => {
      mockEmailJS.send.mockResolvedValueOnce({ status: 200 });
      
      render(<AddAIToolPage {...defaultProps} />);
      
      const toolNameInput = screen.getByLabelText('Nombre de la IA');
      const toolUrlInput = screen.getByLabelText('URL de la IA');
      const submitButton = screen.getByRole('button', { name: 'Enviar Sugerencia' });

      fireEvent.change(toolNameInput, { target: { value: 'Test AI Tool' } });
      fireEvent.change(toolUrlInput, { target: { value: 'https://test.com' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('¡Enviado con Éxito!')).toBeInTheDocument();
      });

      // Advance timers by 3 seconds
      jest.advanceTimersByTime(3000);

      await waitFor(() => {
        expect(defaultProps.onClose).toHaveBeenCalled();
      });
    });
  });

  describe('Error Handling', () => {
    it('should show alert on EmailJS error', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
      
      mockEmailJS.send.mockRejectedValueOnce(new Error('EmailJS Error'));
      
      render(<AddAIToolPage {...defaultProps} />);
      
      const toolNameInput = screen.getByLabelText('Nombre de la IA');
      const toolUrlInput = screen.getByLabelText('URL de la IA');
      const submitButton = screen.getByRole('button', { name: 'Enviar Sugerencia' });

      fireEvent.change(toolNameInput, { target: { value: 'Test AI Tool' } });
      fireEvent.change(toolUrlInput, { target: { value: 'https://test.com' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalledWith('Error al enviar email:', expect.any(Error));
        expect(alertSpy).toHaveBeenCalledWith('Error al enviar la sugerencia. Por favor, inténtalo de nuevo.');
      });

      consoleSpy.mockRestore();
      alertSpy.mockRestore();
    });
  });

  describe('Form Validation', () => {
    it('should require tool name and URL', () => {
      render(<AddAIToolPage {...defaultProps} />);
      
      const toolNameInput = screen.getByLabelText('Nombre de la IA');
      const toolUrlInput = screen.getByLabelText('URL de la IA');

      expect(toolNameInput).toBeRequired();
      expect(toolUrlInput).toBeRequired();
    });

    it('should have correct input types', () => {
      render(<AddAIToolPage {...defaultProps} />);
      
      const toolNameInput = screen.getByLabelText('Nombre de la IA');
      const toolUrlInput = screen.getByLabelText('URL de la IA');
      const emailInput = screen.getByLabelText('Email (Opcional)');

      expect(toolNameInput).toHaveAttribute('type', 'text');
      expect(toolUrlInput).toHaveAttribute('type', 'url');
      expect(emailInput).toHaveAttribute('type', 'email');
    });
  });

  describe('Accessibility', () => {
    it('should have proper labels and placeholders', () => {
      render(<AddAIToolPage {...defaultProps} />);
      
      const toolNameInput = screen.getByLabelText('Nombre de la IA');
      const toolUrlInput = screen.getByLabelText('URL de la IA');
      const emailInput = screen.getByLabelText('Email (Opcional)');

      expect(toolNameInput).toHaveAttribute('placeholder', 'Ej: ChatGPT');
      expect(toolUrlInput).toHaveAttribute('placeholder', 'https://ejemplo.com');
      expect(emailInput).toHaveAttribute('placeholder', 'tu@email.com');
    });

    it('should have proper form structure', () => {
      render(<AddAIToolPage {...defaultProps} />);
      
      const form = screen.getByRole('button', { name: 'Enviar Sugerencia' }).closest('form');
      expect(form).toBeInTheDocument();
    });
  });
}); 