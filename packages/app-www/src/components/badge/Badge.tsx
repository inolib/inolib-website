import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export const Badge = ({ className, ...passthru }: BadgeProps) => {
  return <span className={cn("w-fit rounded-full bg-blue-50 px-4 py-1 font-semibold", className)} {...passthru} />;
};
