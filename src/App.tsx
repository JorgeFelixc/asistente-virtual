import React from "react";

import Main from "./components/Main/Index";

import { currentRoutes } from "./config/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const route = createBrowserRouter(currentRoutes)

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
