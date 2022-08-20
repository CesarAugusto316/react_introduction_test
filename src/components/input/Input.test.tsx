import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Input } from './Input';


describe('Input FC', () => {
  const { container, debug, getByRole } = render(<Input
    id="second-name"
    name="a name"
    placeholder="Name"
    type="text"
  />);


  it('must be called by role', () => {
    expect(getByRole('textbox')).toBeInTheDocument();
  });
});
