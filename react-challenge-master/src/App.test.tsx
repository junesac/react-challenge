import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders get score button', () => {
  const { getByRole } = render(<App />);
  const getSoreButton = getByRole('button');
  expect(getSoreButton).toBeInTheDocument();
});
