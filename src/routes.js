import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";

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
