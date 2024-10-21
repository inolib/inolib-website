import { MenuBar, MenuBarList, MenuBarListItem } from "~/components/headless";
import { useMenu } from "~/hooks";

import { MainNavHome } from "./MainNavHome";
import { MainNavLink } from "./MainNavLink";
import { MainNavSubmenu } from "./MainNavSubmenu";

export const MainNav = () => {
  const menu = useMenu();

  return (
    <MenuBar aria-label="Menu principal" className="flex gap-2 xl:gap-4">
      <MainNavHome />

      <MenuBarList className="flex items-center gap-2 xl:gap-4">
        {menu.map((item, index) => (
          <MenuBarListItem key={index}>
            {item.submenu === undefined ? <MainNavLink _link={item} /> : <MainNavSubmenu _submenu={item} />}
          </MenuBarListItem>
        ))}
      </MenuBarList>
    </MenuBar>
  );
};
