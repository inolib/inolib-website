import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import FileCheckFramedIcon from "#/images/icons/framed/file-check-02.svg";
import FlagFramedIcon from "#/images/icons/framed/flag-03.svg";
import GraduationHatFramedIcon from "#/images/icons/framed/graduation-hat-02.svg";
import HeartFramedIcon from "#/images/icons/framed/heart.svg";
import MessageSmileCircleFramedIcon from "#/images/icons/framed/message-smile-circle.svg";

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

type ValuesProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Values = ({ _color }: ValuesProps) => {
  const { sectionClassName } = variants({ _color });

  const values = [
    {
      icon: <HeartFramedIcon className="size-12" />,
      title: "Innovation et créativité",
      description: "Rechercher constamment des solutions créatives pour répondre aux défis actuels et futurs.",
    },
    {
      icon: <MessageSmileCircleFramedIcon className="size-12" />,
      title: "Transparence et intégrité",
      description: "Privilégier une communication claire et des actions éthiques.",
    },
    {
      icon: <FileCheckFramedIcon className="size-12" />,
      title: "Fiabilité et confiance",
      description: "Établir des relations solides et durables, favorisant ainsi la confiance et le succès commun.",
    },
    {
      icon: <GraduationHatFramedIcon className="size-12" />,
      title: "Inclusion et diversité",
      description: "Valoriser l’inclusion et la diversité dans tous nos projets, ainsi que dans notre équipe.",
    },
    {
      icon: <FlagFramedIcon className="size-12" />,
      title: "Responsabilité et bienveillance",
      description:
        "Évaluer l’impact de nos choix sur la société et agir avec respect, en faisant preuve d’une réelle considération pour chacun.",
    },
    {
      icon: <FlagFramedIcon className="size-12" />,
      title: "Efficacité et proactivité",
      description: "Anticiper les besoins de nos clients et proposer des solutions innovantes et sur mesure.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos valeurs</HeadingContent>
        <HeadingSubheading>Ces valeurs guident notre travail au quotidien</HeadingSubheading>
      </Heading>

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
