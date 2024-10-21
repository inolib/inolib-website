import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BorderCard } from "~/components/card";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { Verbose, VerboseContent, VerboseIllustration } from "~/components/verbose";
import { tv } from "~/helpers";

import auditIllustration from "#/images/illustrations/audit.svg?url";

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

type TailoredApproachProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const TailoredApproach = ({ _color }: TailoredApproachProps) => {
  const { sectionClassName } = variants({ _color });

  const paragraphs = [
    <div className="flex flex-col gap-4" key={0}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Tests en situation réelle</HeadingContent>
      </Heading>

      <p>
        Plongez vos utilisateurs dans des scénarios authentiques. Nous observons leurs interactions avec votre produit
        en conditions réelles, identifiant ainsi les obstacles et comportements qui affectent l’expérience.
      </p>

      <p>Obtenez des insights précis pour des améliorations ciblées.</p>
    </div>,
    <div className="flex flex-col gap-4" key={1}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Évaluation de l’ergonomie et de l’utilisabilité</HeadingContent>
      </Heading>

      <p>
        Détectez les problèmes de navigation et d’interface. Nous analysons les éléments qui nuisent à la fluidité de
        l’expérience et à l’accessibilité, pour maximiser la simplicité d’utilisation.
      </p>

      <p>Rendez votre produit plus intuitif et agréable à utiliser.</p>
    </div>,
    <div className="flex flex-col gap-4" key={2}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Retour d’expérience utilisateur</HeadingContent>
      </Heading>

      <p>
        Recueillez des feedbacks directs et authentiques. À travers des entretiens post-tests, nous collectons les
        impressions et suggestions de vos utilisateurs, pour vous aider à apporter des ajustements.
      </p>

      <p>Améliorez ce qui gêne et renforcez ce qui fonctionne bien.</p>
    </div>,
    <div className="flex flex-col gap-4" key={3}>
      <Heading _alignment="left" _size="2xl">
        <HeadingContent _level={3}>Analyse comportementale</HeadingContent>
      </Heading>

      <p>
        Comprenez les choix et actions de vos utilisateurs. Nous analysons leur manière de naviguer et d’interagir avec
        votre produit, pour optimiser les parcours utilisateurs et rendre chaque étape plus efficace.
      </p>

      <p>Boostez la conversion en améliorant chaque interaction.</p>
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Une approche sur mesure et centrée sur l’accessibilité numérique</HeadingContent>
        <HeadingSubheading>
          Chaque projet est unique, nos tests sont entièrement personnalisés et adaptés à vos objectifs spécifiques.
          Nous tenons compte des besoins variés de vos utilisateurs, de votre contexte, et de vos enjeux business.
        </HeadingSubheading>
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
          <Image alt="" className="h-96" src={auditIllustration} />
        </VerboseIllustration>
      </Verbose>
    </Section>
  );
};
