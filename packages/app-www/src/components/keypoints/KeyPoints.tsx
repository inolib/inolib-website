import { TwoColumnsFlexLayout, type TwoColumnsFlexLayoutProps } from "~/components/layout";
import { cn } from "~/helpers";

export type KeyPointsProps = {
  _isReversed?: boolean | undefined;
} & TwoColumnsFlexLayoutProps;

export const KeyPoints = ({ _isReversed = false, ...passthru }: KeyPointsProps) => {
  return <TwoColumnsFlexLayout className={cn({ "md:flex-row-reverse": _isReversed })} {...passthru} />;
};
