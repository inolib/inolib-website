import type { Metadata } from "next";

import { GoFurther } from "~/components/app/(pages)/audit/(subpages)";
import {
  FAQ,
  Header,
  InclusiveApproach,
  Results,
  TailoredApproach,
} from "~/components/app/(pages)/audit/(subpages)/tests-utilisateurs";

export const metadata: Metadata = {
  title: "Tests utilisateurs | INOLIB",
};

const Page = () => {
  return (
    <>
      <Header />
      <TailoredApproach _color="neutral-50" />
      <InclusiveApproach _color="white" />
      <Results _color="neutral-50" />
      <GoFurther _color="white" />
      <FAQ _color="neutral-50" />
    </>
  );
};

export default Page;
