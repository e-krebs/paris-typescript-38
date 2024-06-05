import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes.tsx";

const root = document.getElementById("root");

if (root) {
  const browserRoutes = createBrowserRouter(routes);

  ReactDOM.createRoot(root).render(
    <StrictMode>
      <div className="flex h-dvh">
        <RouterProvider router={browserRoutes} />
      </div>
    </StrictMode>
  );
}
