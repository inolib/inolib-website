"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { Link } from "~/components/link";
import { cn } from "~/helpers";
import { useRoutes } from "~/hooks";

export type BreadcrumbNavSegmentProps = {
  _href: string;
};

export const BreadcrumbNavSegment = ({ _href }: BreadcrumbNavSegmentProps) => {
  const pathname = usePathname();
  const routes = useRoutes();

  const isCurrentPage = useMemo(() => _href === pathname, [_href, pathname]);

  return (
    <li className={cn("px-2 py-1", { "font-bold": isCurrentPage })}>
      {routes[_href].isActive ? (
        <Link
          _color="transparent"
          _shape="link"
          aria-current={isCurrentPage ? "page" : undefined}
          className="focus-visible:outline-black"
          href={_href}
        >
          {routes[_href].title}
        </Link>
      ) : (
        <span>{routes[_href].title}</span>
      )}
    </li>
  );
};
