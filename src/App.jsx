import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ExpensesPage from './pages/ExpensesPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/expenses" component={ ExpensesPage } />
        <Route exact path="/" component={ Login } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </>
  );
}

export default App;
