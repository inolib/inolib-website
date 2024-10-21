import { forwardRef, type LiHTMLAttributes } from "react";

export type MenuBarListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const MenuBarListItem = forwardRef<HTMLLIElement, MenuBarListItemProps>(({ ...passthru }, ref) => {
  return <li ref={ref} {...passthru} />;
});

MenuBarListItem.displayName = "MenuBarListItem";
