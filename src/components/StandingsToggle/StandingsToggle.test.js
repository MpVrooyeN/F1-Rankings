import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StandingsToggle from './StandingsToggle';

describe('<StandingsToggle />', () => {
  test('it should mount', () => {
    render(<StandingsToggle />);
    
    const standingsToggle = screen.getByTestId('StandingsToggle');

    expect(standingsToggle).toBeInTheDocument();
  });
});