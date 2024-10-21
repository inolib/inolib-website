import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type SectionProps = HTMLAttributes<HTMLElement>;

export const Section = ({ className, ...passthru }: SectionProps) => {
  return (
    <section
      className={cn("px-[5dvw] py-24 first-of-type:pt-4 xl:px-[7.5dvw] 2xl:px-[10dvw]", className)}
      {...passthru}
    />
  );
};
