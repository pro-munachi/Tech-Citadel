import React from "react"; // ,{ lazy }
// import WithSuspense from "../components/Loaders/WithSuspense";
import { PRIVATE_PATHS, PUBLIC_PATHS } from "./constants";
import { Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

// import HoneyPotPage from "../pages/HoneyPot/HoneyPotPage";
// import EmulatorPage from "../pages/EmulatorPage/EmulatorPage";
// import EmulatorScanDetails from "../pages/EmulatorPage/EmulatorScansDetails";

const { LOGIN, SIGNUP, INVITE_LOGIN } = PUBLIC_PATHS;

const { DASHBOARD } = PRIVATE_PATHS;

export const PUBLIC_ROUTES = [
  { path: LOGIN, element: <Login /> },
  { path: "*", element: <Navigate to="/login" replace /> },
];

export const PRIVATE_ROUTES = [
  { path: DASHBOARD, element: <Dashboard /> },
  { path: "*", element: <Navigate to="/" replace /> },
];
