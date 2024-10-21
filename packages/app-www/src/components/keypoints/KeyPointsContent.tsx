import { TwoColumnsFlexLayoutColumn, type TwoColumnsFlexLayoutColumnProps } from "~/components/layout";
import { cn } from "~/helpers";

export type KeyPointsContentProps = TwoColumnsFlexLayoutColumnProps;

export const KeyPointsContent = ({ className, ...passthru }: KeyPointsContentProps) => {
  return <TwoColumnsFlexLayoutColumn className={cn("flex flex-col gap-8", className)} {...passthru} />;
};
