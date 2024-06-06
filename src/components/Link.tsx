import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { getPath, type FullPath } from "../paths";

interface LinkProps {
  to: FullPath;
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ to, ...props }) => (
  <NavLink
    {...props}
    to={getPath(to)}
    className="font-bold underline text-zinc-700"
  />
);
