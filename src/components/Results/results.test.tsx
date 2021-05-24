import React from 'react';
import { render, screen } from '@testing-library/react';
// import { shallow } from 'enzyme';
import Results from './index';

describe('<Weather />', () => {
    beforeAll(() => {
        // Prepare nock to respond to a request
        // to the weather API.
        // In this case our test will always think that london
        // is sunny.
        // nock('https://weather.example.com/api')
        //     .get('/weather?q=london')
        //     .reply(200, {
        //         summary: 'sunny',
        //     });
    });

test('renders results component text', () => {
    render(<Results />);
    const linkElement = screen.getByText(/Page Not Found/i);
    expect(linkElement).toBeInTheDocument();
});
