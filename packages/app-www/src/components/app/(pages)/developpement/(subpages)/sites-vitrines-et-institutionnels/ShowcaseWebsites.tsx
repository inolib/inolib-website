import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BorderCard } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { Verbose, VerboseContent, VerboseIllustration } from "~/components/verbose";
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

type ShowcaseWebsitesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const ShowcaseWebsites = ({ _color }: ShowcaseWebsitesProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Attirez et fidélisez votre audience</HeadingContent>
      </Heading>

      <p>
        Renforcez votre présence en ligne avec des sites vitrines conçus pour générer des leads de qualité. Nos designs
        élégants, optimisés pour le référencement et l’expérience utilisateur, captent l’attention et reflètent
        parfaitement l’identité de votre entreprise. Transformez vos visiteurs en clients et améliorez votre notoriété.
      </p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Sites vitrines</HeadingContent>
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
          <Image alt="" className="h-96" src={developmentIllustration} />
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};
