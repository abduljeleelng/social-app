import React from 'react';
import {Switch,Route} from 'react-router-dom';
import { Signin } from './screen';

export default function MainRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Signin} />
        </Switch>
    )
}
