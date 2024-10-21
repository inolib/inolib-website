import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BorderCard } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { Link } from "~/components/link";
import { UnorderedList, UnorderedListItem } from "~/components/list";
import { Section } from "~/components/section";
import { Verbose, VerboseContent, VerboseIllustration } from "~/components/verbose";
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

type InclusiveApproachProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const InclusiveApproach = ({ _color }: InclusiveApproachProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Tests utilisateurs en situation de handicap</HeadingContent>
      </Heading>

      <p>
        Nos tests en situation de handicap assurent que votre produit est réellement accessible à tous. Nous travaillons
        avec des utilisateurs aux profils variés (mobilité réduite, déficience visuelle, auditive, etc.) pour vérifier
        que chaque fonctionnalité est utilisable de manière intuitive. Ces tests garantissent que votre produit respecte
        non seulement la législation en matière d’accessibilité numérique, mais qu’il offre aussi une expérience
        utilisateur optimale, quel que soit le contexte d’utilisation.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Critères de test</HeadingContent>
      </Heading>

      <p>
        En évaluant des critères comme la compatibilité avec les lecteurs d’écran (JAWS, NVDA), la facilité de
        navigation au clavier, et la clarté des éléments interactifs, nous vous aidons à rendre votre interface
        inclusive et performante pour tous les utilisateurs.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={2}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Stratégie de test</HeadingContent>
      </Heading>

      <p>Nous collaborons avec vous pour définir une stratégie de test qui répond à vos enjeux :</p>

      <UnorderedList className="-mt-4 pl-8">
        <UnorderedListItem>
          Plan de test adapté à vos objectifs. Nous organisons des entretiens, des workshop pour mieux répondre à vos
          attentes.
        </UnorderedListItem>
        <UnorderedListItem>Analyse complète de l’accessibilité numérique.</UnorderedListItem>
        <UnorderedListItem>
          Livrables sous forme de rapports détaillés, avec des recommandations concrètes et actionnables.
        </UnorderedListItem>
      </UnorderedList>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Une approche inclusive et flexible</HeadingContent>
        <HeadingSubheading>
          Notre approche flexible nous permet de personnaliser les tests en fonction de vos besoins spécifiques. Nous
          pouvons cibler un groupe d’utilisateurs précis, comme les personnes en situation de handicap, ou un
          échantillon plus large avec des critères variés tels que l’âge ou la profession.
        </HeadingSubheading>
      </Heading>

      <Verbose>
        <VerboseContent>
          {paragraphs.map((item, index) => (
            <BorderCard key={index}>{item}</BorderCard>
          ))}

          <Link _color="blue-900" _shape="button" href="/contact">
            Demander un devis
          </Link>
        </VerboseContent>

        <VerboseIllustration>
          <Image alt="" className="h-96" src={auditIllustration} />
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};
