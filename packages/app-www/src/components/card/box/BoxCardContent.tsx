import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type BoxCardContentProps = HTMLAttributes<HTMLDivElement>;

export const BoxCardContent = ({ className, ...passthru }: BoxCardContentProps) => {
  return <div className={cn("flex flex-col gap-8 pt-2", className)} {...passthru} />;
};
