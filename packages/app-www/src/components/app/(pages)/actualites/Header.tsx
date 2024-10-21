import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Section } from "~/components/section";

export const Header = () => {
  return (
    <Section>
      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn>
          <Heading _alignment="left" _size="4xl">
            <HeadingContent _level={1}>Actualités</HeadingContent>
            <HeadingSubheading>
              Décrypte l’actualité de l’accessibilité numérique, publie des articles techniques (développement, design)
              et partage ses rétrospectives.
            </HeadingSubheading>
          </Heading>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn></TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
