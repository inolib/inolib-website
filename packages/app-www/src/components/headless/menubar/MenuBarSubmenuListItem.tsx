import { forwardRef, type LiHTMLAttributes } from "react";

export type MenuBarSubmenuListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const MenuBarSubmenuListItem = forwardRef<HTMLLIElement, MenuBarSubmenuListItemProps>(({ ...passthru }, ref) => {
  return <li ref={ref} {...passthru} />;
});

MenuBarSubmenuListItem.displayName = "MenuBarSubmenuListItem";
