"use client";

import { usePathname } from "next/navigation";
import { Fragment } from "react";

import { BreadcrumbNavHome } from "./BreadcrumbNavHome";
import { BreadcrumbNavSegment } from "./BreadcrumbNavSegment";
import { BreadcrumbNavSeparator } from "./BreadcrumbNavSeparator";

export const BreadcrumbNav = () => {
  const pathname = usePathname();

  return (
    <nav aria-label="Fil d’Ariane" className="px-[5dvw] py-24 pb-4 text-sm 2xl:px-[10dvw]">
      <ol className="flex w-fit items-center rounded-full bg-blue-50 px-1">
        {(() => {
          const segments = pathname.split("/");

          return segments.map((_, index) => {
            const path = `${segments.toSpliced(index + 1, segments.length - index - 1).join("/")}/`.slice(0, -1);
            const href = path === "" ? "/" : path;

            if (href === "/") {
              return <BreadcrumbNavHome _href={href} key={index} />;
            }

            if (href === pathname) {
              return (
                <Fragment key={index}>
                  <BreadcrumbNavSeparator />
                  <BreadcrumbNavSegment _href={href} />
                </Fragment>
              );
            }

            return (
              <Fragment key={index}>
                <BreadcrumbNavSeparator />
                <BreadcrumbNavSegment _href={href} />
              </Fragment>
            );
          });
        })()}
      </ol>
    </nav>
  );
};
