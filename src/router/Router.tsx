import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import HomePage from "../pages/home";
import BookmarkPage from "../pages/bookmark";
import Root from "./Root";

const pageArray: RouteObject[] = [
  { path: "/home", element: <HomePage /> },
  { path: "/bookmark", element: <BookmarkPage /> },
];

const routes: RouteObject[] = [
  {
    element: <Root />,
    children: pageArray,
  },
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;
