import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../HeroSection';

// Mock FloatingCards component
jest.mock('../FloatingCards', () => {
  return function MockFloatingCards({ isMobile }: { isMobile: boolean }) {
    return React.createElement(
      'div',
      { 'data-testid': `floating-cards-${isMobile ? 'mobile' : 'desktop'}` },
      'Floating Cards',
    );
  };
});

// Mock newsletterService
jest.mock('../../../services/newsletterService', () => ({
  newsletterService: {
    subscribeToNewsletter: jest.fn(),
  },
}));

import { newsletterService } from '../../../services/newsletterService';
const mockNewsletterService = newsletterService as jest.Mocked<typeof newsletterService>;

describe('HeroSection', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('Rendering', () => {
    it('should render the hero section with title and description', () => {
      render(React.createElement(HeroSection));

      expect(screen.getByText('Todas las IAs')).toBeInTheDocument();
      expect(screen.getByText('que necesitas en un lugar.')).toBeInTheDocument();
      expect(
        screen.getByText(
          'Descubre las mejores IA para programar, escribir, generar imágenes y vídeo, voz y estudiar. Comparativas claras, pros/contras y precios en español.',
        ),
      ).toBeInTheDocument();
    });

    it('should render newsletter subscription form', () => {
      render(React.createElement(HeroSection));

      expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Suscribirse' })).toBeInTheDocument();
    });

    it('should render FloatingCards components for both mobile and desktop', () => {
      render(React.createElement(HeroSection));

      expect(screen.getByTestId('floating-cards-mobile')).toBeInTheDocument();
      expect(screen.getByTestId('floating-cards-desktop')).toBeInTheDocument();
    });

    it('should render unified responsive layout', () => {
      render(React.createElement(HeroSection));

      // Single responsive title element that works for all screen sizes
      const title = screen.getByText('Todas las IAs');
      expect(title).toBeInTheDocument();
    });
  });

  describe('Newsletter Subscription', () => {
    it('should handle successful subscription', async () => {
      mockNewsletterService.subscribeToNewsletter.mockResolvedValueOnce(true);

      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockNewsletterService.subscribeToNewsletter).toHaveBeenCalledWith(
          'test@example.com',
          'hero',
        );
      });

      await waitFor(() => {
        expect(screen.getByText('¡Suscripción exitosa! Revisa tu email.')).toBeInTheDocument();
      });
    });

    it('should show loading state during submission', async () => {
      mockNewsletterService.subscribeToNewsletter.mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 100)),
      );

      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(submitButton);

      expect(screen.getByRole('button', { name: 'Enviando...' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Enviando...' })).toBeDisabled();
    });

    it('should clear email input after successful subscription', async () => {
      mockNewsletterService.subscribeToNewsletter.mockResolvedValueOnce(true);

      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(emailInput).toHaveValue('');
      });
    });

    it('should hide success message after 5 seconds', async () => {
      mockNewsletterService.subscribeToNewsletter.mockResolvedValueOnce(true);

      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('¡Suscripción exitosa! Revisa tu email.')).toBeInTheDocument();
      });

      // Advance timers by 5 seconds
      jest.advanceTimersByTime(5000);

      await waitFor(() => {
        expect(screen.queryAllByText('¡Suscripción exitosa! Revisa tu email.')).toHaveLength(0);
      });
    });
  });

  describe('Form Validation', () => {
    it('should show error for empty email', async () => {
      render(React.createElement(HeroSection));

      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('Por favor ingresa tu email')).toBeInTheDocument();
      });
    });

    it('should show error for invalid email format', async () => {
      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      const form = emailInput.closest('form');

      fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
      fireEvent.submit(form!);

      await waitFor(() => {
        expect(screen.getByText('Por favor ingresa un email válido')).toBeInTheDocument();
      });
    });

    it('should accept valid email format', async () => {
      mockNewsletterService.subscribeToNewsletter.mockResolvedValueOnce(true);

      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });

      fireEvent.change(emailInput, { target: { value: 'valid@example.com' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockNewsletterService.subscribeToNewsletter).toHaveBeenCalledWith(
          'valid@example.com',
          'hero',
        );
      });
    });
  });

  describe('Error Handling', () => {
    it('should show error message when subscription fails', async () => {
      const errorMessage = 'Error de conexión';
      mockNewsletterService.subscribeToNewsletter.mockRejectedValueOnce(new Error(errorMessage));

      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
      });
    });

    it('should show generic error message when error has no message', async () => {
      mockNewsletterService.subscribeToNewsletter.mockRejectedValueOnce(new Error());

      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('Error al suscribirse. Inténtalo de nuevo.')).toBeInTheDocument();
      });
    });

    it('should clear error when user starts typing again', async () => {
      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });

      // Trigger error
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText('Por favor ingresa tu email')).toBeInTheDocument();
      });

      // Start typing to clear error
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

      await waitFor(() => {
        expect(screen.queryAllByText('Por favor ingresa tu email')).toHaveLength(0);
      });
    });
  });

  describe('Form Interactions', () => {
    it('should update email input value', () => {
      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

      expect(emailInput).toHaveValue('test@example.com');
    });

    it('should disable form during submission', async () => {
      mockNewsletterService.subscribeToNewsletter.mockImplementation(
        () => new Promise((resolve) => setTimeout(resolve, 100)),
      );

      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(submitButton);

      expect(emailInput).toBeDisabled();
      expect(submitButton).toBeDisabled();
    });

    it('should re-enable form after submission completes', async () => {
      mockNewsletterService.subscribeToNewsletter.mockResolvedValueOnce(true);

      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });

      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(emailInput).not.toBeDisabled();
        expect(submitButton).not.toBeDisabled();
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper form structure', () => {
      render(React.createElement(HeroSection));

      const form = screen.getByRole('button', { name: 'Suscribirse' }).closest('form');
      expect(form).toBeInTheDocument();
    });

    it('should have proper input type and placeholder', () => {
      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toHaveAttribute('placeholder', 'Email');
    });

    it('should have proper button type', () => {
      render(React.createElement(HeroSection));

      const submitButton = screen.getByRole('button', { name: 'Suscribirse' });
      expect(submitButton).toHaveAttribute('type', 'submit');
    });
  });

  describe('Responsive Design', () => {
    it('should render mobile layout elements', () => {
      render(React.createElement(HeroSection));

      // Mobile layout should be present
      expect(screen.getByTestId('floating-cards-mobile')).toBeInTheDocument();
    });

    it('should render desktop layout elements', () => {
      render(React.createElement(HeroSection));

      // Desktop layout should be present
      expect(screen.getByTestId('floating-cards-desktop')).toBeInTheDocument();
    });

    it('should have single unified email input for all layouts', () => {
      render(React.createElement(HeroSection));

      const emailInput = screen.getByPlaceholderText('Email');
      expect(emailInput).toBeInTheDocument(); // Single responsive input
    });
  });
});
