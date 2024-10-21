import { Fragment } from "react";

import { FullBleedSection } from "~/components/section";

const quotes = ["L’inclusivité est la clé", "Accessibilité rime avec beauté"];

export const ScrollingText = () => {
  const items = [...Array.from({ length: 10 }).keys()].map((key) => quotes[key % quotes.length]);

  return (
    <FullBleedSection
      className="flex justify-center gap-4 overflow-hidden bg-blue-950 py-4 text-3xl text-yellow-500"
      aria-hidden
    >
      {items.map((item, index) => (
        <Fragment key={index}>
          <span>{item}</span>
          <span>–</span>
        </Fragment>
      ))}
    </FullBleedSection>
  );
};
