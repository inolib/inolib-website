import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col gap-24",
  },
  variants: {
    _color: {
      white: {
        sectionClassName: "bg-white",
      },
      "neutral-50": {
        sectionClassName: "bg-neutral-50",
      },
    },
  },
});

type Variants = VariantProps<typeof variants>;

type MissionAndApproachProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const MissionAndApproach = ({ _color }: MissionAndApproachProps) => {
  const { sectionClassName } = variants({ _color });

  return (
    <Section className={sectionClassName()}>
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Notre mission</HeadingContent>
          </Heading>

          <p>
            INOLIB transforme vos projets numériques en solutions accessibles à tous. Notre mission est de faire de
            chaque environnement numérique un espace inclusif, optimisé et performant. Nous nous assurons que vos outils
            numériques répondent aux attentes de tous les utilisateurs, tout en garantissant la qualité du service.
          </p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Notre approche</HeadingContent>
          </Heading>

          <p>
            Que ce soit pour auditer vos systèmes, développer des plateformes web et mobiles sur mesure, ou former vos
            équipes aux bonnes pratiques, nous sommes présents à chaque étape de vos projets. Ensemble, bâtissons un
            monde numérique plus inclusif et éthique.
          </p>
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
