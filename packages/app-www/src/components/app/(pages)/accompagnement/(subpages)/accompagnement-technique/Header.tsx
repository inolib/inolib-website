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
            <HeadingContent _level={1}>Accompagnement technique pour l’accessibilité numérique</HeadingContent>
          </Heading>

          <p>
            INOLIB vous accompagne techniquement vers l’accessibilité numérique de vos outils. Notre expertise vous aide
            à identifier et résoudre les problèmes d’accessibilité.
          </p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn>
          <Image alt="" className="rounded-3xl" src="/images/photos/stock-photo.png" />
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
