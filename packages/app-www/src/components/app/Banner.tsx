"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { Link } from "~/components/link";
import { BurgerNav, MainNav } from "~/components/nav";
import { Section } from "~/components/section";
import { cn } from "~/helpers";

import ArrowNarrowDownIcon from "#/images/icons/arrow-narrow-down.svg";

export const Banner = () => {
  const pathname = usePathname();

  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  return (
    <header role="banner">
      <Section
        className={cn("flex items-center justify-between gap-8 bg-blue-50 first-of-type:py-4", {
          "bg-blue-950": isHomePage,
        })}
      >
        <Link
          _color={isHomePage ? "blue-950" : "blue-50"}
          _shape="button"
          className={cn("focus-visible:outline-black", { "hover:bg-blue-900 focus-visible:outline-white": isHomePage })}
          href="#main"
        >
          <span>Accéder au contenu</span>
          <ArrowNarrowDownIcon
            className={cn("shrink-0 stroke-blue-900", {
              "stroke-sand-50": isHomePage,
            })}
          />
        </Link>

        {/* TODO: search bar */}

        <Link _color={isHomePage ? "yellow-500" : "blue-900"} _shape="button" href="/contact">
          Demander un devis
        </Link>
      </Section>

      <Section
        className={cn("hidden py-4 lg:block", {
          "bg-blue-900": isHomePage,
        })}
      >
        <MainNav />
      </Section>

      <BurgerNav />
    </header>
  );
};
