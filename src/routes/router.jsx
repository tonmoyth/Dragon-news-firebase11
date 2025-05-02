import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CardDetails from "../pages/CardDetails";
import Private from "../PrivateRoute/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: '/auth/login',
        Component:Login
      },
      {
        path: '/auth/register',
        Component: Register
      }
    ]
  },
  {
    path: "/details/:id",
    element: <Private><CardDetails></CardDetails></Private>,
    loader: () => fetch('/news.json')
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
