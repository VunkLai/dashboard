import { lazy } from "react";
import Suspense from "./components/loading/Suspense";

import ErrorLayout from "./layouts/ErrorLayout";
import MainLayout from "./layouts/MainLayout";

import ConsoleLayout from "./layouts/ConsoleLayout";
const Home = Suspense(lazy(() => import("./pages/Home")));
const Dashboard = Suspense(lazy(() => import("./pages/Dashboard")));

// Console
const SignIn = Suspense(lazy(() => import("./pages/console/SignIn")));

// Error
const Forbidden = Suspense(lazy(() => import("./errors/Forbidden")));
const NotFound = Suspense(lazy(() => import("./errors/NotFound")));
const ServerError = Suspense(lazy(() => import("./errors/ServerError")));

const routes = [
  {
    path: "console",
    element: <ConsoleLayout />,
    children: [
      { path: "signin", element: <SignIn /> },
      // {path: "login", element: <LogIn/>},
      // {path: "logout", element: <LogOut/>},
      // { path: "*", element: <Login /> },
    ],
  },
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
