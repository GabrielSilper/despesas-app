import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import ExpenseProvider from './context/ExpenseProvider';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExpenseProvider>
      <BrowserRouter>
        <ThemeProvider theme={ theme }>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ExpenseProvider>
  </React.StrictMode>,
);
