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
            <HeadingContent _level={1}>Tests utilisateurs</HeadingContent>
          </Heading>

          <div className="flex flex-col gap-4">
            <p>
              L’audit d’accessibilité numérique vous permet de vous conformer à la législation, avec les tests
              utilisateurs vous comprenez vos utilisateurs en profondeur et optimisez l’expérience qu’ils vivent avec
              votre produit.
            </p>

            <p>
              Chez INOLIB, nous plaçons vos utilisateurs au cœur de notre démarche. Nos experts UX identifient les
              points de friction, optimisent les parcours utilisateurs et améliorent l’utilisabilité ainsi que
              l’ergonomie de vos interfaces. Vous obtenez des résultats concrets, qui vous permettent de créer des
              solutions répondant réellement aux besoins de vos utilisateurs.
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
