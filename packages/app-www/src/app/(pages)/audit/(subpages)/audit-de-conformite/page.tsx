import type { Metadata } from "next";

import { GoFurther } from "~/components/app/(pages)/audit/(subpages)";
import { FAQ, Header, Methodology, Services } from "~/components/app/(pages)/audit/(subpages)/audit-de-conformite";

export const metadata: Metadata = {
  title: "Audit de conformité | INOLIB",
};

const Page = () => {
  return (
    <>
      <Header />
      <Services _color="neutral-50" />
      <Methodology _color="white" />
      <GoFurther _color="neutral-50" />
      <FAQ _color="white" />
    </>
  );
};

export default Page;
