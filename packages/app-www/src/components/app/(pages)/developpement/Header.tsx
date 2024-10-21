import Image from "next/image";

import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

export const Header = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Votre partenaire en développement web et mobile</HeadingContent>
          </Heading>

          <p>
            Chez INOLIB, nous transformons vos idées en solutions numériques éthiques et sur mesure. Notre approche
            agile, centrée sur la création de valeur et l’atteinte de vos objectifs, place l’humain au cœur de chaque
            projet. Cette proximité, combinée à une compréhension profonde de vos besoins, garantit des solutions
            accessibles, performantes et modernes. Notre équipe pluridisciplinaire (chefs de projet, designers UI/UX,
            développeurs, testeurs) vous accompagne à chaque étape.
          </p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn>
          <Image alt="" className="rounded-3xl" src="/images/photos/stock-photo.png" />
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
