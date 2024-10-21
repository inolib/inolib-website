import { TwoColumnsFlexLayoutColumn, type TwoColumnsFlexLayoutColumnProps } from "~/components/layout";
import { cn } from "~/helpers";

export type VerboseContentProps = TwoColumnsFlexLayoutColumnProps;

export const VerboseContent = ({ className, ...passthru }: VerboseContentProps) => {
  return <TwoColumnsFlexLayoutColumn className={cn("flex flex-col gap-8", className)} {...passthru} />;
};
