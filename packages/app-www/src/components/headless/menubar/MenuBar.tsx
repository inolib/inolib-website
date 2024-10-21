"use client";

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
  type FocusEventHandler,
  type HTMLAttributes,
} from "react";

import type { MenuBarSubmenuObject } from "./MenuBarSubmenu";

export type MenuBarObject = {
  closeSubmenus: () => void;
  onOpenSubmenu: (id: string) => void;
  setSubmenu: (id: string, submenu: MenuBarSubmenuObject) => void;
};

const MenuBarContext = createContext<MenuBarObject | undefined>(undefined);

export const useMenuBar = () => {
  const menuBar = useContext(MenuBarContext);

  if (menuBar === undefined) {
    throw new Error("Context not found");
  }

  return menuBar;
};

export type MenuBarProps = HTMLAttributes<HTMLElement>;

export const MenuBar = forwardRef<HTMLElement, MenuBarProps>(({ children, onBlurCapture, ...passthru }, _ref) => {
  const ref = useRef<HTMLElement>(null);

  const [submenus, setSubmenus] = useState<Record<string, MenuBarSubmenuObject>>({});

  const menuBar: MenuBarObject = useMemo(
    () => ({
      closeSubmenus: () => {
        for (const submenu of Object.values(submenus)) {
          submenu.close();
        }
      },
      onOpenSubmenu: (id) => {
        for (const [submenuId, submenu] of Object.entries(submenus)) {
          if (submenuId !== id) {
            submenu.close();
          }
        }
      },
      setSubmenu: (id, submenu) => {
        setSubmenus((submenus) => (submenus[id] === undefined ? { ...submenus, [id]: submenu } : submenus));
      },
    }),
    [submenus],
  );

  const handleBlurCapture: FocusEventHandler<HTMLElement> = useCallback(
    (event) => {
      onBlurCapture?.(event);

      if (
        event.relatedTarget !== null &&
        event.relatedTarget !== document.body &&
        !(ref.current?.contains(event.relatedTarget) ?? true)
      ) {
        menuBar.closeSubmenus();
      }
    },
    [menuBar, onBlurCapture],
  );

  useImperativeHandle<HTMLElement | null, HTMLElement | null>(_ref, () => ref.current, []);

  return (
    <MenuBarContext.Provider value={menuBar}>
      <nav onBlurCapture={handleBlurCapture} ref={ref} {...passthru}>
        {children}
      </nav>
    </MenuBarContext.Provider>
  );
});

MenuBar.displayName = "MenuBar";
