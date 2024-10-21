import { TwoColumnsFlexLayoutColumn, type TwoColumnsFlexLayoutColumnProps } from "~/components/layout";
import { cn } from "~/helpers";

export type HightlightsContentProps = TwoColumnsFlexLayoutColumnProps;

export const HighlightsContent = ({ className, ...passthru }: HightlightsContentProps) => {
  return <TwoColumnsFlexLayoutColumn className={cn("flex flex-col gap-8", className)} {...passthru} />;
};
