import React from "react";
import { Route, Switch} from "react-router-dom";
import { isAuthenticated } from "./";
import {Signin} from '../screen';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Switch>
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? 
        (
          <Component {...props} />
        ) : 
        (
         
            <Signin />
         
        )
      }
    />
   </Switch>
);
/*
function PrivateRouteTest({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fake.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  */
export default PrivateRoute;


