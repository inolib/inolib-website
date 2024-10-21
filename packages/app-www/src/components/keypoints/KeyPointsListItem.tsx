import type { LiHTMLAttributes } from "react";

import { cn } from "~/helpers";

import CheckCircleIcon from "#/images/icons/check-circle.svg";

export type KeyPointsListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const KeyPointsListItem = ({ children, className, ...passthru }: KeyPointsListItemProps) => {
  return (
    <li className={cn("flex gap-4", className)} {...passthru}>
      <CheckCircleIcon className="relative top-[0.1875rem] size-6 shrink-0 grow-0 stroke-blue-600" />
      {children}
    </li>
  );
};
