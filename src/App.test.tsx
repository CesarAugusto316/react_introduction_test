import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';


describe('App component', () => {
  it('renders successfully', () => {
    const { getByText } = render(<App />);

    expect(getByText(/react/i)).toBeInTheDocument();
  });
});
