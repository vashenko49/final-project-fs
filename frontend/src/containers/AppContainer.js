import React, { lazy, Suspense, useEffect, useMemo } from 'react';
import { Container } from '@material-ui/core';
import PrivateRoute from '@components/PrivateRoute';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authFromStorage } from '@redux/action/Auth';
import Auth from '@redux/selector/auth/Auth';
import { PageLoader } from '@components/Loader';
import SystemSelector from '@redux/selector/System';
import { PreLoader } from '../components/Loader';

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
  const dispatch = useDispatch();
  const { isAuth } = useSelector(Auth.getAuth);
  const load = useSelector(SystemSelector.getStatusPageLoad);

  useEffect(() => {
    dispatch(authFromStorage());
    // eslint-disable-next-line
  }, []);

  const routeComponents = useMemo(
    () =>
      routes.map(({ isPublic, ...route }) => (
        <PrivateRoute key={route.path} isAuth={isAuth} isPublic={isPublic} {...route} />
      )),
    [isAuth]
  );

  return (
    <Container>
      <PageLoader load={load} />
      <PreLoader />
      <Suspense fallback={<></>}>
        <Switch>{routeComponents}</Switch>
      </Suspense>
    </Container>
  );
};

export default AppContainer;
