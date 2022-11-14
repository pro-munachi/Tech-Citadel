import React from "react";
import { useRoutes, useLocation, BrowserRouter } from "react-router-dom";

import { AuthLayout, NonAuthLayout } from "../Layouts/Layout";

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./routes";

const PublicRouteWrapper = () => {
  const routes = useRoutes(PUBLIC_ROUTES);
  return routes;
};

const PrivateRouteWrapper = () => {
  const routes = useRoutes(PRIVATE_ROUTES);
  return routes;
};

const Pages = () => {
  const location = useLocation();
  const user = localStorage.getItem("user");
  return (
    <div>
      {user ? (
        <div>
          <PrivateRouteWrapper key={location.pathname} />
        </div>
      ) : (
        <div>
          <PublicRouteWrapper key={location.pathname} />
        </div>
      )}
    </div>
  );
};

export default Pages;
