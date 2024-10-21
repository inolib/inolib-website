import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import {
  Highlights,
  HighlightsContent,
  HighlightsIllustration,
  HighlightsListItem,
  HighlightsUnorderedList,
} from "~/components/highlights";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import ArrowNarrowRightIcon from "#/images/icons/arrow-narrow-right.svg";
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

type ServicesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Services = ({ _color }: ServicesProps) => {
  const { sectionClassName } = variants({ _color });

  const services = [
    {
      title: "Développement de sites web",
      highlights: [
        {
          icon: <></>,
          title: "Site vitrines",
          description:
            "Améliorez votre visibilité en ligne avec un site vitrine élégant et intuitif. Offrez à vos visiteurs une expérience utilisateur optimale.",
          link: {
            label: "En savoir plus sur le développement de sites vitrines",
            href: "/developpement/sites-vitrines-et-institutionnels",
          },
        },
        {
          icon: <></>,
          title: "Sites institutionnels",
          description:
            "Valorisez vos activités et vos valeurs. Nos sites institutionnels transmettent vos messages clés de manière claire et impactante.",
          link: {
            label: "En savoir plus sur le développement de sites institutionnels",
            href: "/developpement/sites-vitrines-et-institutionnels",
          },
        },
        {
          icon: <></>,
          title: "Solutions e-commerce",
          description:
            "Lancez une boutique en ligne performante avec des fonctionnalités adaptées à vos besoins. Chaque solution est optimisée pour une expérience d’achat fluide et une augmentation des conversions.",
        },
      ],
      illustration: developmentIllustration,
    },
    {
      title: "Développement d’applications mobiles",
      highlights: [
        {
          icon: <></>,
          title: "Applications natives et hybrides",
          description:
            "Créez des applications mobiles sur mesure pour iOS et Android. Nos solutions allient performance et facilité d’utilisation.",
        },
      ],
      illustration: developmentIllustration,
    },
    {
      title: "Développement de solutions SaaS",
      highlights: [
        {
          icon: <></>,
          title: "Logiciels sur mesure",
          description:
            "Optimisez vos processus avec des logiciels SaaS personnalisés, conçus pour soutenir la croissance de votre entreprise.",
        },
      ],
      illustration: developmentIllustration,
    },
    {
      title: "Design et branding",
      highlights: [
        {
          icon: <></>,
          title: "UI/UX et identité visuelle",
          description:
            "Renforcez votre identité visuelle avec des interfaces marquantes. Nous créons des expériences utilisateur intuitives et attractives.",
        },
      ],
      illustration: developmentIllustration,
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos services</HeadingContent>
      </Heading>

      {services.map((item, index) => (
        <Highlights _isReversed={index % 2 === 0} key={index}>
          <HighlightsContent>
            <Heading _alignment="left" _size="2xl">
              <HeadingContent _level={3}>{item.title}</HeadingContent>
            </Heading>

            <HighlightsUnorderedList>
              {item.highlights.map((item, index) => (
                <HighlightsListItem key={index}>
                  <BoxCard>
                    <BoxCardIcon className="my-auto">{item.icon}</BoxCardIcon>

                    <BoxCardContent>
                      <div className="flex flex-col gap-4">
                        <p className="text-xl font-bold">{item.title}</p>
                        <p>{item.description}</p>
                      </div>

                      {item.link === undefined ? undefined : (
                        <Link
                          _border="black"
                          _color="blue-50"
                          _shape="button"
                          aria-label={item.link.label}
                          href={item.link.href}
                        >
                          <span>En savoir plus</span>
                          <ArrowNarrowRightIcon className="stroke-black" />
                        </Link>
                      )}
                    </BoxCardContent>
                  </BoxCard>
                </HighlightsListItem>
              ))}
            </HighlightsUnorderedList>

            <Link _color="blue-900" _shape="button" href="/contact">
              Demander un devis
            </Link>
          </HighlightsContent>

          <HighlightsIllustration>
            <Image alt="" className="h-96" src={item.illustration} />
          </HighlightsIllustration>
        </Highlights>
      ))}
    </Section>
  );
};
