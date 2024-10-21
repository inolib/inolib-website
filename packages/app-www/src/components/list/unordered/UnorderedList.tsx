import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type UnorderedListProps = HTMLAttributes<HTMLUListElement>;

export const UnorderedList = ({ className, ...passthru }: UnorderedListProps) => {
  return <ul className={cn("pl-4", className)} {...passthru} />;
};
