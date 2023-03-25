import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StandingsDrivers from './StandingsDrivers';

describe('<StandingsDrivers />', () => {
  test('it should mount', () => {
    render(<StandingsDrivers />);
    
    const standingsDrivers = screen.getByTestId('StandingsDrivers');

    expect(standingsDrivers).toBeInTheDocument();
  });
});