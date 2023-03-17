import Home from "../Home/home";
import Dashboard from "../Dashboard/dashboard";
import Product from "../Product/product";
import Account from "../Account/Account";
import AddAccount from "../AddAccount/AddAccount";
import { isAuth } from "../utils/local";
import { createBrowserRouter } from "react-router-dom";
import ProductInfo from "../productinfromation/productinfo";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => isAuth({ isProtected: true }),
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: isAuth,
  },
  {
    path: "/product",
    element: <Product />,
    loader: isAuth,
  },
  {
    path: "/account",
    element: <Account />,
    loader: isAuth,
  },
  {
    path: "/addaccount",
    element: <AddAccount />,
    loader: isAuth,
  },
  {
    path: "productinfo/:id",
    element: <ProductInfo />,
    loader: isAuth,
  },
]);
