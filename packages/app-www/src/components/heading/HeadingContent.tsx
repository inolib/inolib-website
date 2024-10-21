"use client";

import { useMemo } from "react";

import { Heading, type HeadingProps } from "~/components/headless";
import { tv } from "~/helpers";

import { useHeading } from "./Heading";

const variants = tv({
  base: "font-bold",
  variants: {
    _size: {
      lg: "text-lg",
      "2xl": "text-2xl",
      "4xl": "text-4xl",
    },
  },
});

export type HeadingContentProps = HeadingProps;

export const HeadingContent = ({ _level, className, ...passthru }: HeadingContentProps) => {
  const header = useHeading();

  const _size = useMemo(() => header.getSize(), [header]);

  return <Heading _level={_level} className={variants({ _size, className })} {...passthru} />;
};
