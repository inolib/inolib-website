import Image from "next/image";

import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

export const Header = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Audit de conformité en accessibilité numérique</HeadingContent>
            <HeadingSubheading>Votre site web ou votre application mobile sont-ils accessibles ?</HeadingSubheading>
          </Heading>

          <div className="flex flex-col gap-4">
            <p>
              L’audit d’accessibilité numérique permet d’évaluer l’accessibilité de vos sites web, applications, ou
              logiciels, en identifiant les obstacles rencontrés par les utilisateurs. Nos experts analysent vos
              supports en s’appuyant sur les référentiels RGAA, WCAG, RAAM, et la norme EN 301 549.
            </p>

            <p>
              Tous nos audits sont réalisés par des consultants expérimentés, et nos services sont disponibles en
              français et en anglais.
            </p>
          </div>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn>
          <Image alt="" className="rounded-3xl" src="/images/photos/stock-photo.png" />
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
