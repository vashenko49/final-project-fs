import React, { lazy, Suspense, useEffect, useMemo } from 'react';
import { Container } from '@material-ui/core';
import PrivateRoute from '@components/PrivateRoute';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authFromStorage } from '../redux/action/Auth';
import Auth from '../redux/selector/auth/Auth';

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
  const dispatch = useDispatch();
  const { isAuth } = useSelector(Auth.getAuth);

  useEffect(() => {
    dispatch(authFromStorage());
  }, [dispatch]);

  const routeComponents = useMemo(
    () =>
      routes.map(({ isPublic, ...route }) => (
        <PrivateRoute key={route.path} isAuth={isAuth} isPublic={isPublic} {...route} />
      )),
    [isAuth]
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
