import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ComingSoon from "./pages/ComingSoon/index";
import { createGlobalStyle } from "styled-components";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

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

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}  
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
