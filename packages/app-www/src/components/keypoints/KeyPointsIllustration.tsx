import { TwoColumnsFlexLayoutColumn, type TwoColumnsFlexLayoutColumnProps } from "~/components/layout";
import { cn } from "~/helpers";

export type KeyPointsIllustrationProps = TwoColumnsFlexLayoutColumnProps;

export const KeyPointsIllustration = ({ className, ...passthru }: KeyPointsIllustrationProps) => {
  return <TwoColumnsFlexLayoutColumn className={cn("flex items-center justify-center", className)} {...passthru} />;
};
