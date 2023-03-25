import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StandingsTeams from './StandingsTeams';

describe('<StandingsTeams />', () => {
  test('it should mount', () => {
    render(<StandingsTeams />);
    
    const standingsTeams = screen.getByTestId('StandingsTeams');

    expect(standingsTeams).toBeInTheDocument();
  });
});