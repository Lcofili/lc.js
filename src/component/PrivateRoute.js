import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Global/AuthProvider";

const PrivateRoute = ({ component: ComponentRouter, ...all }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...all}
      render={(MyProps) => {
        return currentUser ? (
          <ComponentRouter {...MyProps} />
        ) : (
          <Redirect to="/sign" />
        );
      }}
    />
  );
};

export default PrivateRoute;
