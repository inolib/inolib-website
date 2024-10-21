import { TwoColumnsFlexLayoutColumn, type TwoColumnsFlexLayoutColumnProps } from "~/components/layout";
import { cn } from "~/helpers";

export type HightlightsIllustrationProps = TwoColumnsFlexLayoutColumnProps;

export const HighlightsIllustration = ({ className, ...passthru }: HightlightsIllustrationProps) => {
  return <TwoColumnsFlexLayoutColumn className={cn("flex items-center justify-center", className)} {...passthru} />;
};
