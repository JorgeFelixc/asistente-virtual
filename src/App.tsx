import React from "react";

import Main from "./components/Main/Index";

import { currentRoutes } from "./config/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import "./index.css";

const route = createBrowserRouter(currentRoutes)

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
