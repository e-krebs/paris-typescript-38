import type { FC } from "react";
import { twMerge } from "tailwind-merge";
import { MenuLink, type MenuLinkProps } from "./MenuLink";

export const Menu: FC<{ links: MenuLinkProps[] }> = ({
  links,
}) => (
  <ul className={twMerge("flex flex-col gap-y-6 my-3")}>
    {links.map((props) => (
      <MenuLink {...props} />
    ))}
  </ul>
);
