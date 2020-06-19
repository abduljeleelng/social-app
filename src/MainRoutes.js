import React from 'react';
import {Switch,Route} from 'react-router-dom';
import {Activate,Reset,Forget,Home,About,Prayer,Privacy,Term,Help,TimeLine,Setting,SinglePost } from './screen';
import PrivateRoute from './auth/PrivateRoute';
import './app.css';
export default function MainRoutes() {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/:userId" component={TimeLine} />
            <PrivateRoute exact path="/post/:postId" component={SinglePost} />
            <PrivateRoute exact path="/user/setting" component={Setting} />
            <Route exact path="/user/activate/:code" component={Activate} />
            <Route exact path="/user/forget" component={Forget} />
            <Route exact path="/user/reset-password/:code" component={Reset} />
            <Route exact path="/about/about" component={About} />
            <Route exact path="/about/privacy" component={Privacy} />
            <Route exact path="/about/prayer" component={Prayer} />
            <Route exact path="/about/term" component={Term} />
            <Route exact path="/about/help" component={Help} />
        </Switch>
    )
}
