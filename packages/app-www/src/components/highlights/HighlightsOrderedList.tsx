import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type HighlightsOrderedListProps = HTMLAttributes<HTMLOListElement>;

export const HighlightsOrderedList = ({ className, ...passthru }: HighlightsOrderedListProps) => {
  return <ol className={cn("flex flex-col gap-4", className)} {...passthru} />;
};
