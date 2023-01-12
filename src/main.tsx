import React from "react";
import ReactDOM from "react-dom/client";

import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { currentRoutes } from "./config/routes";

import "./app.css";
import "./index.css";

const route = createBrowserRouter(currentRoutes);

const mantineProvider: MantineThemeOverride = {};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider theme={mantineProvider} withGlobalStyles withNormalizeCSS>
    <RouterProvider router={route} />
  </MantineProvider>
);
