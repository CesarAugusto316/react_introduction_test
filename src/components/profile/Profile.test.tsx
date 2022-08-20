import {
  fireEvent, render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  describe, it, expect, beforeEach,
} from 'vitest';
import { Profile } from './Profile';


describe('Profile: FC', () => {
  beforeEach(() => {
    render(<Profile
      name="César"
      title="Fullstack Javascript Engineer"
      details="I have 6 years of experienced, and I love Reactjs"
    />);
  });

  it('should display the "Hide Details Button at start"', () => {
    expect(screen
      .getByRole('button', { name: /hide details/i }))
      .toBeInTheDocument();
  });

  it(
    `should change from "hide details"
      to "show details" when clicked`,
    () => {
      fireEvent.click(screen
        .getByRole('button', { name: /hide details/i }));

      expect(screen
        .getByRole('button', { name: /show details/i }))
        .toBeInTheDocument();
    },
  );

  it('should render details', () => {
    screen.debug();

    expect(screen
      .queryByTestId('details'))
      .toBeInTheDocument();
  });

  it('hides details when button is clicked', async () => {
    const user = userEvent.setup();

    await user.click(
      screen.getByRole('button', { name: /hide details/i }),
    );

    expect(screen
      .queryByTestId('details'))
      .not.toBeInTheDocument();
  });
});
