import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/Login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
