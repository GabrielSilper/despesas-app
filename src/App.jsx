import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Expenses from './pages/Expenses';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route path="/expenses" component={ Expenses } />
      <Route exact path="/" component={ Login } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
