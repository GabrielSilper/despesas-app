import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import ExpenseProvider from '../context/ExpenseProvider';

const renderWithRouterAndContextProvider = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(
      <ExpenseProvider>
        <Router history={ history }>{component}</Router>
      </ExpenseProvider>,
    ),
    history,
  };
};
export default renderWithRouterAndContextProvider;
