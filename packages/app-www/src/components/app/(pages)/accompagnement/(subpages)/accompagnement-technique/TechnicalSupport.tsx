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

type TechnicalSupportProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const TechnicalSupport = ({ _color }: TechnicalSupportProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Accompagnement personnalisé</HeadingContent>
      </Heading>

      <p>
        Nos experts vous assistent dans la correction des problèmes d’accessibilité identifiés. Nous collaborons
        étroitement avec vos équipes de développement pour implémenter les solutions adaptées, en tenant compte de vos
        contraintes techniques.
      </p>

      <p>
        Si vous avez des équipes de développement internes, nous pouvons vous accompagner en suivant les corrections
        qu’elles mettent en œuvre. Toutefois, si nécessaire, nos développeurs peuvent également intervenir directement
        dans votre code, à condition que nous maîtrisions la technologie utilisée. De plus, nous pouvons intervenir via
        votre outil de gestion de tickets pour suivre, gérer et corriger les problèmes identifiés.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Support technique continu</HeadingContent>
      </Heading>

      <p>
        Nous offrons un support technique continu pour répondre à vos questions et vous accompagner dans l’application
        des meilleures pratiques en matière d’accessibilité. Nos experts sont à votre disposition pour garantir une mise
        en œuvre efficace des correctifs.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Intégration fluide des solutions</HeadingContent>
      </Heading>

      <p>
        Nous veillons à ce que les solutions correctives soient intégrées de manière fluide et que les modifications
        apportées fonctionnent conformément aux attentes.
      </p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Assistance technique et correction</HeadingContent>
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
          <Image alt="" className="h-96" src={supportIllustration} />
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};
