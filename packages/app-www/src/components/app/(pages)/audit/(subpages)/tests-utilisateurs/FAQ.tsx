import type { VariantProps } from "tailwind-variants";

import { FAQ as BaseFAQ, FAQAnswer, FAQGroup, FAQQuestion } from "~/components/faq";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { OrderedList, OrderedListItem } from "~/components/list";
import { Section } from "~/components/section";
import { tv } from "~/helpers";

const variants = tv({
  slots: {
    sectionClassName: "flex flex-col items-center gap-24",
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

type FAQProps = {
  _color: NonNullable<Variants["_color"]>;
};

export const FAQ = ({ _color }: FAQProps) => {
  const { sectionClassName } = variants({ _color });

  const faq = [
    {
      question: "Les tests utilisateurs peuvent-ils remplacer un audit d’accessibilité ?",
      answer: (
        <p>
          Non, les tests utilisateurs ne peut pas remplacer un audit d’accessibilité. L’audit est essentiel pour
          vérifier la conformité aux critères légaux et normatifs, tels que le RGAA. Il est impératif de réaliser un
          audit au préalable afin d’éviter des points bloquants pour les utilisateurs. Les tests utilisateurs
          interviennent ensuite pour valider l’expérience réelle des personnes handicapées, mais ne peut se substituer à
          l’audit initial.
        </p>
      ),
    },
    {
      question: "Comment se déroulent les tests utilisateurs avec des personnes en situation de handicap ?",
      answer: (
        <OrderedList className="flex flex-col gap-4">
          <OrderedListItem _order={1}>
            Recrutement et sélection de testeurs : présentation des objectifs, consignes, profils des candidats, et
            validation de leur maîtrise des aides techniques.
          </OrderedListItem>
          <OrderedListItem _order={2}>
            Mise en situation : tests basés sur des scénarios prédéfinis pour évaluer l’expérience d’usage de
            l’application ou du site.
          </OrderedListItem>
          <OrderedListItem _order={3}>
            Retours d’expérience : recueil des impressions des utilisateurs, identification des difficultés rencontrées,
            suggestions d’amélioration, et évaluation des qualités ergonomiques.
          </OrderedListItem>
          <OrderedListItem _order={4}>
            Analyse des résultats pour proposer des axes d’amélioration, d’accessibilité, et d’utilisabilité.
          </OrderedListItem>
        </OrderedList>
      ),
    },
    {
      question: "Combien coûte les tests utilisateurs ?",
      answer: (
        <p>
          Le coût des tests utilisateurs dépend de plusieurs facteurs comme les tâches à accomplir et les objectifs
          visés. Contactez-nous pour un devis personnalisé.
        </p>
      ),
    },
  ];

  return (
    <Section className={sectionClassName()}>
      <Heading _alignment="center" _size="4xl">
        <HeadingContent _level={2}>Foire aux questions (FAQ)</HeadingContent>
        <HeadingSubheading>Nos réponses à vos questions les plus fréquentes.</HeadingSubheading>
      </Heading>

      <BaseFAQ>
        {faq.map((item, index) => (
          <FAQGroup key={index}>
            <FAQQuestion>{item.question}</FAQQuestion>
            <FAQAnswer>{item.answer}</FAQAnswer>
          </FAQGroup>
        ))}
      </BaseFAQ>
    </Section>
  );
};
