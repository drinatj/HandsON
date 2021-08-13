import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('loads and displays greeting', async () => {
    render(<App  />)

    expect(screen.getByRole('heading')).toHaveTextContent('hello there')
})