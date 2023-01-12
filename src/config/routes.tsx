import { RouteObject } from "react-router-dom";

import Exhibition from "../components/Exhibition";
import Main from "../components/Main/Index";


export const currentRoutes: RouteObject[] = [
  {
    id: 'main',
    path: '/',
    element: <Main />,
  },
  {
    id: 'exhibition',
    path: '/exhibition',
    element: <Exhibition />,
    children: [
      {
        path: ':id',
      }
    ]
  }
];
