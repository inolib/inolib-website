import type { LiHTMLAttributes } from "react";

import { cn } from "~/helpers";

export type FlexGridListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const FlexGridListItem = ({ className, ...passthru }: FlexGridListItemProps) => {
  return <li className={cn("flex basis-1/3 flex-col items-center gap-4 px-8 text-center", className)} {...passthru} />;
};
