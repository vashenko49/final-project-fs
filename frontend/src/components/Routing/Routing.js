import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NotFond from '../NotFond/NotFond';
import Dashboard from '../Dashboard/Dashboard';
import SignIn from "../SignIn/SignIn";
import {PrivateRoute} from "./PrivateRoute";

const Routing = () => {
    return (
        <Switch>
            <Route path="/sign-in" component={SignIn}/>
            <PrivateRoute path="/" component={Dashboard}/>
            <PrivateRoute path="/" component={Dashboard}/>
            <Route component={NotFond}/>
        </Switch>
    );
};

export default Routing;
