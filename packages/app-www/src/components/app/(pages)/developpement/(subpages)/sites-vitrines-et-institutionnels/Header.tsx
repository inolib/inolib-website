import Image from "next/image";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

import stockPhoto from "#/images/photos/stock-photo.png";

export const Header = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Création et refonte de votre site web</HeadingContent>
            <HeadingSubheading>
              Découvrez nos solutions de sites web sur mesure, pour répondre à vos besoins.
            </HeadingSubheading>
          </Heading>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn>
          <Image alt="" className="rounded-3xl" src={stockPhoto} />
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
