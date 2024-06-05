import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export interface MenuLinkProps {
  to: string;
  label: ReactNode;
  subLinks?: MenuLinkProps[];
}

export const MenuLink: FC<MenuLinkProps & { border?: true }> = ({
  to,
  label,
  subLinks = [],
  border,
}) => (
  <li className={twMerge("flex flex-col")}>
    <NavLink
      to={to}
      className={({ isActive }) =>
        twMerge(
          "pl-3 my-0 py-0.5",
          isActive && "font-bold text-yellow-500",
          border && "-ml-px border-l border-transparent transition-[border-color]",
          isActive && border && "border-yellow-500"
        )
      }
    >
      {label}
    </NavLink>

    {subLinks.length > 0 && (
      <ul className={twMerge("flex flex-col gap-y-3 my-2 py-1 border-l ml-3 border-zinc-700")}>
        {subLinks.map((props) => (
          <MenuLink {...props} border={true} />
        ))}
      </ul>
    )}
  </li>
);
