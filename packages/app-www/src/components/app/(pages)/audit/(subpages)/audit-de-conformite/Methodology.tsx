import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import {
  Highlights,
  HighlightsContent,
  HighlightsIllustration,
  HighlightsListItem,
  HighlightsOrderedList,
} from "~/components/highlights";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import auditIllustration from "#/images/illustrations/audit.svg?url";

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

type MethodologyProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Methodology = ({ _color }: MethodologyProps) => {
  const { sectionClassName } = variants({ _color });

  const highlights = [
    {
      icon: <></>,
      title: "1. Co-construction",
      description: "Sélection d’un échantillon représentatif avec vous.",
    },
    {
      icon: <></>,
      title: "2. Investigation",
      description: "Analyse de l’échantillon au regard du référentiel choisi.",
    },
    {
      icon: <></>,
      title: "3. Synthèse",
      description: "Rédaction d’un rapport détaillé avec recommandations.",
    },
    {
      icon: <></>,
      title: "4. Échange",
      description:
        "Restitution des résultats en visioconférence, avec explication des non-conformités, des solutions, et des priorités d’action.",
    },
    {
      icon: <></>,
      title: "5. Livraison",
      description: "Grille technique, rapport détaillé, déclaration d’accessibilité.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Notre méthodologie</HeadingContent>
      </Heading>

      <Highlights>
        <HighlightsContent>
          <HighlightsOrderedList>
            {highlights.map((item, index) => (
              <HighlightsListItem key={index}>
                <BoxCard>
                  <BoxCardIcon className="my-auto">{item.icon}</BoxCardIcon>

                  <BoxCardContent className="gap-4">
                    <p className="text-xl font-bold">{item.title}</p>
                    <p>{item.description}</p>
                  </BoxCardContent>
                </BoxCard>
              </HighlightsListItem>
            ))}
          </HighlightsOrderedList>
        </HighlightsContent>

        <HighlightsIllustration>
          <Image alt="" className="h-96" src={auditIllustration} />
        </HighlightsIllustration>
      </Highlights>
    </Section>
  );
};
