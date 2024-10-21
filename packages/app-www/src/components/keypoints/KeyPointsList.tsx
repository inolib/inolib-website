import type { HTMLAttributes } from "react";

import { cn } from "~/helpers";

export type KeyPointsListProps = HTMLAttributes<HTMLUListElement>;

export const KeyPointsList = ({ className, ...passthru }: KeyPointsListProps) => {
  return <ul className={cn("flex flex-col gap-4", className)} {...passthru} />;
};
