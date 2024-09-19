import React from 'react';
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import HomePage from '../../src/pages/HomePage';

describe('Greet', () => {
  it('should render the AboutPage Component', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/Dexx/i);
  })
})
