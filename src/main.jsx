import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./assets/styles/index.css";

import Level from "./pages/Level";
import About from "./pages/About";
import Status from "./pages/Status";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Level/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/bot/status",
    element: <Status/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
