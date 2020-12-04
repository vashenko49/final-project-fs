import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isPublic, isAuth, ...rest}) => (
    <Route {...rest} render={props => (
        isPublic
            ? <Component {...props} />
            : isAuth
            ? <Component {...props} />
            : <Redirect to={{pathname: '/sign-in', state: {from: props.location}}}/>
    )}/>
);

export default PrivateRoute;