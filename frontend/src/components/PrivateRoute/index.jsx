import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Login from '../../redux/selector/auth/Auth';

export const PrivateRoute = ({isPublic, ...route}) => {
    const auth = useSelector(Login.getAuth);


    if (isPublic) {
        return <Route {...route} />
    }

    return auth.isAuth ? <Route {...route} /> : <Redirect to="/sign-in"/>
};


export default PrivateRoute;