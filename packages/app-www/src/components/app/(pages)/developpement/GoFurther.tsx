import type { VariantProps } from "tailwind-variants";

import { BoxCard, BoxCardContent, BoxCardIcon } from "~/components/card";
import { Heading, HeadingContent } from "~/components/heading";
import { TwoColumnsFlexLayout, TwoColumnsFlexLayoutColumn } from "~/components/layout";
import { Link } from "~/components/link";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

import ArrowNarrowRightIcon from "#/images/icons/arrow-narrow-right.svg";

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

type GoFurtherProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const GoFurther = ({ _color }: GoFurtherProps) => {
  const { sectionClassName } = variants({ _color });

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Pour aller plus loin</HeadingContent>
      </Heading>

      <TwoColumnsFlexLayout>
        <TwoColumnsFlexLayoutColumn>
          <BoxCard className="h-full">
            <BoxCardIcon></BoxCardIcon>

            <BoxCardContent className="justify-between">
              <div className="flex flex-col gap-4">
                <Heading _alignment="left" _size="2xl">
                  <HeadingContent _level={3}>Audit de conformité</HeadingContent>
                </Heading>

                <p>Nous évaluons votre niveau de conformité aux référentiels en vigueur (RGAA, WCAG).</p>
              </div>

              <Link
                _border="black"
                _color="blue-50"
                _shape="button"
                aria-label="En savoir plus sur l’audit de conformité"
                href="/audit/audit-de-conformite"
              >
                <span>En savoir plus</span>
                <ArrowNarrowRightIcon className="stroke-black" />
              </Link>
            </BoxCardContent>
          </BoxCard>
        </TwoColumnsFlexLayoutColumn>

        <TwoColumnsFlexLayoutColumn>
          <BoxCard className="h-full">
            <BoxCardIcon></BoxCardIcon>

            <BoxCardContent className="justify-between">
              <div className="flex flex-col gap-4">
                <Heading _alignment="left" _size="2xl">
                  <HeadingContent _level={3}>Accompagnement</HeadingContent>
                </Heading>

                <p>Nous vous accompagnons dans votre démarche vers l’accessibilité numérique.</p>
              </div>

              <Link
                _border="black"
                _color="blue-50"
                _shape="button"
                aria-label="En savoir plus sur l’accompagnement de projet"
                href="/accompagnement/accompagnement-de-projet"
              >
                <span>En savoir plus</span>
                <ArrowNarrowRightIcon className="stroke-black" />
              </Link>
            </BoxCardContent>
          </BoxCard>
        </TwoColumnsFlexLayoutColumn>
      </TwoColumnsFlexLayout>
    </Section>
  );
};
