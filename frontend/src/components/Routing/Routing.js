import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFond from '../NotFond/NotFond';
import Dashboard from '../Dashboard/Dashboard';
import { Login } from '../Login/Login';

const Routing = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/login" component={Login} />
      <Route component={NotFond} />
    </Switch>
  );
};

export default Routing;
