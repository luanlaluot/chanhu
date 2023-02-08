import SidebarLayout from "layouts/sidebar";
import Calendar from "pages/Calendar";
import NotFound from "pages/error/NotFound";
import ServerError from "pages/error/ServerError";
import Login from "pages/Login";
import Updating from "pages/Updating";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

// ----------------------------------------------------------------------

const LOGIN_ROUTE: RouteObject = {
  path: "login",
  element: <Login />,
};

const DASHBOARD_ROUTE: RouteObject[] = [
  {
    path: "/general",
    element: <SidebarLayout />,
    children: [
      { element: <Navigate to="/general/calendar" replace />, index: true },
      { path: "calendar", element: <Calendar /> },
      { path: "note", element: <Updating /> },
    ],
  },
  {
    path: "/board",
    element: <SidebarLayout />,
    children: [{ path: ":id", element: <Updating /> }],
  },
];

const MAIN_ROUTE = {
  path: "*",
  children: [
    { path: "500", element: <ServerError /> },
    { path: "404", element: <NotFound /> },
    { path: "*", element: <Navigate to="/404" replace /> },
  ],
};

const OTHER_ROUTE = {
  path: "/",
  element: <Navigate to="/general" replace />,
};

export default function Router() {
  const routes = useRoutes([
    LOGIN_ROUTE,
    MAIN_ROUTE,
    ...DASHBOARD_ROUTE,
    OTHER_ROUTE,
  ]);

  return routes;
}
