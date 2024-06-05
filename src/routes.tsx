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
import { getPath, type Path } from "./paths";
import type { ReactNode } from "react";

type RouteDefinition = {
  path?: Path | "*";
  element?: ReactNode;
  index?: boolean;
} & (
  | { index: true; children?: undefined }
  | { index?: false; children?: Array<RouteDefinition> }
);

const routesDefinitionToRoute = ({
  path,
  children,
  element,
  index,
}: RouteDefinition): RouteObject => {
  const routePath =
    path && path !== "*" ? getPath(path) : path;

  return index
    ? { path: routePath, element, index }
    : {
        path: routePath,
        element,
        index,
        children: children?.map(routesDefinitionToRoute),
      };
};

const routesDefinition: RouteDefinition[] = [
  {
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      {
        path: "tools",
        children: [
          { path: "tools.rules", element: <Rules /> },
          { path: "tools.syno", element: <Synonyms /> },
          { index: true, element: <Tools /> },
        ],
      },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
export const routes: RouteObject[] = routesDefinition.map(
  routesDefinitionToRoute
);
