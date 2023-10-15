import { screen } from '@testing-library/react';
import renderWithRedux from '../helper/renderWithRedux';
import App from '../App';

it('Deve ter o button "Novo doguinho" na teal', () => {
  renderWithRedux(<App />);
  const buttonDog = screen.getByRole('button', { name: /Novo doguinho/i });
  expect(buttonDog).toBeInTheDocument();
});
