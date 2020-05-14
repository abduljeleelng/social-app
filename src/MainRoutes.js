import React from 'react';
import {Switch,Route} from 'react-router-dom';
import { Signin,Activate } from './screen';
import PrivateRoute from './auth/PrivateRoute';
export default function MainRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Signin} />
            <Route exact path="/user/activate/:code" component={Activate} />
        </Switch>
    )
}
