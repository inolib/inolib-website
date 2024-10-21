"use client";

import { usePathname } from "next/navigation";
import { useCallback, useMemo, type MouseEventHandler } from "react";

import { useMenuBar } from "~/components/headless";
import { Link } from "~/components/link";
import { cn } from "~/helpers";
import type { MenuLink } from "~/hooks";

export type MainNavLinkProps = {
  _link: MenuLink;
};

export const MainNavLink = ({ _link }: MainNavLinkProps) => {
  const menuBar = useMenuBar();
  const pathname = usePathname();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(() => {
    menuBar.closeSubmenus();
  }, [menuBar]);

  return (
    <Link
      _color={isHomePage ? "blue-900" : "white"}
      _shape="button"
      aria-current={_link.href === pathname ? "page" : undefined}
      className={cn("focus-visible:outline-black", {
        "hover:bg-white hover:text-black focus-visible:outline-white": isHomePage,
      })}
      href={_link.href}
      onClick={handleClick}
    >
      {_link.label}
    </Link>
  );
};
