import { render, screen } from '@testing-library/react';

import App from './App';

it('should show "App" text', () => {
  render(<App />);
  expect(screen.getByText(/App/i)).toBeInTheDocument();
});
