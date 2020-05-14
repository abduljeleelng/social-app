import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import { isAuthenticated } from "./";
import {Signin} from '../screen';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <BrowserRouter>
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
  </BrowserRouter>
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


