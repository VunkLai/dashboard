import { lazy } from "react";
import Suspense from "./components/loading/Suspense";

const Home = Suspense(lazy(() => import("./pages/Home")));
const Dashboard = Suspense(lazy(() => import("./pages/Dashboard")));
const Error404 = Suspense(lazy(() => import("./pages/Error404")));

const routes = [
  {
    path: "/",
    children: [
      { path: "home", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export default routes;
