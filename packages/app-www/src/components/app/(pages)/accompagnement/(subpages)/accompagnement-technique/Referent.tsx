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

type ReferentProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Referent = ({ _color }: ReferentProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Expertise dédiée et accompagnement</HeadingContent>
      </Heading>

      <p>
        INOLIB vous propose un référent accessibilité externalisé, un expert dédié pour vous accompagner tout au long de
        l’année. Ce référent sera votre interlocuteur privilégié pour toutes les questions liées à l’accessibilité de
        vos outils numériques.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Suivi personnalisé et conseils</HeadingContent>
      </Heading>

      <p>
        Votre référent surveille de près vos outils numériques, effectue des audits réguliers et propose des
        améliorations continues pour anticiper les problèmes d’accessibilité.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Formation continue</HeadingContent>
      </Heading>

      <p>
        Nous assurons la formation de vos équipes pour qu’elles maintiennent un haut niveau de compétence en matière
        d’accessibilité numérique.
      </p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Référent en accessibilité externalisé</HeadingContent>
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
