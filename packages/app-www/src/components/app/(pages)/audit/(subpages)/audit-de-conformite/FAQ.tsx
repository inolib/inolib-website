import type { VariantProps } from "tailwind-variants";

import { FAQ as BaseFAQ, FAQAnswer, FAQGroup, FAQQuestion } from "~/components/faq";
import { Heading, HeadingContent, HeadingSubheading } from "~/components/heading";
import { UnorderedList, UnorderedListItem } from "~/components/list";
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
      question: "Pourquoi réaliser un audit de conformité ?",
      answer: (
        <>
          <p>
            L’accessibilité numérique est une exigence légale, avec des pénalités pouvant atteindre 20 000 euros par an
            et par application en cas de non-respect. Depuis le 1er janvier, cette amende a été portée à 50 000 euros
            pour les services publics en cas de non-conformité. En utilisant nos services, vous minimisez le risque
            juridique en France et à l’international, tout en promouvant l’inclusion des personnes en situation de
            handicap.
          </p>

          <p>La loi de 2005 sur l’accessibilité numérique s’applique aux entités suivantes :</p>

          <UnorderedList className="-mt-4 pl-8">
            <UnorderedListItem>les personnes morales de droit public ;</UnorderedListItem>
            <UnorderedListItem>
              les personnes morales de droit privé exerçant une mission de service public ou d’intérêt général ;
            </UnorderedListItem>
            <UnorderedListItem>
              depuis 2019, les entreprises réalisant un chiffre d’affaires supérieur à 250 millions d’euros en France.
            </UnorderedListItem>
          </UnorderedList>

          <p>
            À partir de 2025, la réglementation européenne sur l’accessibilité numérique sera renforcée et s’appliquera
            à toutes les entreprises ayant un chiffre d’affaires supérieur à 2 millions d’euros et employant au moins 10
            collaborateurs.
          </p>
        </>
      ),
    },
    {
      question: "Quelle est la durée de réalisation d’un audit ?",
      answer: <p>Un audit prend généralement entre 3 et 15 jours.</p>,
    },
    {
      question: "Combien coûte un audit de conformité ?",
      answer: (
        <p>
          Le coût d’un audit dépend de la complexité et du nombre de pages à auditer. Contactez-nous pour un devis
          personnalisé.
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
