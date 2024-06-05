import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";

export const Layout = () => (
  <>
    <Nav />

    <main className="flex items-center justify-center grow p-3 text-3xl bg-zinc-50 text-zinc-900">
      <Outlet />
    </main>
  </>
);
