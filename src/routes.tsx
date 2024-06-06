import { type RouteObject } from "react-router-dom";
import { Layout } from "./Layout";
import {
  NotFound,
  Rules,
  Synonyms,
  Tools,
  Home,
  Settings,
  Rule,
} from "./pages";
import { getPath, type FullPath } from "./paths";
import type { ReactNode } from "react";

type RouteDefinition = {
  path?: FullPath | "*";
  element?: ReactNode;
  index?: boolean;
} & (
  | { index: true; children?: undefined }
  | { index?: false; children?: Array<RouteDefinition> }
);

const routesDefinition: RouteDefinition[] = [
  {
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      {
        path: "tools",
        children: [
          { path: "tools.rules", element: <Rules /> },
          { path: "tools.synonyms", element: <Synonyms /> },
          {
            path: {
              path: "tools.rules.id",
              params: { id: ":id" },
            },
            element: <Rule />,
          },
          { index: true, element: <Tools /> },
        ],
      },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

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

export const routes: RouteObject[] = routesDefinition.map(
  routesDefinitionToRoute
);
