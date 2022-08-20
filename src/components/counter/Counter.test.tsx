/* eslint-disable no-plusplus */
import { test, expect, describe } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Counter } from './Counter';


describe('Counter FC', () => {
  test('render first time counter ', () => {
    const { getByText } = render(<Counter />);

    const count = getByText('0');
    expect(count).toBeInTheDocument();
  });

  test('test first click on counter ', () => {
    const { getByTestId } = render(<Counter />);

    const button = getByTestId('plus');
    // simula un click en el boton
    fireEvent.click(button);
    const count = getByTestId('countId');
    expect(count).toBeInTheDocument();
  });

  test('test two clicks on counter ', () => {
    const { getByTestId } = render(<Counter />);

    const button = getByTestId('plus');
    fireEvent.click(button);
    fireEvent.click(button);
    const count = getByTestId('countId');
    expect(count).toBeInTheDocument();
  });

  test('test 100 clicks on counter ', () => {
    const { getByTestId } = render(<Counter />);

    const button = getByTestId('plus');
    for (let index = 0; index < 100; index++) {
      fireEvent.click(button);
    }
    const count = getByTestId('countId');
    expect(count.textContent).toBe('100');
  });
});
