import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Despesas from './pages/Despesas';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route path="/despesas" component={ Despesas } />
      <Route exact path="/" component={ Login } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
