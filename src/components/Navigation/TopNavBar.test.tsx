import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TopNavBar from './TopNavBar';

describe('TopNavBar', () => {
  const categories = ['IA', 'Productividad', 'Diseño'];
  const active = 'Productividad';
  const onSelect = jest.fn();

  it('renderiza todas las categorías como botones', () => {
    render(<TopNavBar categories={categories} active={active} onSelect={onSelect} />);
    categories.forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument();
    });
  });

  it('aplica la clase activa al botón correspondiente', () => {
    render(<TopNavBar categories={categories} active={active} onSelect={onSelect} />);
    const activeButton = screen.getByText(active);
    expect(activeButton).toHaveClass('bg-white');
    expect(activeButton).toHaveClass('text-black');
  });

  it('llama a onSelect con la categoría correcta al hacer click', () => {
    render(<TopNavBar categories={categories} active={active} onSelect={onSelect} />);
    const button = screen.getByText('IA');
    fireEvent.click(button);
    expect(onSelect).toHaveBeenCalledWith('IA');
  });
});
