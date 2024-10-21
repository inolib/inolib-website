"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, type MouseEventHandler } from "react";

import { useMenuBar } from "~/components/headless";
import { Link } from "~/components/link";
import { cn } from "~/helpers";

import inolibBlueLogo from "#/images/logos/inolib/inolib-blue.svg?url";
import inolibYellowLogo from "#/images/logos/inolib/inolib-yellow.svg?url";

import { useBurgerNav } from "./BurgerNav";

export const BurgerNavHome = () => {
  const burgerNav = useBurgerNav();
  const menuBar = useMenuBar();
  const pathname = usePathname();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(() => {
    burgerNav.close();
    menuBar.closeSubmenus();
  }, [burgerNav, menuBar]);

  return (
    <Link
      _color="transparent"
      _shape="button"
      aria-current={isHomePage ? "page" : undefined}
      className={cn("focus-visible:outline-black", { "focus-visible:outline-white": isHomePage })}
      href="/"
      onClick={handleClick}
      title="Accueil"
    >
      <Image alt="Accueil" className="h-8 w-fit" src={isHomePage ? inolibYellowLogo : inolibBlueLogo} />
    </Link>
  );
};
