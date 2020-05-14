import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {Activate,Reset,Forget,Home } from './screen';
import PrivateRoute from './auth/PrivateRoute';
export default function MainRoutes() {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/user/activate/:code" component={Activate} />
            <Route exact path="/user/forget/" component={Forget} />
            <Route exact path="/user/reset-password/:code" component={Reset} />
        </Switch>
    )
}
