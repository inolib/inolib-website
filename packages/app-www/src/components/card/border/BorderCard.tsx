import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type BorderCardProps = HTMLAttributes<HTMLDivElement>;

export const BorderCard = ({ className, ...passthru }: BorderCardProps) => {
  return <div className={cn("border-l-4 border-blue-600 pl-6", className)} {...passthru} />;
};
