import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndContextProvider from './renderWithRouterAndContextProvider';
import App from '../App';

describe('Testando a página de login.', () => {
  test('Verificando se tem um campo para digitar o nome', () => {
    renderWithRouterAndContextProvider(<App />);

    const nameInput = screen.getByRole('textbox', { name: /despesas app/i });
    expect(nameInput).toBeInTheDocument();
  });
});
