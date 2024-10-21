import type { Metadata } from "next";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

export const metadata: Metadata = {
  title: "Rendez-vous | INOLIB",
};

const Page = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Rendez-vous</HeadingContent>
            <HeadingSubheading>Nous vous rencontrons pour discuter de vos projets.</HeadingSubheading>
          </Heading>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn></TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>

      <iframe
        className="h-[43.125rem] w-full"
        src="https://meetings-eu1.hubspot.com/djeberine?embed=true"
        title="Calendrier"
        allowFullScreen
      />
    </Section>
  );
};

export default Page;
