import type { Metadata } from "next";

import { GoFurther } from "~/components/app/(pages)/accompagnement";
import {
  AdditionalServices,
  Header,
  OperationalSupport,
  StrategicSupport,
} from "~/components/app/(pages)/accompagnement/(subpages)/accompagnement-de-projet";

export const metadata: Metadata = {
  title: "Accompagnement de projet | INOLIB",
};

const Page = () => {
  return (
    <>
      <Header />
      <StrategicSupport _color="neutral-50" />
      <OperationalSupport _color="white" />
      <AdditionalServices _color="neutral-50" />
      <GoFurther _color="white" />
    </>
  );
};

export default Page;
