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
      title: "Méthode équilibrée",
      description: "Une alliance de théorie et de pratique pour une montée en compétences progressive.",
    },
    {
      icon: <FileSearchFramedIcon className="size-12" />,
      title: "Accompagnement personnalisé",
      description:
        "Un suivi pendant et après la formation, avec un suivi cohérent post-formation pour assurer la bonne mise en pratique des acquis.",
    },
    {
      icon: <FileFramedIcon className="size-12" />,
      title: "Formateurs experts",
      description:
        "Nos formateurs sont des experts reconnus dans leurs domaines, garantissant un enseignement de qualité.",
    },
    {
      icon: <FileFramedIcon className="size-12" />,
      title: "Expertise en accessibilité numérique",
      description: "Des formations spécialisées et adaptées aux exigences actuelles des entreprises.",
    },
    {
      icon: <FileFramedIcon className="size-12" />,
      title: "Certification Qualiopi",
      description: "Des formations de qualité reconnue par un organisme de certification indépendant.",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Pourquoi choisir INOLIB Academy ?</HeadingContent>
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
