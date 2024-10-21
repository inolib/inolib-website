"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, type ButtonHTMLAttributes, type MouseEventHandler } from "react";

import { Button } from "~/components/button";
import { useMenuBar } from "~/components/headless";
import { cn } from "~/helpers";

import { useBurgerNav } from "./BurgerNav";

export type BurgerNavButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BurgerNavButton = ({ ...passthru }: BurgerNavButtonProps) => {
  const burgerNav = useBurgerNav();
  const menuBar = useMenuBar();
  const pathname = usePathname();
  const ref = useRef<HTMLButtonElement>(null);

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    if (burgerNav.isExpanded()) {
      burgerNav.close();
      menuBar.closeSubmenus();
    } else {
      burgerNav.open();
    }
  }, [burgerNav, menuBar]);

  useEffect(() => {
    burgerNav.setButtonRef(ref);
  }, [burgerNav]);

  return (
    <Button
      _color={isHomePage ? "blue-900" : "white"}
      className={cn("focus-visible:outline-black", {
        "hover:bg-white hover:text-black focus-visible:outline-white": isHomePage,
      })}
      onClick={handleClick}
      ref={ref}
      {...passthru}
    />
  );
};
