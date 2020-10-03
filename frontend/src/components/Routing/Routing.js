import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFond from '../NotFond/NotFond';
import Dashboard from '../Dashboard/Dashboard';

const Routing = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route component={NotFond} />
    </Switch>
  );
};

export default Routing;
