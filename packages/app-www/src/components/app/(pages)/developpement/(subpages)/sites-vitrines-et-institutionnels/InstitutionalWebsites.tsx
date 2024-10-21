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

type InstitutionalWebsitesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const InstitutionalWebsites = ({ _color }: InstitutionalWebsitesProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Communiquez vos valeurs et projets</HeadingContent>
      </Heading>

      <p>
        Nos sites institutionnels facilitent la diffusion de vos messages clés, renforcent votre image de marque et
        engagent votre audience avec une expérience utilisateur fluide et intuitive.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Blog</HeadingContent>
      </Heading>

      <p>
        Partagez vos connaissances et engagez votre audience avec du contenu pertinent et régulier. Améliorez votre
        référencement naturel et établissez votre expertise.
      </p>
    </div>,
    <div className="flex flex-col gap-4" key={2}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Portail d’information</HeadingContent>
      </Heading>

      <p>
        Offrez un accès centralisé à des ressources et informations précieuses. Convient aux organisations ayant besoin
        de diffuser des données complexes de ???
      </p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Sites institutionnels</HeadingContent>
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
          <Image alt="" className="h-96" src={developmentIllustration} />
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};
