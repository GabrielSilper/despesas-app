import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ExpenseProvider from '../context/ExpenseProvider';
import theme from '../style/theme';
import GlobalStyle from '../style/GlobalStyle';

const renderWithRouterAndContextProvider = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <ExpenseProvider>
        <ThemeProvider theme={ theme }>
          <GlobalStyle />
          <Router history={ history }>{component}</Router>
        </ThemeProvider>
      </ExpenseProvider>,
    ),
    history,
  };
};
export default renderWithRouterAndContextProvider;
