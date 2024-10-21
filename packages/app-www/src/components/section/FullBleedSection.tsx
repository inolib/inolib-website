import { cn } from "~/helpers";

import { Section, type SectionProps } from "./Section";

export type FullBleedSectionProps = SectionProps;

export const FullBleedSection = ({ className, ...passthru }: FullBleedSectionProps) => {
  return <Section className={cn("px-0", className)} {...passthru} />;
};
