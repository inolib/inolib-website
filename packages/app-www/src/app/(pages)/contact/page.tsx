import type { Metadata } from "next";

import { Address, ContactForm } from "~/components/app/(pages)/contact";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";

export const metadata: Metadata = {
  title: "Contact | INOLIB",
};

const Page = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Contact</HeadingContent>
          </Heading>

          <p>
            Vous pouvez nous soumettre des suggestions, des remarques, ou des demandes de devis en utilisant notre
            formulaire ou nos coordonnées.
          </p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn></TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>

      <div className="flex">
        <div className="flex basis-1/4 flex-col gap-8">
          <Address />

          <Link _color="blue-900" _shape="button" className="self-center" href="/contact/rendez-vous">
            Prendre rendez-vous
          </Link>
        </div>

        <div className="basis-3/4 pl-32">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Page;
