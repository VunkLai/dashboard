import { lazy } from "react";
import Suspense from "./components/loading/Suspense";

import ErrorLayout from "./layouts/ErrorLayout";
import MainLayout from "./layouts/MainLayout";

const Home = Suspense(lazy(() => import("./pages/Home")));
const Dashboard = Suspense(lazy(() => import("./pages/Dashboard")));

// Error
const Forbidden = Suspense(lazy(() => import("./errors/Forbidden")));
const NotFound = Suspense(lazy(() => import("./errors/NotFound")));
const ServerError = Suspense(lazy(() => import("./errors/ServerError")));

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "errors",
    element: <ErrorLayout />,
    children: [
      { path: "403", element: <Forbidden /> },
      { path: "404", element: <NotFound /> },
      { path: "500", element: <ServerError /> },
    ],
  },
  {
    path: "*",
    element: (
      <ErrorLayout>
        <NotFound />
      </ErrorLayout>
    ),
  },
];

export default routes;
