import { Link } from "~/components/link";
import { useRoutes } from "~/hooks";

import HomeLineIcon from "#/images/icons/home-line.svg";

export type BreadcrumbNavHomeProps = {
  _href: string;
};

export const BreadcrumbNavHome = ({ _href }: BreadcrumbNavHomeProps) => {
  const routes = useRoutes();

  return (
    <li className="px-2 py-1">
      <Link
        _color="transparent"
        _shape="link"
        className="focus-visible:outline-black"
        href={_href}
        title={routes[_href].title}
      >
        <HomeLineIcon aria-label={routes[_href].title} className="size-5 stroke-black" />
      </Link>
    </li>
  );
};
