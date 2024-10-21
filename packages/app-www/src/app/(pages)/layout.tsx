import type { PropsWithChildren } from "react";

import { BreadcrumbNav } from "~/components/nav";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <BreadcrumbNav />

      {children}
    </>
  );
};

export default Layout;
