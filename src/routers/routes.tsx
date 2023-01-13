import DashboardLayout from "layouts/dashboard";
import Dashboard from "pages/Dashboard";
import Profile from "pages/Profile";
import Table from "pages/Table";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
// import DashboardLayout from "./layouts/dashboard";
// import SimpleLayout from "./layouts/simple";
//

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "app", element: <Dashboard /> },
        { path: "user", element: <Profile /> },
        { path: "table", element: <Table /> },
      ],
    },
    // {
    //   path: 'login',
    //   element: <LoginPage />,
    // },
    {
      // element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        // { path: "404", element: <Page404 /> },
        // { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);

  return routes;
}