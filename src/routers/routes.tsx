import SidebarLayout from "layouts/sidebar";
import Dashboard from "pages/Dashboard";
import NotFound from "pages/error/NotFound";
import ServerError from "pages/error/ServerError";
import Login from "pages/Login";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

// ----------------------------------------------------------------------

const LOGIN_ROUTE: RouteObject = {
  path: "login",
  element: <Login />,
};

const DASHBOARD_ROUTE: RouteObject[] = [
  {
    path: "/dashboard",
    element: <SidebarLayout />,
    children: [
      { element: <Navigate to="/dashboard/app" replace />, index: true },
      { path: "app", element: <Dashboard /> },
      { path: "chart", element: <Dashboard /> },
    ],
  },
  {
    path: "/components",
    element: <SidebarLayout />,
    children: [
      {
        path: "table",
        children: [
          {
            element: <Navigate to="/components/table/basic" replace />,
            index: true,
          },
          { path: "basic", element: <Dashboard /> },
          { path: "custom/tab1", element: <Dashboard /> },
          { path: "custom/tab2", element: <Dashboard /> },
        ],
      },
    ],
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
  element: <Navigate to="/dashboard" replace />,
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
