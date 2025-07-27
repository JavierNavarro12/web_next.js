import React from 'react';
import { render, screen } from '@testing-library/react';
import CategorySection from './CategorySection';

describe('CategorySection', () => {
  it('renderiza el título y los children', () => {
    render(
      <CategorySection title="Herramientas IA">
        <div>Contenido de prueba</div>
      </CategorySection>,
    );
    expect(screen.getByText('Herramientas IA')).toBeInTheDocument();
    expect(screen.getByText('Contenido de prueba')).toBeInTheDocument();
  });

  it('aplica el id si se pasa como prop', () => {
    const { container } = render(
      <CategorySection title="Test" id="seccion-ia">
        <span>Otro contenido</span>
      </CategorySection>,
    );
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'seccion-ia');
  });
});
