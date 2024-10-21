import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import BrowserFramedIcon from "#/images/icons/framed/browser.svg";
import HeartFramedIcon from "#/images/icons/framed/heart.svg";
import MessageSmileCircleFramedIcon from "#/images/icons/framed/message-smile-circle.svg";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col gap-16",
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

type ResultsProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Results = ({ _color }: ResultsProps) => {
  const { sectionClassName } = variants({ _color });

  const values = [
    {
      icon: <BrowserFramedIcon className="size-12" />,
      title: "Amélioration de l’expérience utilisateur",
      description: "Éliminer les obstacles et proposer une interaction plus fluide.",
    },
    {
      icon: <HeartFramedIcon className="size-12" />,
      title: "Augmentation des conversions",
      description: "Des interfaces optimisées qui favorisent une navigation plus efficace et attractive.",
    },
    {
      icon: <MessageSmileCircleFramedIcon className="size-12" />,
      title: "Réduction des demandes de support",
      description: "En anticipant les problèmes d’utilisabilité, vous limitez les besoins d’assistance.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <div className="flex flex-col items-center gap-8">
        <Heading _alignment="center" _size="4xl">
          <HeadingContent _level={2}>Résultats garantis</HeadingContent>
          <HeadingSubheading>
            Avec INOLIB, vos produits deviennent plus performants et inclusifs grâce à une combinaison unique d’audit
            d’accessibilité et de tests utilisateurs. Cette complémentarité vous garantit une conformité légale tout en
            optimisant l’expérience client.
          </HeadingSubheading>
        </Heading>
      </div>

      <FlexGridList>
        {values.map((item, index) => (
          <FlexGridListItem key={index}>
            {item.icon}

            <p className="text-2xl font-bold">{item.title}</p>
            <p>{item.description}</p>
          </FlexGridListItem>
        ))}
      </FlexGridList>
    </Section>
  );
};
