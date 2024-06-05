import Hero from "/assets/hero.webp";
import { Menu } from "./components/Menu";

export const Nav = () => (
  <nav className=" w-52 shrink-0 p-3 bg-zinc-900 text-zinc-300 border-r border-zinc-300 flex flex-col gap-y-4">
    <img
      src={Hero}
      className="border-b pb-3 border-zinc-700"
    />
    <Menu
      links={[
        { to: "home", label: "Home" },
        {
          to: "tools",
          label: "Tools",
          subLinks: [
            { to: "tools.rules", label: "Rules" },
            { to: "tools.syno", label: "Synonyms" },
          ],
        },
        { to: "settings", label: "Settings" },
      ]}
    />
  </nav>
);
