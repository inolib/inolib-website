import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BorderCard } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import { Section } from "~/components/section";
import { Verbose, VerboseContent, VerboseIllustration } from "~/components/verbose";
import { tv } from "~/helpers";

import educationIllustration from "#/images/illustrations/education.svg?url";

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

type EducationalApproachProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const EducationalApproach = ({ _color }: EducationalApproachProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Formations équilibrées</HeadingContent>
      </Heading>

      <p>
        Nos formations reposent sur une approche équilibrée, combinant théorie et pratique, afin de garantir une
        acquisition efficace des compétences. Chaque formation est accompagnée d’un tutorat personnalisé et d’un suivi
        cohérent post-formation, pour maximiser la mise en pratique dans votre quotidien professionnel. Nos formateurs,
        experts dans leurs domaines, assurent un enseignement de haut niveau.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Formations flexibles et accessibles</HeadingContent>
      </Heading>

      <p>
        Nous proposons des formations en présentiel ou à distance, adaptées aux contraintes de vos équipes. Chaque
        parcours est modulable, vous permettant d’évoluer à votre rythme.
      </p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Notre approche pédagogique</HeadingContent>
      </Heading>

      <Verbose _isReversed>
        <VerboseContent>
          {paragraphs.map((item, index) => (
            <BorderCard key={index}>{item}</BorderCard>
          ))}
        </VerboseContent>

        <VerboseIllustration>
          <Image alt="" className="h-96" src={educationIllustration} />
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};
