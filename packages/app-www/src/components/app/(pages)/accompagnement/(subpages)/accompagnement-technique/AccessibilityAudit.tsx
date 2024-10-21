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

type AccessibilityAuditProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const AccessibilityAudit = ({ _color }: AccessibilityAuditProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Audit de vos outils numériques</HeadingContent>
      </Heading>

      <p>
        Nous réalisons des audits approfondis pour identifier les problématiques d’accessibilité sur vos outils
        numériques. En nous basant sur les standards RGAA, WCAG et autres normes internationales, nous repérons les
        points bloquants et évaluons la conformité de vos solutions.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Rapport détaillé et recommandations</HeadingContent>
      </Heading>

      <p>
        À l’issue de l’audit, nous vous remettons un rapport exhaustif avec des recommandations concrètes pour corriger
        les problèmes identifiés. Ce document vous guide dans une démarche d’amélioration continue de l’accessibilité.
      </p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Audit d’accessibilité</HeadingContent>
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
