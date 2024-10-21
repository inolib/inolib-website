"use client";

import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type HTMLAttributes,
  type KeyboardEventHandler,
  type RefObject,
} from "react";

import { useMenuBar } from "./MenuBar";

export type MenuBarSubmenuObject = {
  close: () => void;
  getButtonRef: () => RefObject<HTMLButtonElement>;
  isExpanded: () => boolean;
  open: () => void;
  setButtonRef: (ref: RefObject<HTMLButtonElement>) => void;
};

const MenuBarSubmenuContext = createContext<MenuBarSubmenuObject | undefined>(undefined);

export const useMenuBarSubmenu = () => {
  const menuBarSubmenu = useContext(MenuBarSubmenuContext);

  if (menuBarSubmenu === undefined) {
    throw new Error("Context not found");
  }

  return menuBarSubmenu;
};

export type MenuBarSubmenuProps = Omit<HTMLAttributes<HTMLDivElement>, "data-expanded" | "data-id">;

export const MenuBarSubmenu = forwardRef<HTMLDivElement, MenuBarSubmenuProps>(
  ({ children, onKeyDownCapture, ...passthru }, ref) => {
    const id = useId();
    const menuBar = useMenuBar();

    const [buttonRef, setButtonRef] = useState<RefObject<HTMLButtonElement>>({ current: null });
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const menuBarSubmenu: MenuBarSubmenuObject = useMemo(
      () => ({
        close: () => {
          setIsExpanded(false);
        },
        getButtonRef: () => buttonRef,
        isExpanded: () => isExpanded,
        open: () => {
          setIsExpanded(true);
        },
        setButtonRef: (ref) => {
          setButtonRef(ref);
        },
      }),
      [buttonRef, isExpanded],
    );

    const handleKeyDownCapture: KeyboardEventHandler<HTMLDivElement> = useCallback(
      (event) => {
        onKeyDownCapture?.(event);

        if (event.key === "Escape") {
          menuBarSubmenu.close();
          menuBarSubmenu.getButtonRef().current?.focus();
        }
      },
      [menuBarSubmenu, onKeyDownCapture],
    );

    useEffect(() => {
      if (menuBarSubmenu.isExpanded()) {
        menuBar.onOpenSubmenu(id);
      }
    }, [id, menuBar, menuBarSubmenu]);

    useEffect(() => {
      menuBar.setSubmenu(id, menuBarSubmenu);
    }, [id, menuBarSubmenu, menuBar]);

    return (
      <MenuBarSubmenuContext.Provider value={menuBarSubmenu}>
        <div
          data-expanded={menuBarSubmenu.isExpanded()}
          data-id={id}
          onKeyDownCapture={handleKeyDownCapture}
          ref={ref}
          {...passthru}
        >
          {children}
        </div>
      </MenuBarSubmenuContext.Provider>
    );
  },
);

MenuBarSubmenu.displayName = "MenuBarSubmenu";
