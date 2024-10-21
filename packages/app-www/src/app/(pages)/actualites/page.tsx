import type { Metadata } from "next";

import { Blog, Header } from "~/components/app/(pages)/actualites";

export const metadata: Metadata = {
  title: "Actualités | INOLIB",
};

const Page = () => {
  return (
    <>
      <Header />
      <Blog />
    </>
  );
};

export default Page;
