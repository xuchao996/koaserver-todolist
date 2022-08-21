import { RouteObject, useRoutes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";

const router = () => {
  const element = [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
  return useRoutes(element);
};

export default router;
