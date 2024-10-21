import type { LiHTMLAttributes } from "react";

import { cn } from "~/helpers";

export type UnorderedListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const UnorderedListItem = ({ className, ...passthru }: UnorderedListItemProps) => {
  return (
    <li
      className={cn(
        "relative before:absolute before:left-[-0.9125rem] before:top-[0.6875rem] before:size-2 before:rounded-full before:bg-black",
        className,
      )}
      {...passthru}
    />
  );
};
