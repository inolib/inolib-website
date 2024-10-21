import { useCallback, useId, type MouseEventHandler } from "react";

import { useMenuBar } from "~/components/headless";
import { Link, type LinkProps } from "~/components/link";

export type MainNavSubmenuLinkProps = LinkProps;

export const MainNavSubmenuLink = ({ ...passthru }: MainNavSubmenuLinkProps) => {
  const id = useId();
  const menuBar = useMenuBar();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = useCallback(() => {
    menuBar.closeSubmenus();
  }, [menuBar]);

  return <Link data-id={id} onClick={handleClick} {...passthru} />;
};
