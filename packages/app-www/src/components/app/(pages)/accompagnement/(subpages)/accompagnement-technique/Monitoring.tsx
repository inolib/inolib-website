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

type MonitoringProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Monitoring = ({ _color }: MonitoringProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Audits réguliers</HeadingContent>
      </Heading>

      <p>
        Pour garantir une conformité pérenne, nous réalisons des audits réguliers de vos outils numériques. Ces
        vérifications permettent de détecter et d’éliminer toute nouvelle barrière à l’accessibilité.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Rapports de suivi</HeadingContent>
      </Heading>

      <p>
        Nous vous fournissons des rapports de suivi détaillés avec des recommandations précises pour maintenir et
        améliorer le niveau d’accessibilité de vos solutions.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Surveillance en temps réel</HeadingContent>
      </Heading>

      <p>
        Nous mettons en place des systèmes de surveillance en temps réel pour suivre l’accessibilité de vos outils
        numériques, vous permettant de réagir immédiatement en cas de problème.
      </p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Suivi et maintien de l’accessibilité</HeadingContent>
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
