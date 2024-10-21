import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BorderCard } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { Verbose, VerboseContent, VerboseIllustration } from "~/components/verbose";
import { tv } from "~/helpers";

import supportIllustration from "#/images/illustrations/support.svg?url";

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

type RecommandationsProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Recommandations = ({ _color }: RecommandationsProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Stratégie personnalisée d’accessibilité</HeadingContent>
      </Heading>

      <p>
        Nous développons des stratégies sur mesure pour intégrer l’accessibilité au sein de vos processus de
        développement, en tenant compte de vos besoins spécifiques et de vos objectifs.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Recommandations techniques</HeadingContent>
      </Heading>

      <p>
        Nos recommandations couvrent tous les aspects techniques de la conception et du développement de vos outils
        numériques, afin d’en améliorer l’accessibilité.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Documentation technique</HeadingContent>
      </Heading>

      <p>
        Nous produisons des guides techniques et des documents pratiques pour accompagner vos équipes dans l’adoption et
        l’application des meilleures pratiques en accessibilité. Ces supports sont conçus pour être clairs, pratiques et
        directement exploitables.
      </p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Recommandations et conseils techniques</HeadingContent>
      </Heading>

      <Verbose _isReversed>
        <VerboseContent>
          {paragraphs.map((item, index) => (
            <BorderCard key={index}>{item}</BorderCard>
          ))}

          <Link _color="blue-900" _shape="button" href="/contact">
            Demander un devis
          </Link>
        </VerboseContent>

        <VerboseIllustration>
          <Image alt="" className="h-96" src={supportIllustration} />
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};
