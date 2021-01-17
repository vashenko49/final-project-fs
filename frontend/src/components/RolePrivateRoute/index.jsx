import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";
import CurrentUserSelector from "../../redux/selector/CurrentUserSelector";

const RolePrivateRoute = ({component: Component, roles, ...rest}) => {
    const profile = useSelector(CurrentUserSelector.getProfile);
    return (
        <>
            {profile &&
            <Route {...rest} render={props => (
                roles.includes(profile.role) ? <Component {...props} />
                    : <Redirect to={{pathname: '/access-denied', state: {from: props.location}}}/>
            )}/>
            }
        </>
    )
};

export default RolePrivateRoute;