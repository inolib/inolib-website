import Image from "next/image";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

import contactIllustration from "#/images/illustrations/app/contact.svg?url";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-center gap-24 overflow-hidden bg-sand-50 md:pb-0">
      <Heading _alignment="center" _size="4xl" className="z-0">
        <HeadingContent _level={2}>Une question, un devis, ou besoin d’échanger avec nous ?</HeadingContent>
        <HeadingSubheading>Contactez-nous dès maintenant pour en discuter.</HeadingSubheading>
      </Heading>

      <Link _color="blue-900" _shape="button" className="z-0" href="/contact">
        Nous contacter
      </Link>

      <Image alt="" className="-mb-64 mt-[-20.5rem] hidden md:block" src={contactIllustration} />
    </Section>
  );
};
