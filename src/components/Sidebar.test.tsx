import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

// Mock de los contextos usando variables prefijadas con mock y exportadas
const mockSetActiveCategory = jest.fn();
const mockSetActiveSubcategory = jest.fn();

jest.mock('../app/layout', () => {
  return {
    useAppContext: () => ({
      activeCategory: null,
      setActiveCategory: mockSetActiveCategory,
    }),
    useSubcategoryContext: () => ({
      activeSubcategory: null,
      setActiveSubcategory: mockSetActiveSubcategory,
    }),
  };
});

describe('Sidebar', () => {
  beforeEach(() => {
    mockSetActiveCategory.mockClear();
    mockSetActiveSubcategory.mockClear();
  });

  it('renderiza las secciones principales', () => {
    render(<Sidebar />);
    expect(screen.getByText('Explorar')).toBeInTheDocument();
    expect(screen.getByText('Artículos')).toBeInTheDocument();
  });

  it('renderiza al menos una categoría', () => {
    render(<Sidebar />);
    const generativaLinks = screen.getAllByText('Generativa');
    expect(generativaLinks.length).toBeGreaterThan(0);
  });

  it('llama a setActiveCategory al hacer click en una categoría', () => {
    render(<Sidebar />);
    // Buscar todos los enlaces y botones
    const linksAndButtons = [...screen.queryAllByRole('link'), ...screen.queryAllByRole('button')];
    // Buscar el que contenga el texto 'Generativa' en cualquier parte de su contenido
    const catElement = linksAndButtons.find((el) => el.textContent?.includes('Generativa'));
    expect(catElement).toBeTruthy();
    fireEvent.click(catElement!);
    expect(mockSetActiveCategory).toHaveBeenCalledWith('Generativa');
  });

  it('despliega subcategorías y permite seleccionar una', () => {
    render(<Sidebar />);
    // Buscar todos los elementos de categoría (en desktop es un <span> con el nombre)
    const generativaElements = screen.getAllByText('Generativa');
    // Buscar el elemento de la lista de categorías (que tiene un ancestro <li>)
    const catElement = generativaElements.find((el) => el.closest('li'));
    expect(catElement).toBeTruthy();
    // Simular click en la categoría para desplegar subcategorías
    fireEvent.click(catElement!.closest('div')!);
    // Ahora debería aparecer la subcategoría "Texto"
    const subcatButton = screen.getByRole('button', { name: 'Texto' });
    expect(subcatButton).toBeInTheDocument();
    // Simular el elemento de destino en el DOM para que handleSubcategoryClick funcione
    const section = document.createElement('div');
    section.id = 'Texto';
    document.body.appendChild(section);
    // Simular click en la subcategoría
    fireEvent.click(subcatButton);
    // Verificar que se llama al contexto de subcategoría
    expect(mockSetActiveSubcategory).toHaveBeenCalledWith('Texto');
    // Limpiar el DOM
    document.body.removeChild(section);
  });

  it('cierra la subcategoría al hacer click de nuevo en la misma categoría', () => {
    render(<Sidebar />);
    // Buscar todos los elementos de categoría (en desktop es un <span> con el nombre)
    const generativaElements = screen.getAllByText('Generativa');
    const catElement = generativaElements.find((el) => el.closest('li'));
    expect(catElement).toBeTruthy();
    // Simular click para abrir subcategorías
    fireEvent.click(catElement!.closest('div')!);
    // Verificar que la subcategoría "Texto" aparece
    expect(screen.getByRole('button', { name: 'Texto' })).toBeInTheDocument();
    // Simular click de nuevo para cerrar
    fireEvent.click(catElement!.closest('div')!);
    // Ahora la subcategoría ya no debería estar en el documento
    expect(screen.queryByRole('button', { name: 'Texto' })).toBeNull();
  });
});
