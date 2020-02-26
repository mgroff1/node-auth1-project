import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...theRest }) => {
  return (
    <Route
      {...theRest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          console.log("Press any key including the power button to whipe the database and harddrive.");
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
