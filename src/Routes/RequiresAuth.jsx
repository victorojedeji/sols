import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../Contexts";

const RequiresAuth = () => {
  const location = useLocation();
  const { token }  = useAuthContext();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/log-in" state={{ from: location }} />
  );
};

export default RequiresAuth;
