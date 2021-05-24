import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './index';

test('renders search component', () => {
    render(<Search />);
    const searchInput = screen.getByTestId('required-input');
    expect(searchInput).toBeInTheDocument();
});
