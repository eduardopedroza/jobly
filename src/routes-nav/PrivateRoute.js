import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

function PrivateRoute({ path, element: Element }) {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return <Route path={path} element={<Element />} />;
}

export default PrivateRoute;
