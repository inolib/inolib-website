"use client";

import { createContext, useContext, useMemo, type HTMLAttributes } from "react";
import type { VariantProps } from "tailwind-variants";

import { tv } from "~/helpers";

const variants = tv({
  base: "flex max-w-prose flex-col",
  variants: {
    _alignment: {
      left: "self-start text-left",
      center: "self-center text-center",
      right: "self-end text-right",
    },
    _size: {
      lg: "gap-2",
      "2xl": "gap-4",
      "4xl": "gap-8",
    },
  },
});

type Variants = VariantProps<typeof variants>;

export type HeadingObject = {
  getSize: () => NonNullable<Variants["_size"]>;
};

const HeadingContext = createContext<HeadingObject | undefined>(undefined);

export const useHeading = () => {
  const header = useContext(HeadingContext);

  if (header === undefined) {
    throw new Error("Context not found");
  }

  return header;
};

export type HeadingProps = {
  _alignment: NonNullable<Variants["_alignment"]>;
  _size: NonNullable<Variants["_size"]>;
} & HTMLAttributes<HTMLElement>;

export const Heading = ({ _alignment, _size, children, className, ...passthru }: HeadingProps) => {
  const header: HeadingObject = useMemo(
    () => ({
      getSize: () => _size,
    }),
    [_size],
  );

  return (
    <HeadingContext.Provider value={header}>
      <header className={variants({ _alignment, _size, className })} {...passthru}>
        {children}
      </header>
    </HeadingContext.Provider>
  );
};
