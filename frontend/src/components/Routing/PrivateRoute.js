import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import Login from "../../redux/selector/auth/Auth";

export const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = useSelector(Login.getAuth);

    return (
        <Route {...rest} render={props => (
            auth.isAuth
                ? <Component {...props} />
                : <Redirect to={{pathname: '/sign-in', state: {from: props.location}}}/>
        )}/>
    )
}