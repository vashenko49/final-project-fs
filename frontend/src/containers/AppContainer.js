import React, { lazy, Suspense, useMemo } from 'react';
import { Container } from '@material-ui/core';
import { PrivateRoute } from '@components/PrivateRoute';
import { Switch } from 'react-router-dom';

const routes = [
  {
    isPublic: true,
    exact: true,
    path: '/sign-in',
    component: lazy(() => import('@pages/SignIn'))
  },
  {
    exact: true,
    path: '/',
    component: lazy(() => import('@pages/Dashboard'))
  },
  {
    isPublic: true,
    path: '*',
    component: lazy(() => import('@pages/NotFound'))
  }
];

const AppContainer = () => {
  console.log('AppContainer');

  const routeComponents = useMemo(
    () =>
      routes.map(({ isPublic, ...route }) => (
        <PrivateRoute key={route.path} isPublic={isPublic} {...route} />
      )),
    []
  );

  console.log(routeComponents);
  return (
    <Container>
      <Suspense fallback={<p>1234</p>}>
        <Switch>{routeComponents}</Switch>
      </Suspense>
    </Container>
  );
};

export default AppContainer;
