import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import {
  Highlights,
  HighlightsContent,
  HighlightsIllustration,
  HighlightsListItem,
  HighlightsUnorderedList,
} from "~/components/highlights";
import { Link } from "~/components/link";
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

type ServicesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Services = ({ _color }: ServicesProps) => {
  const { sectionClassName } = variants({ _color });

  const services = [
    {
      title: "Audit de certification",
      subtitle: "Un diagnostic pour identifier les faiblesses d’accessibilité de votre interface.",
      highlights: [
        {
          icon: <></>,
          title: "Objectif",
          description: "Évaluer le niveau d’accessibilité de votre site web ou application mobile.",
        },
        {
          icon: <></>,
          title: "Livrables",
          description: "Grille d’analyse comprenant les non-conformités relevées en fonction du référentiel utilisé.",
        },
        {
          icon: <></>,
          title: "Avantages",
          description:
            "Comprenez rapidement votre niveau d’accessibilité. Idéal pour les sites en attente de refonte ou avant un audit approfondi.",
        },
      ],
      illustration: auditIllustration,
    },
    {
      title: "Audit de conformité détaillé",
      subtitle: "Une analyse détaillée couvrant un échantillon représentatif de vos pages ou fonctionnalités.",
      highlights: [
        {
          icon: <></>,
          title: "Objectif",
          description: "Donner une vision claire des non-conformités et apporter des recommandations sur mesure.",
        },
        {
          icon: <></>,
          title: "Livrables",
          description:
            "Un rapport incluant des recommandations fonctionnelles, techniques, graphiques, et éditoriales. Les recommandations sont priorisées en fonction de leur impact sur les utilisateurs.",
        },
        {
          icon: <></>,
          title: "Avantages",
          description:
            "Facilitez la résolution des problèmes d’accessibilité avec des recommandations claires, incluant une synthèse pour les non-techniciens.",
        },
      ],
      illustration: auditIllustration,
    },
    {
      title: "Audit de contrôle",
      subtitle: "À la suite d’un premier audit et des corrections des non-conformités.",
      highlights: [
        {
          icon: <></>,
          title: "Objectif",
          description:
            "Cet audit de contrôle permet de valider les corrections et de mettre à jour le taux de conformité ainsi que la déclaration d’accessibilité.",
        },
        {
          icon: <></>,
          title: "Livrables",
          description: "Mise à jour de la déclaration légale d’accessibilité.",
        },
        {
          icon: <></>,
          title: "Avantages",
          description: "Mettre à jour le taux de conformité ainsi que la déclaration d’accessibilité.",
        },
      ],
      illustration: auditIllustration,
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos trois offres d’audit</HeadingContent>
      </Heading>

      {services.map((item, index) => (
        <Highlights _isReversed={index % 2 === 0} key={index}>
          <HighlightsContent>
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={3}>{item.title}</HeadingContent>
              <HeadingSubheading>{item.subtitle}</HeadingSubheading>
            </Heading>

            <HighlightsUnorderedList>
              {item.highlights.map((item, index) => (
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
            </HighlightsUnorderedList>

            <Link _color="blue-900" _shape="button" href="/contact">
              Demander un devis
            </Link>
          </HighlightsContent>

          <HighlightsIllustration>
            <Image alt="" className="h-96" src={item.illustration} />
          </HighlightsIllustration>
        </Highlights>
      ))}
    </Section>
  );
};
