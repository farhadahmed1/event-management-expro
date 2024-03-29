import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Services from "../pages/Services/Services";
import News from "../pages/News/News";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Blog from "../pages/Blog/Blog";
import Event from "../pages/Event/Event";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../data.json"),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("../../data.json"),
      },
      {
        path: "/service/:id",

        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ), //must be private routes
        loader: () => fetch(`data.json`),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ), //must be private routes
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/event",
        element: <Event></Event>,
      },
    ],
  },
]);

export default router;
