import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './index';

test('renders search component text', () => {
    render(<Search />);
    const linkElement = screen.getByText(/Page Not Found/i);
    expect(linkElement).toBeInTheDocument();
});
