import React from 'react';
import { it, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/pages/UserAccount';

describe('User Accout Page', () => {
  it('should render the User Account Component', () => {
    render(<UserAccount />);
    expect(1).toBeTruthy();
  })
})
