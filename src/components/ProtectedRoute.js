import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ children, ...rest }) => {
  const currentUser = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser.accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;
