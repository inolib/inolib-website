import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type FlexGridListProps = HTMLAttributes<HTMLUListElement>;

export const FlexGridList = ({ className, ...passthru }: FlexGridListProps) => {
  return <ul className={cn("flex flex-wrap justify-evenly gap-y-16", className)} {...passthru} />;
};
