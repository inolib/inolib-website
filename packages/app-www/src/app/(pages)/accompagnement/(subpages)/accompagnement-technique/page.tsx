import type { Metadata } from "next";

import { GoFurther } from "~/components/app/(pages)/accompagnement";
import {
  AccessibilityAudit,
  Header,
  Monitoring,
  Recommandations,
  Referent,
  TechnicalSupport,
} from "~/components/app/(pages)/accompagnement/(subpages)/accompagnement-technique";

export const metadata: Metadata = {
  title: "Accompagnement technique | INOLIB",
};

const Page = () => {
  return (
    <>
      <Header />
      <AccessibilityAudit _color="neutral-50" />
      <TechnicalSupport _color="white" />
      <Monitoring _color="neutral-50" />
      <Referent _color="white" />
      <Recommandations _color="neutral-50" />
      <GoFurther _color="white" />
    </>
  );
};

export default Page;
