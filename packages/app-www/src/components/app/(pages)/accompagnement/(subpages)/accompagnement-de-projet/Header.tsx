import Image from "next/image";

import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

export const Header = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Accompagnement de projet et expertise en accessibilité numérique</HeadingContent>
          </Heading>

          <p>
            INOLIB vous accompagne dans vos projets numériques, en intégrant l’accessibilité à chaque étape. Notre
            expertise en gestion de projet et en accessibilité numérique vous apporte des solutions performantes,
            adaptées aux besoins de vos équipes de projets, design, développement et éditoriales.
          </p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn>
          <Image alt="" className="rounded-3xl" src="/images/photos/stock-photo.png" />
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
