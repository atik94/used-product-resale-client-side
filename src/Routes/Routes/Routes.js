//const { createBrowserRouter } = require("react-router-dom");
import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Sellers from "../../Pages/Dashboard/Sellers/Sellers";
import Blog from "../../Pages/Home/Blog/Blog";
import CategoryProducts from "../../Pages/Home/Categories/CategoryProducts";
import Home from "../../Pages/Home/Home/Home";
import NotFound from "../../Pages/Home/NotFound";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category/:id",
        element: <CategoryProducts></CategoryProducts>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/buyers",
        element: <Buyers></Buyers>,
      },
      {
        path: "/dashboard/sellers",
        element: <Sellers></Sellers>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
