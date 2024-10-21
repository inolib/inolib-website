"use client";

import BaseLink, { type LinkProps as BaseLinkProps } from "next/link";
import { useCallback, type AnchorHTMLAttributes, type MouseEventHandler } from "react";
import type { VariantProps } from "tailwind-variants";

import { tv } from "~/helpers";

const variants = tv({
  base: "flex w-fit items-center gap-2 text-center outline-none focus-visible:outline-4 focus-visible:outline-offset-4",
  variants: {
    _border: {
      none: "",
      black: "border border-black",
      "sand-400": "border border-sand-400",
    },
    _color: {
      "blue-50": "bg-blue-50 text-black hover:bg-blue-100 focus-visible:outline-blue-50",
      "blue-900": "bg-blue-900 text-white hover:bg-blue-950 focus-visible:outline-blue-900",
      "blue-950": "bg-blue-950 text-white hover:bg-black focus-visible:outline-blue-950",
      transparent: "bg-transparent",
      white: "bg-white text-black hover:bg-blue-50 focus-visible:outline-white",
      "yellow-500": "bg-yellow-500 text-black hover:bg-yellow-600 focus-visible:outline-yellow-500",
    },
    _shape: {
      button: "rounded-lg px-4 py-2 font-semibold",
      link: "hover:underline focus-visible:underline",
    },
  },
  compoundVariants: [
    {
      _border: "black",
      className: "focus-visible:outline-black",
    },
    {
      _border: "sand-400",
      className: "focus-visible:outline-sand-400",
    },
  ],
});

type Variants = VariantProps<typeof variants>;

export type LinkProps = {
  _border?: Variants["_border"];
  _color: NonNullable<Variants["_color"]>;
  _shape: NonNullable<Variants["_shape"]>;
} & BaseLinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseLinkProps>;

export const Link = ({ _border = "none", _color, _shape, className, href, onClick, ...passthru }: LinkProps) => {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
    (event) => {
      onClick?.(event);

      const pathname = typeof href === "string" ? href : href.pathname;

      if (pathname?.startsWith("/")) {
        document.body.focus();
      }
    },
    [href, onClick],
  );

  return (
    <BaseLink
      className={variants({ _border, _color, _shape, className })}
      href={href}
      onClick={handleClick}
      {...passthru}
    />
  );
};
