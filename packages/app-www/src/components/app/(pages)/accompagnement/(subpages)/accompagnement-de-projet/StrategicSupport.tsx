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

type StrategicSupportProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const StrategicSupport = ({ _color }: StrategicSupportProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Ateliers collaboratifs</HeadingContent>
      </Heading>

      <p>
        INOLIB propose des ateliers collaboratifs pour définir vos objectifs fonctionnels et techniques, tout en
        intégrant les normes d’accessibilité. Nous vous fournissons des outils d’aide à la décision afin de prioriser
        les grandes orientations de votre transformation numérique.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Audits des logiciels</HeadingContent>
      </Heading>

      <p>
        Nous réalisons également des audits des logiciels utilisés et recommandons des solutions adaptées à vos futurs
        projets. Grâce à une cartographie des parties prenantes, nous identifions les responsables clés au sein de votre
        organisation pour assurer une gestion claire et une gouvernance efficace.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={2}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Sensibilisation et formation des acteurs</HeadingContent>
      </Heading>

      <p>
        L’accessibilité numérique est un enjeu collectif, nous intégrons la sensibilitation et la formation au cœur de
        notre accompagnement stratégique. Nos ateliers sur mesure permettent à vos équipes de monter en compétences dans
        l’accessibilité. En renforçant les compétences internes, nous vous aidons à garantir une continuité dans la mise
        en œuvre des bonnes pratiques, assurant ainsi la réussite durable de vos projets numériques.
      </p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Accompagnement stratégique</HeadingContent>
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
