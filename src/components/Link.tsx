import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LinkProps {
  to: string;
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ to, ...props }) => (
  <NavLink
    {...props}
    to={to}
    className="font-bold underline text-zinc-700"
  />
);
