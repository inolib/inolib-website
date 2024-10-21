import type { LiHTMLAttributes } from "react";

export type HighlightsListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const HighlightsListItem = ({ ...passthru }: HighlightsListItemProps) => {
  return <li {...passthru} />;
};
