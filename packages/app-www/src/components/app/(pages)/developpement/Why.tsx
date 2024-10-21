import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import FileFramedIcon from "#/images/icons/framed/file-05.svg";
import FileSearchFramedIcon from "#/images/icons/framed/file-search-02.svg";
import SwitchHorizontalFramedIcon from "#/images/icons/framed/switch-horizontal-01.svg";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col items-center gap-24",
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

type WhyProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Why = ({ _color }: WhyProps) => {
  const { sectionClassName } = variants({ _color });

  const why = [
    {
      icon: <SwitchHorizontalFramedIcon className="size-12" />,
      title: "Expertise",
      description: "Une équipe passionnée, à la pointe des dernières technologies.",
    },
    {
      icon: <FileSearchFramedIcon className="size-12" />,
      title: "Agilité",
      description:
        "Nous nous adaptons rapidement à vos besoins, garantissant des résultats concrets et des livraisons rapides.",
    },
    {
      icon: <FileFramedIcon className="size-12" />,
      title: "Engagement",
      description: "Nos solutions sur mesure sont conçues en toute transparence, pour des résultats fiables.",
    },
    {
      icon: <FileFramedIcon className="size-12" />,
      title: "Accessibilité numérique",
      description: "Nos solutions respectent les critères RGAA et WCAG, garantissant une accessibilité à tous.",
    },
    {
      icon: <FileFramedIcon className="size-12" />,
      title: "Éco-conception",
      description: "Nous réduisons l’impact environnemental de nos solutions.",
    },
    {
      icon: <FileFramedIcon className="size-12" />,
      title: "Sécurité",
      description:
        "La protection des données est notre priorité, avec des mesures strictes de sécurité et de confidentialité.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Pourquoi choisir INOLIB ?</HeadingContent>
        <HeadingSubheading>Votre réussite est notre priorité.</HeadingSubheading>
      </Heading>

      <FlexGridList>
        {why.map((item, index) => (
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
