import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type ThreeColumnsFlexLayoutColumnProps = HTMLAttributes<HTMLDivElement>;

export const ThreeColumnsFlexLayoutColumn = ({ className, ...passthru }: ThreeColumnsFlexLayoutColumnProps) => {
  return <div className={cn("basis-1/3", className)} {...passthru} />;
};
