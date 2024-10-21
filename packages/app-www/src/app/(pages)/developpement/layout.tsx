import type { PropsWithChildren } from "react";

import { Contact } from "~/components/app/(pages)";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}

      <Contact />
    </>
  );
};

export default Layout;
