import type { Metadata } from "next";

import { GoFurther } from "~/components/app/(pages)/developpement";
import {
  Header,
  InstitutionalWebsites,
  ShowcaseWebsites,
  Steps,
} from "~/components/app/(pages)/developpement/(subpages)/sites-vitrines-et-institutionnels";

export const metadata: Metadata = {
  title: "Développement de sites vitrines et institutionnels | INOLB",
};

const Page = () => {
  return (
    <>
      <Header />
      <ShowcaseWebsites _color="neutral-50" />
      <InstitutionalWebsites _color="white" />
      <Steps _color="neutral-50" />
      <GoFurther _color="white" />
    </>
  );
};

export default Page;
