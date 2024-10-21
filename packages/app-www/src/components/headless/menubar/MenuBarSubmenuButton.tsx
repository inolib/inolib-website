"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  type ButtonHTMLAttributes,
  type MouseEventHandler,
} from "react";

import { useMenuBarSubmenu } from "./MenuBarSubmenu";

export type MenuBarSubmenuButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-expanded" | "data-id">;

export const MenuBarSubmenuButton = forwardRef<HTMLButtonElement, MenuBarSubmenuButtonProps>(
  ({ onClick, ...passthru }, _ref) => {
    const id = useId();
    const menuBarSubmenu = useMenuBarSubmenu();
    const ref = useRef<HTMLButtonElement>(null);

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
      (event) => {
        onClick?.(event);

        if (menuBarSubmenu.isExpanded()) {
          menuBarSubmenu.close();
        } else {
          menuBarSubmenu.open();
        }
      },
      [menuBarSubmenu, onClick],
    );

    useEffect(() => {
      menuBarSubmenu.setButtonRef(ref);
    }, [menuBarSubmenu]);

    useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(_ref, () => ref.current, []);

    return (
      <button aria-expanded={menuBarSubmenu.isExpanded()} data-id={id} onClick={handleClick} ref={ref} {...passthru} />
    );
  },
);

MenuBarSubmenuButton.displayName = "MenuBarSubmenuButton";
