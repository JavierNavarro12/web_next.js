// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import CategorySection from './CategorySection';

describe('CategorySection', () => {
  it('renderiza el título y los children', () => {
    render(
      React.createElement(
        CategorySection,
        { title: 'Herramientas IA' },
        React.createElement('div', null, 'Contenido de prueba'),
      ),
    );
    expect(screen.getByText('Herramientas IA')).toBeInTheDocument();
    expect(screen.getByText('Contenido de prueba')).toBeInTheDocument();
  });

  it('aplica el id si se pasa como prop', () => {
    const { container } = render(
      React.createElement(
        CategorySection,
        { title: 'Test', id: 'seccion-ia' },
        React.createElement('span', null, 'Otro contenido'),
      ),
    );
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'seccion-ia');
  });
});
