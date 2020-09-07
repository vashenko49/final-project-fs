import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFond from '../NotFond/NotFond';
import MainPage from '../MainPage/MainPage';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route component={NotFond} />
    </Switch>
  );
};

export default Routing;
