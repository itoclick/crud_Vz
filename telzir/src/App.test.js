import { render, screen } from '@testing-library/react';
import App from './App';

test('Renderiza o texto: Calcule o Valor do Seu Plano', () => {
  render(<App />);
  const textElement = screen.getByText(/Calcule o Valor do Seu Plano/i);
  expect(textElement).toBeInTheDocument();
});
