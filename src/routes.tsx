import { type RouteObject } from "react-router-dom";
import { Layout } from "./Layout";
import {
  NotFound,
  Rules,
  Synonyms,
  Tools,
  Home,
  Settings,
} from "./pages";

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "tools",
        children: [
          { path: "rules", element: <Rules /> },
          { path: "synonyms", element: <Synonyms /> },
          { index: true, element: <Tools /> },
        ],
      },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
