import type { ReactNode } from "react";

import FileCheckIcon from "#/images/icons/file-check-02.svg";
import UserCheckIcon from "#/images/icons/user-check-01.svg";

export type MenuLink = {
  label: string;
  href: string;
  submenu?: never;
};

export type MenuSubmenu = {
  label: string;
  submenu: Array<
    | {
        icon: ReactNode;
        label: string;
        href: string;
        description?: never;
      }
    | {
        label: string;
        description: string;
        href: string;
        icon?: never;
      }
  >;
  href?: never;
};

export type Menu = Array<MenuLink | MenuSubmenu>;

export const useMenu = (): Menu => [
  {
    label: "Audit",
    submenu: [
      // {
      //   label: "Accueil de l’audit",
      //   description: "Découvrez nos offres d’audit",
      //   href: "/audit",
      // },
      {
        icon: <FileCheckIcon className="size-6 shrink-0 stroke-blue-600" />,
        label: "Audit de conformité",
        href: "/audit/audit-de-conformite",
      },
      {
        icon: <UserCheckIcon className="size-6 shrink-0 stroke-blue-600" />,
        label: "Tests utilisateurs",
        href: "/audit/tests-utilisateurs",
      },
    ],
  },
  {
    label: "Accompagnement",
    submenu: [
      // {
      //   label: "Accueil de l’accompagnement",
      //   description: "Découvrez nos offres d’accompagnement",
      //   href: "/accompagnement",
      // },
      {
        icon: <FileCheckIcon className="size-6 shrink-0 stroke-blue-600" />,
        label: "Accompagnement de projet",
        href: "/accompagnement/accompagnement-de-projet",
      },
      {
        icon: <UserCheckIcon className="size-6 shrink-0 stroke-blue-600" />,
        label: "Accompagnement technique",
        href: "/accompagnement/accompagnement-technique",
      },
    ],
  },
  {
    label: "Développement",
    submenu: [
      {
        label: "Développement web et mobile",
        description: "Découvrez nos offres de développement",
        href: "/developpement",
      },
      {
        icon: <UserCheckIcon className="size-6 shrink-0 stroke-blue-600" />,
        label: "Sites vitrines et institutionnels",
        href: "/developpement/sites-vitrines-et-institutionnels",
      },
    ],
  },
  {
    label: "INOLIB Academy",
    href: "/inolib-academy",
    // submenu: [
    //   {
    //     label: "Accueil des formations",
    //     description: "Découvrez nos formations",
    //     href: "/formations",
    //   },
    // ],
  },
  {
    label: "À propos",
    href: "/a-propos",
  },
  {
    label: "Actualités",
    href: "/actualites",
  },
];
