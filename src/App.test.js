import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders main container', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId("main");
  expect(linkElement).toBeInTheDocument();
});
