import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./style";
import ComingSoon from "./pages/ComingSoon/index";
import Profile from "./pages/Profile/index";
import Dashboard from "./pages/Dashboard/index";
import Error from "./pages/Error/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComingSoon pageName="d'accueil" />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/:profileIndex",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <ComingSoon pageName="réglages" />,
  },
  {
    path: "/community",
    element: <ComingSoon pageName="communauté" />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
