import { forwardRef, type HTMLAttributes } from "react";

export type MenuBarListProps = HTMLAttributes<HTMLUListElement>;

export const MenuBarList = forwardRef<HTMLUListElement, MenuBarListProps>(({ ...passthru }, ref) => {
  return <ul ref={ref} {...passthru} />;
});

MenuBarList.displayName = "MenuBarList";
