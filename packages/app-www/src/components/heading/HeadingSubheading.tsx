"use client";

import { useMemo, type HTMLAttributes } from "react";

import { tv } from "~/helpers";

import { useHeading } from "./Heading";

const variants = tv({
  base: "",
  variants: {
    _size: {
      lg: "",
      "2xl": "text-lg",
      "4xl": "text-xl",
    },
  },
});

export type HeadingSubheadingProps = HTMLAttributes<HTMLParagraphElement>;

export const HeadingSubheading = ({ className, ...passthru }: HeadingSubheadingProps) => {
  const header = useHeading();

  const _size = useMemo(() => header.getSize(), [header]);

  return <p className={variants({ _size, className })} {...passthru} />;
};
