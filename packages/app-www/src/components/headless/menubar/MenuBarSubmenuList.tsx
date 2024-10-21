import { forwardRef, type HTMLAttributes } from "react";

import { useMenuBarSubmenu } from "./MenuBarSubmenu";

export type MenuBarSubmenuListProps = HTMLAttributes<HTMLUListElement>;

export const MenuBarSubmenuList = forwardRef<HTMLUListElement, MenuBarSubmenuListProps>(
  ({ style, ...passthru }, ref) => {
    const navMenuBarMenu = useMenuBarSubmenu();

    return <ul ref={ref} style={navMenuBarMenu.isExpanded() ? style : { display: "none", ...style }} {...passthru} />;
  },
);

MenuBarSubmenuList.displayName = "MenuBarSubmenuList";
