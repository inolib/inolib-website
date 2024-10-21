import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type ThreeColumnsFlexLayoutProps = HTMLAttributes<HTMLDivElement>;

export const ThreeColumnsFlexLayout = ({ className, ...passthru }: ThreeColumnsFlexLayoutProps) => {
  return <div className={cn("flex flex-col gap-16 md:flex-row", className)} {...passthru} />;
};
