import { TwoColumnsFlexLayoutColumn, type TwoColumnsFlexLayoutColumnProps } from "~/components/layout";
import { cn } from "~/helpers";

export type VerboseIllustrationProps = TwoColumnsFlexLayoutColumnProps;

export const VerboseIllustration = ({ className, ...passthru }: VerboseIllustrationProps) => {
  return <TwoColumnsFlexLayoutColumn className={cn("flex items-center justify-center", className)} {...passthru} />;
};
