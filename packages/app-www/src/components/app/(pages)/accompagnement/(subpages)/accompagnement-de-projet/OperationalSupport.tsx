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

type OperationalSupportProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const OperationalSupport = ({ _color }: OperationalSupportProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Ateliers collaboratifs</HeadingContent>
      </Heading>

      <p>
        Au niveau opérationnel, nous organisons des ateliers pour identifier les besoins spécifiques en design,
        développement et contenu. Nous définissons un backlog produit évolutif, en priorisant les fonctionnalités selon
        les exigences d’accessibilité et de performance.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Roadmap</HeadingContent>
      </Heading>

      <p>
        La roadmap produit est construite de manière flexible, ajustée à chaque sprint pour répondre aux retours des
        parties prenantes. Nous adoptons une gestion agile des ressources en adaptant les équipes selon les priorités du
        projet.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={2}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Suivi et rétrospective</HeadingContent>
      </Heading>

      <p>
        Le suivi est effectué par sprints, avec des ajustements réguliers basés sur les retours utilisateurs. À la fin
        du projet, nous organisons une rétrospective pour évaluer les performances et optimiser les pratiques futures.
        Le transfert progressif vers l’équipe de maintenance se fait avec une documentation complète et une transition
        fluide.
      </p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Accompagnement opérationnel</HeadingContent>
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
