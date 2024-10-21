import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import {
  Highlights,
  HighlightsContent,
  HighlightsIllustration,
  HighlightsListItem,
  HighlightsOrderedList,
} from "~/components/highlights";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import developmentIllustration from "#/images/illustrations/development.svg?url";

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

type StepsProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Steps = ({ _color }: StepsProps) => {
  const { sectionClassName } = variants({ _color });

  const highlights = [
    {
      icon: <></>,
      title: "1. Découverte",
      description: "Analyse de vos besoins et définition de vos objectifs.",
    },
    {
      icon: <></>,
      title: "2. Stratégie",
      description: "Élaboration d’une stratégie de contenu et d’un plan de site.",
    },
    {
      icon: <></>,
      title: "3. Design",
      description: "Création d’un design sur mesure, reflet de votre identité.",
    },
    {
      icon: <></>,
      title: "4. Développement",
      description: "Intégration des fonctionnalités et développement technique.",
    },
    {
      icon: <></>,
      title: "5. Tests et validation",
      description: "Vérification de la performance, de l'accessibilité, et de la sécurité.",
    },
    {
      icon: <></>,
      title: "6. Lancement",
      description: "Mise en ligne et formation à l’utilisation du site.",
    },
    {
      icon: <></>,
      title: "7. Suivi et optimisation",
      description: "Support continu et améliorations régulières.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Les étapes de la création</HeadingContent>
        <HeadingSubheading>
          Avec une équipe pluridisciplinaire d’experts (business analyst, concepteurs UI/UX, développeurs experts en
          accessiblité numérique), nous vous accompagnons à chaque étape de votre projet pour créer une solution
          parfaitement adaptée à vos besoins.
        </HeadingSubheading>
      </Heading>

      <Highlights _isReversed>
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
          <Image alt="" className="h-96" src={developmentIllustration} />
        </HighlightsIllustration>
      </Highlights>
    </Section>
  );
};
