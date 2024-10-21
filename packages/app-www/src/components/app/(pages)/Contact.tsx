import Image from "next/image";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

import contactIllustration from "#/images/illustrations/app/(pages)/contact.svg?url";

export const Contact = () => {
  return (
    <Section>
      <div className="flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-sand-50 p-8">
        <Heading _alignment="center" _size="2xl" className="z-0">
          <HeadingContent _level={2}>Une question, un devis, ou besoin d’échanger avec nous ?</HeadingContent>
          <HeadingSubheading>Contactez-nous dès maintenant pour en discuter.</HeadingSubheading>
        </Heading>

        <Link _color="blue-900" _shape="button" className="z-0" href="/contact">
          Nous contacter
        </Link>

        <Image alt="" className="-mb-32 mt-[-11.4rem] hidden md:block" src={contactIllustration} />
      </div>
    </Section>
  );
};
