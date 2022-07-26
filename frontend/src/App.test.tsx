import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders carousel component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Carousel/i);
  expect(linkElement).toBeInTheDocument();
});
