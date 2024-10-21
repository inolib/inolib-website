"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, type MouseEventHandler } from "react";

import { useMenuBar } from "~/components/headless";
import { Link } from "~/components/link";
import { cn } from "~/helpers";

import inBlueLogo from "#/images/logos/inolib/in-blue.svg?url";
import inYellowLogo from "#/images/logos/inolib/in-yellow.svg?url";
import inolibBlueLogo from "#/images/logos/inolib/inolib-blue.svg?url";
import inolibYellowLogo from "#/images/logos/inolib/inolib-yellow.svg?url";

export const MainNavHome = () => {
  const menuBar = useMenuBar();
  const pathname = usePathname();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(() => {
    menuBar.closeSubmenus();
  }, [menuBar]);

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
      <Image
        alt="Accueil"
        className="hidden h-8 w-fit lg:block xl:hidden"
        src={isHomePage ? inYellowLogo : inBlueLogo}
      />
      <Image
        alt="Accueil"
        className="h-8 w-fit lg:hidden xl:block"
        src={isHomePage ? inolibYellowLogo : inolibBlueLogo}
      />
    </Link>
  );
};
