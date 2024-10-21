import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type TwoColumnsFlexLayoutProps = HTMLAttributes<HTMLDivElement>;

export const TwoColumnsFlexLayout = ({ className, ...passthru }: TwoColumnsFlexLayoutProps) => {
  return <div className={cn("flex flex-col gap-8 md:flex-row xl:gap-32", className)} {...passthru} />;
};
