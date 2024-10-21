import Image from "next/image";
import type { VariantProps } from "tailwind-variants";

import { Heading, HeadingContent } from "~/components/heading";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import apsideLogo from "#/images/logos/clients/apside.svg?url";
import bureayVeritasLogo from "#/images/logos/clients/bureau_veritas.svg?url";
import colasLogo from "#/images/logos/clients/colas.svg?url";
import laPosteLogo from "#/images/logos/clients/la_poste.svg?url";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col items-center gap-16 first-of-type:pt-24",
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

type SocialProofProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const SocialProof = ({ _color }: SocialProofProps) => {
  const { sectionClassName } = variants({ _color });

  const clients = [
    <div className="h-[4.5rem] bg-[#0A1E30] p-4" key={0}>
      <Image alt="Apside" className="size-full" src={apsideLogo} />
    </div>,
    <div className="h-36" key={1}>
      <Image alt="Bureau Veritas" className="size-full" src={bureayVeritasLogo} />
    </div>,
    <div className="h-[4.5rem]" key={2}>
      <Image alt="Colas" className="size-full" src={colasLogo} />
    </div>,
    <div className="h-24" key={3}>
      <Image alt="La Poste" className="size-full" src={laPosteLogo} />
    </div>,
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="2xl">
        <HeadingContent _level={2}>Rejoignez nos clients satisfaits</HeadingContent>
      </Heading>

      <ul className="grid grid-cols-2 place-items-center gap-x-16 gap-y-8 lg:grid-cols-4">
        {clients.map((item, index) => (
          <li className="flex items-center" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
};
