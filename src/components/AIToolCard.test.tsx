import React from 'react';
import { render, screen } from '@testing-library/react';
import AIToolCard from './AIToolCard';

describe('AIToolCard', () => {
  const defaultProps = {
    name: 'ChatGPT',
    description: 'Un asistente de IA conversacional.',
    image: '/public/images/chatgpt-web.png',
  };

  it('renderiza el nombre de la herramienta', () => {
    render(<AIToolCard {...defaultProps} />);
    expect(screen.getByText('ChatGPT')).toBeInTheDocument();
  });

  it('renderiza la descripción', () => {
    render(<AIToolCard {...defaultProps} />);
    expect(screen.getByText('Un asistente de IA conversacional.')).toBeInTheDocument();
  });

  it('renderiza la imagen con el src y alt correctos (desktop)', () => {
    render(<AIToolCard {...defaultProps} />);
    const desktopImg = screen
      .getAllByAltText('ChatGPT')
      .find((img) => img.className.includes('md:block'));
    expect(desktopImg).toHaveAttribute('alt', 'ChatGPT');
    expect(desktopImg).toHaveAttribute('src', expect.stringContaining('chatgpt-web.png'));
  });

  it('renderiza la imagen móvil con logo si se pasa la prop', () => {
    render(<AIToolCard {...defaultProps} logo="/public/logos/chatgpt-movil.png" />);
    const mobileImg = screen
      .getAllByAltText('ChatGPT')
      .find((img) => img.className.includes('md:hidden'));
    expect(mobileImg).toHaveAttribute('src', expect.stringContaining('chatgpt-movil.png'));
  });

  it('renderiza la imagen móvil con image si no hay logo', () => {
    render(<AIToolCard {...defaultProps} />);
    const mobileImg = screen
      .getAllByAltText('ChatGPT')
      .find((img) => img.className.includes('md:hidden'));
    expect(mobileImg).toHaveAttribute('src', expect.stringContaining('chatgpt-web.png'));
  });
});
