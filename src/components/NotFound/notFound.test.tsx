import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './index';

test('renders page not found text', () => {
    render(<NotFound />);
    const linkElement = screen.getByText(/Page Not Found/i);
    expect(linkElement).toBeInTheDocument();
});
