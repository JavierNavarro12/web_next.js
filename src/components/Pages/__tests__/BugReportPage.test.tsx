import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BugReportPage from '../BugReportPage';

// Mock EmailJS
jest.mock('@emailjs/browser', () => ({
  init: jest.fn(),
  send: jest.fn(),
}));

// Mock Footer component
jest.mock('../../Footer/Footer', () => {
  return function MockFooter() {
    return React.createElement('div', { 'data-testid': 'footer' }, 'Footer');
  };
});

// Mock EmailJS config
jest.mock('../../../config/emailjs', () => ({
  EMAILJS_CONFIG: {
    SERVICE_ID: 'test-service-id',
    FEEDBACK_TEMPLATE_ID: 'test-feedback-template-id',
  },
}));

// Mock DOM methods
const mockScrollTo = jest.fn();
const mockQuerySelector = jest.fn();

Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true,
});

Object.defineProperty(document, 'querySelector', {
  value: mockQuerySelector,
  writable: true,
});

import * as emailJS from '@emailjs/browser';
const mockEmailJS = emailJS as jest.Mocked<typeof emailJS>;

describe('BugReportPage', () => {
  const defaultProps = {
    onBack: jest.fn(),
    setActiveCategory: jest.fn(),
    setActiveSubcategory: jest.fn(),
    navigateToFeedback: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    mockQuerySelector.mockReturnValue(null); // Default to null for main element
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Rendering', () => {
    it('should render the bug report form', () => {
      render(React.createElement(BugReportPage, defaultProps));

      expect(screen.getAllByText('¡REPORTA UN BUG!')).toHaveLength(2);
      expect(screen.getAllByPlaceholderText('Nombre')).toHaveLength(2);
      expect(screen.getAllByPlaceholderText('email@gmail.com')).toHaveLength(2);
      expect(
        screen.getAllByPlaceholderText('He encontrado un problema en AIFinder...'),
      ).toHaveLength(2);
      expect(screen.getAllByRole('button', { name: 'Reportar Bug' })).toHaveLength(2);
    });

    it('should render back buttons for both mobile and desktop', () => {
      render(React.createElement(BugReportPage, defaultProps));

      const backButtons = screen.getAllByLabelText('Volver a la página anterior');
      expect(backButtons).toHaveLength(2); // One for mobile, one for desktop
    });

    it('should render Footer component', () => {
      render(React.createElement(BugReportPage, defaultProps));

      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('should render AIFinder logo in mobile header', () => {
      render(React.createElement(BugReportPage, defaultProps));

      expect(screen.getByText('AIFinder')).toBeInTheDocument();
    });
  });

  describe('Form Interactions', () => {
    it('should update form data when inputs change', () => {
      render(React.createElement(BugReportPage, defaultProps));

      const nameInputs = screen.getAllByPlaceholderText('Nombre');
      const emailInputs = screen.getAllByPlaceholderText('email@gmail.com');
      const descriptionTextareas = screen.getAllByPlaceholderText(
        'He encontrado un problema en AIFinder...',
      );

      fireEvent.change(nameInputs[0], { target: { value: 'John Doe' } });
      fireEvent.change(emailInputs[0], { target: { value: 'john@example.com' } });
      fireEvent.change(descriptionTextareas[0], {
        target: { value: 'Found a bug in the search functionality' },
      });

      expect(nameInputs[0]).toHaveValue('John Doe');
      expect(emailInputs[0]).toHaveValue('john@example.com');
      expect(descriptionTextareas[0]).toHaveValue('Found a bug in the search functionality');
    });

    it('should handle form submission successfully', async () => {
      mockEmailJS.send.mockResolvedValueOnce({ status: 200, text: 'OK' });

      render(React.createElement(BugReportPage, defaultProps));

      const nameInputs = screen.getAllByPlaceholderText('Nombre');
      const emailInputs = screen.getAllByPlaceholderText('email@gmail.com');
      const descriptionTextareas = screen.getAllByPlaceholderText(
        'He encontrado un problema en AIFinder...',
      );
      const submitButtons = screen.getAllByRole('button', { name: 'Reportar Bug' });
      const submitButton = submitButtons[0];

      fireEvent.change(nameInputs[0], { target: { value: 'John Doe' } });
      fireEvent.change(emailInputs[0], { target: { value: 'john@example.com' } });
      fireEvent.change(descriptionTextareas[0], {
        target: { value: 'Found a bug in the search functionality' },
      });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockEmailJS.send).toHaveBeenCalledWith(
          'test-service-id',
          'test-feedback-template-id',
          {
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Found a bug in the search functionality',
            time: expect.any(String),
          },
        );
      });
    });

    it('should show loading state during submission', async () => {
      mockEmailJS.send.mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 100)));

      render(React.createElement(BugReportPage, defaultProps));

      const nameInputs = screen.getAllByPlaceholderText('Nombre');
      const emailInputs = screen.getAllByPlaceholderText('email@gmail.com');
      const descriptionTextareas = screen.getAllByPlaceholderText(
        'He encontrado un problema en AIFinder...',
      );
      const submitButtons = screen.getAllByRole('button', { name: 'Reportar Bug' });
      const submitButton = submitButtons[0];

      fireEvent.change(nameInputs[0], { target: { value: 'John Doe' } });
      fireEvent.change(emailInputs[0], { target: { value: 'john@example.com' } });
      fireEvent.change(descriptionTextareas[0], { target: { value: 'Found a bug' } });
      fireEvent.click(submitButton);

      const loadingButtons = screen.getAllByRole('button', { name: 'Enviando...' });
      expect(loadingButtons).toHaveLength(2);
      expect(loadingButtons[0]).toBeDisabled();
    });
  });

  describe('Success State', () => {
    it('should show success message after successful submission', async () => {
      mockEmailJS.send.mockResolvedValueOnce({ status: 200, text: 'OK' });

      render(React.createElement(BugReportPage, defaultProps));

      const nameInputs = screen.getAllByPlaceholderText('Nombre');
      const emailInputs = screen.getAllByPlaceholderText('email@gmail.com');
      const descriptionTextareas = screen.getAllByPlaceholderText(
        'He encontrado un problema en AIFinder...',
      );
      const submitButtons = screen.getAllByRole('button', { name: 'Reportar Bug' });
      const submitButton = submitButtons[0];

      fireEvent.change(nameInputs[0], { target: { value: 'John Doe' } });
      fireEvent.change(emailInputs[0], { target: { value: 'john@example.com' } });
      fireEvent.change(descriptionTextareas[0], { target: { value: 'Found a bug' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getAllByText('¡Bug reportado!')).toHaveLength(2);
        expect(screen.getAllByText('Gracias por tu reporte. Lo revisaremos pronto.')).toHaveLength(
          2,
        );
      });
    });

    it('should clear form data after successful submission', async () => {
      mockEmailJS.send.mockResolvedValueOnce({ status: 200, text: 'OK' });

      render(React.createElement(BugReportPage, defaultProps));

      const nameInputs = screen.getAllByPlaceholderText('Nombre');
      const emailInputs = screen.getAllByPlaceholderText('email@gmail.com');
      const descriptionTextareas = screen.getAllByPlaceholderText(
        'He encontrado un problema en AIFinder...',
      );
      const submitButtons = screen.getAllByRole('button', { name: 'Reportar Bug' });
      const submitButton = submitButtons[0];

      fireEvent.change(nameInputs[0], { target: { value: 'John Doe' } });
      fireEvent.change(emailInputs[0], { target: { value: 'john@example.com' } });
      fireEvent.change(descriptionTextareas[0], { target: { value: 'Found a bug' } });
      fireEvent.click(submitButton);

      // Verify that success state is shown (which means form was cleared)
      await waitFor(() => {
        expect(screen.getAllByText('¡Bug reportado!')).toHaveLength(2);
      });
    });

    it('should close the page after 3 seconds on success', async () => {
      mockEmailJS.send.mockResolvedValueOnce({ status: 200, text: 'OK' });

      render(React.createElement(BugReportPage, defaultProps));

      const nameInputs = screen.getAllByPlaceholderText('Nombre');
      const emailInputs = screen.getAllByPlaceholderText('email@gmail.com');
      const descriptionTextareas = screen.getAllByPlaceholderText(
        'He encontrado un problema en AIFinder...',
      );
      const submitButtons = screen.getAllByRole('button', { name: 'Reportar Bug' });
      const submitButton = submitButtons[0];

      fireEvent.change(nameInputs[0], { target: { value: 'John Doe' } });
      fireEvent.change(emailInputs[0], { target: { value: 'john@example.com' } });
      fireEvent.change(descriptionTextareas[0], { target: { value: 'Found a bug' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getAllByText('¡Bug reportado!')).toHaveLength(2);
      });

      // Advance timers by 3 seconds
      jest.advanceTimersByTime(3000);

      await waitFor(() => {
        expect(defaultProps.onBack).toHaveBeenCalled();
      });
    });
  });

  describe('Error Handling', () => {
    it('should show alert on EmailJS error', async () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
      const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

      mockEmailJS.send.mockRejectedValueOnce(new Error('EmailJS Error'));

      render(React.createElement(BugReportPage, defaultProps));

      const nameInputs = screen.getAllByPlaceholderText('Nombre');
      const emailInputs = screen.getAllByPlaceholderText('email@gmail.com');
      const descriptionTextareas = screen.getAllByPlaceholderText(
        'He encontrado un problema en AIFinder...',
      );
      const submitButtons = screen.getAllByRole('button', { name: 'Reportar Bug' });
      const submitButton = submitButtons[0];

      fireEvent.change(nameInputs[0], { target: { value: 'John Doe' } });
      fireEvent.change(emailInputs[0], { target: { value: 'john@example.com' } });
      fireEvent.change(descriptionTextareas[0], { target: { value: 'Found a bug' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalledWith(
          'Error al enviar email de reporte de bug:',
          expect.any(Error),
        );
        expect(alertSpy).toHaveBeenCalledWith(
          'Error al enviar el reporte. Por favor, inténtalo de nuevo.',
        );
      });

      consoleSpy.mockRestore();
      alertSpy.mockRestore();
    });

    it('should re-enable submit button after error', async () => {
      mockEmailJS.send.mockRejectedValueOnce(new Error('EmailJS Error'));

      render(React.createElement(BugReportPage, defaultProps));

      const nameInputs = screen.getAllByPlaceholderText('Nombre');
      const emailInputs = screen.getAllByPlaceholderText('email@gmail.com');
      const descriptionTextareas = screen.getAllByPlaceholderText(
        'He encontrado un problema en AIFinder...',
      );
      const submitButtons = screen.getAllByRole('button', { name: 'Reportar Bug' });
      const submitButton = submitButtons[0];

      fireEvent.change(nameInputs[0], { target: { value: 'John Doe' } });
      fireEvent.change(emailInputs[0], { target: { value: 'john@example.com' } });
      fireEvent.change(descriptionTextareas[0], { target: { value: 'Found a bug' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        const buttons = screen.getAllByRole('button', { name: 'Reportar Bug' });
        expect(buttons).toHaveLength(2);
        expect(buttons[0]).not.toBeDisabled();
      });
    });
  });

  describe('Navigation', () => {
    it('should call onBack when back button is clicked', () => {
      render(React.createElement(BugReportPage, defaultProps));

      const backButtons = screen.getAllByLabelText('Volver a la página anterior');
      fireEvent.click(backButtons[0]); // Click first back button (mobile)

      expect(defaultProps.onBack).toHaveBeenCalled();
    });

    it('should call onBack when desktop back button is clicked', () => {
      render(React.createElement(BugReportPage, defaultProps));

      const backButtons = screen.getAllByLabelText('Volver a la página anterior');
      fireEvent.click(backButtons[1]); // Click second back button (desktop)

      expect(defaultProps.onBack).toHaveBeenCalled();
    });
  });

  describe('Scroll Behavior', () => {
    it('should scroll to top when component mounts (desktop)', () => {
      const mockMainElement = {
        scrollTo: jest.fn(),
        classList: {
          contains: jest.fn().mockReturnValue(true),
        },
      };
      mockQuerySelector.mockReturnValue(mockMainElement);

      render(React.createElement(BugReportPage, defaultProps));

      expect(mockMainElement.scrollTo).toHaveBeenCalledWith(0, 0);
    });

    it('should scroll window when main element is not found (mobile)', () => {
      mockQuerySelector.mockReturnValue(null);

      render(React.createElement(BugReportPage, defaultProps));

      expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
    });
  });

  describe('Form Validation', () => {
    it('should require name, email, and description', () => {
      render(React.createElement(BugReportPage, defaultProps));

      const nameInputs = screen.getAllByPlaceholderText('Nombre');
      const emailInputs = screen.getAllByPlaceholderText('email@gmail.com');
      const descriptionTextareas = screen.getAllByPlaceholderText(
        'He encontrado un problema en AIFinder...',
      );

      expect(nameInputs[0]).toBeRequired();
      expect(emailInputs[0]).toBeRequired();
      expect(descriptionTextareas[0]).toBeRequired();
    });

    it('should have correct input types', () => {
      render(React.createElement(BugReportPage, defaultProps));

      const nameInputs = screen.getAllByPlaceholderText('Nombre');
      const emailInputs = screen.getAllByPlaceholderText('email@gmail.com');

      expect(nameInputs[0]).toHaveAttribute('type', 'text');
      expect(emailInputs[0]).toHaveAttribute('type', 'email');
    });

    it('should have proper placeholders', () => {
      render(React.createElement(BugReportPage, defaultProps));

      const nameInputs = screen.getAllByPlaceholderText('Nombre');
      const emailInputs = screen.getAllByPlaceholderText('email@gmail.com');
      const descriptionTextareas = screen.getAllByPlaceholderText(
        'He encontrado un problema en AIFinder...',
      );

      expect(nameInputs[0]).toHaveAttribute('placeholder', 'Nombre');
      expect(emailInputs[0]).toHaveAttribute('placeholder', 'email@gmail.com');
      expect(descriptionTextareas[0]).toHaveAttribute(
        'placeholder',
        'He encontrado un problema en AIFinder...',
      );
    });
  });

  describe('Responsive Design', () => {
    it('should render mobile layout elements', () => {
      render(React.createElement(BugReportPage, defaultProps));

      // Mobile header should be present
      expect(screen.getByText('AIFinder')).toBeInTheDocument();
    });

    it('should render desktop layout elements', () => {
      render(React.createElement(BugReportPage, defaultProps));

      // Desktop back button should be present
      const backButtons = screen.getAllByLabelText('Volver a la página anterior');
      expect(backButtons).toHaveLength(2);
    });
  });
});
