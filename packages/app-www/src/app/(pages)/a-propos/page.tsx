import type { Metadata } from "next";

import { Commitments, Header, Jobs, MissionAndApproach, Team, Values } from "~/components/app/(pages)/a-propos";

export const metadata: Metadata = {
  title: "À propos | INOLIB",
};

const Page = () => {
  return (
    <>
      <Header />
      <MissionAndApproach _color="neutral-50" />
      <Commitments _color="white" />
      <Values _color="neutral-50" />
      <Team _color="white" />
      <Jobs />
    </>
  );
};

export default Page;
