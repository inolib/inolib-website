import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent } from "~/components/heading";
import { FlexGridList, FlexGridListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import BrowserFramedIcon from "#/images/icons/framed/browser.svg";
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

type CommitmentsProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Commitments = ({ _color }: CommitmentsProps) => {
  const { sectionClassName } = variants({ _color });

  const values = [
    {
      icon: <BrowserFramedIcon className="size-12" />,
      title: "Excellence technologique",
      description: "Offrir des solutions sur mesure, parfaitement adaptées aux besoins uniques de chaque client.",
    },
    {
      icon: <HeartFramedIcon className="size-12" />,
      title: "Accessibilité pour tous",
      description: "Garantir que nos solutions sont accessibles à tous.",
    },
    {
      icon: <MessageSmileCircleFramedIcon className="size-12" />,
      title: "Partage de compétences",
      description:
        "Proposer des formations pour aider les individus et organisations à maîtriser et à intégrer efficacement des pratiques inclusives.",
    },
    {
      icon: <FileCheckFramedIcon className="size-12" />,
      title: "Innovation continue",
      description: "Explorer de nouvelles idées pour créer des solutions qui placent nos clients au premier plan.",
    },
    {
      icon: <GraduationHatFramedIcon className="size-12" />,
      title: "Éthique et responsabilité",
      description: "Réduire notre impact environnemental et promouvoir un usage responsable de la technologie.",
    },
    {
      icon: <FlagFramedIcon className="size-12" />,
      title: "Impact social positif",
      description: "Améliorer la vie des individus et contribuer à un avenir équitable et durable.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Nos engagements</HeadingContent>
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
