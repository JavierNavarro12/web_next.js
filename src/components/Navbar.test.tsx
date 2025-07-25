import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renderiza los enlaces principales', () => {
    render(<Navbar />);
    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(screen.getByText('Coupon Codes')).toBeInTheDocument();
    expect(screen.getByText('Newest Additions')).toBeInTheDocument();
  });

  it('renderiza el input de búsqueda con el placeholder correcto', () => {
    render(<Navbar />);
    const input = screen.getByPlaceholderText('Search Tools');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });
});
