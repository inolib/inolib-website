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

type AdditionalServicesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const AdditionalServices = ({ _color }: AdditionalServicesProps) => {
  const { sectionClassName } = variants({ _color });

  return (
    <Section className={sectionClassName()}>
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Sélection des prestataires</HeadingContent>
          </Heading>

          <p>
            INOLIB vous assiste dans la gestion des appels d’offres et la sélection des prestataires techniques, en
            s’assurant qu’ils respectent les exigences du projet, notamment en matière d’accessibilité. Une grille
            d’évaluation est mise en place pour choisir les prestataires selon des critères de qualité, coût et délais.
          </p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-4">
          <Heading _alignment="left" _size="2xl">
            <HeadingContent _level={2}>Assurance qualité et conformité</HeadingContent>
          </Heading>

          <p>
            Tout au long du projet, nous réalisons des points de contrôle pour évaluer la conformité aux normes
            d’accessibilité RGAA et WCAG. Des tests exhaustifs sont effectués pour valider la qualité des livrables.
          </p>

          <p>
            Enfin, nous adoptons une gestion proactive des risques en anticipant les obstacles et en proposant des plans
            de contingence pour limiter leur impact sur le projet.
          </p>
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
