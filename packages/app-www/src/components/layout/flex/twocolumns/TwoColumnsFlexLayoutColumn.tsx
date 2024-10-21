import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type TwoColumnsFlexLayoutColumnProps = HTMLAttributes<HTMLDivElement>;

export const TwoColumnsFlexLayoutColumn = ({ className, ...passthru }: TwoColumnsFlexLayoutColumnProps) => {
  return <div className={cn("basis-1/2", className)} {...passthru} />;
};
