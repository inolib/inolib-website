import type { Metadata } from "next";

import { Blog, Contact, Header, ScrollingText, Services, SocialProof, Testimonials } from "~/components/app";

export const metadata: Metadata = {
  title: "Accueil | INOLIB",
  description: "",
};

const Page = () => {
  return (
    <>
      <Header />
      <SocialProof _color="neutral-50" />
      <ScrollingText />
      <Services _color="white" />
      <Testimonials _color="blue-950" />
      <Blog />
      <Contact />
    </>
  );
};

export default Page;
