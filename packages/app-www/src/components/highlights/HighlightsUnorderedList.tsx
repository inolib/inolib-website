import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type HighlightsUnorderedListProps = HTMLAttributes<HTMLUListElement>;

export const HighlightsUnorderedList = ({ className, ...passthru }: HighlightsUnorderedListProps) => {
  return <ul className={cn("flex flex-col gap-4", className)} {...passthru} />;
};
