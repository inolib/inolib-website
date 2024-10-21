import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent } from "~/components/heading";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import auroreMauveVoeltzelPhoto from "#/images/photos/team/aurore-mauve-voeltzel.jpg";
import djebrineAlouiPhoto from "#/images/photos/team/djebrine-aloui.jpg";
import matthieuMeignanPhoto from "#/images/photos/team/matthieu-meignan.jpg";
import nadjematiAbdallahPhoto from "#/images/photos/team/nadjemati-abdallah.jpg";

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

type TeamProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const Team = ({ _color }: TeamProps) => {
  const { sectionClassName } = variants({ _color });

  const team = [
    {
      photo: djebrineAlouiPhoto,
      name: "Djebrine ALOUI",
      role: "Dirigeant et fondateur",
      description: "",
    },
    {
      photo: auroreMauveVoeltzelPhoto,
      name: "Aurore-Mauve VOELTZEL",
      role: "Développeuse économique",
      description: "",
    },
    {
      photo: matthieuMeignanPhoto,
      name: "Matthieu MEIGNAN",
      role: "Directeur technique",
      description: "",
    },
    {
      photo: nadjematiAbdallahPhoto,
      name: "Nadjemati ABDALLAH",
      role: "",
      description: "",
    },
    {
      photo: nadjematiAbdallahPhoto,
      name: "Amina HURIC",
      role: "",
      description: "",
    },
    {
      photo: nadjematiAbdallahPhoto,
      name: "Brice MENDEZ",
      role: "Développeur web",
      description: "",
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Notre équipe</HeadingContent>
      </Heading>

      <div className="grid grid-cols-4 gap-16 text-center">
        {team.map((item, index) => (
          <div className="flex h-[22rem] flex-col items-center gap-4 rounded-t-full bg-blue-50 p-4 pt-12" key={index}>
            <Image alt="" className="size-24 rounded-full" src={item.photo} />

            <div className="flex flex-col gap-2">
              <p className="font-bold">{item.name}</p>
              <p className="font-semibold text-blue-700">{item.role}</p>
            </div>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
