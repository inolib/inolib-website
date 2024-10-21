import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

export const Header = () => {
  return (
    <Section className="flex flex-col gap-24">
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn className="flex flex-col gap-16">
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>INOLIB, de l’idée à la réalisation pour un numérique accessible</HeadingContent>
          </Heading>

          <p>
            Chez INOLIB, nous sommes convaincus que l’accessibilité numérique ne doit pas être une option, mais une
            nécessité absolue. Chaque jour, nous aidons les entreprises à créer des solutions numériques adaptées aux
            besoins de chacun pour assurer une intégration de tous dans l’ère numérique.
          </p>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn></TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
