import type { Metadata } from "next";

import { Approach, Header, Services, Why } from "~/components/app/(pages)/developpement";

export const metadata: Metadata = {
  title: "Développement web et mobile | INOLIB",
};

const Page = () => {
  return (
    <>
      <Header />
      <Services _color="neutral-50" />
      <Approach _color="white" />
      <Why _color="neutral-50" />
    </>
  );
};

export default Page;
