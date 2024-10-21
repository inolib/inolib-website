import type { Metadata } from "next";

import { EducationalApproach, Header, Qualiopi, TrainingCourses, Why } from "~/components/app/(pages)/inolib-academy";

export const metadata: Metadata = {
  title: "INOLIB Academy | INOLIB",
};

const Page = () => {
  return (
    <>
      <Header />
      <TrainingCourses _color="neutral-50" />
      <EducationalApproach _color="white" />
      <Why _color="neutral-50" />
      <Qualiopi _color="white" />
    </>
  );
};

export default Page;
