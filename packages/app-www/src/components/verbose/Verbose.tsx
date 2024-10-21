import { TwoColumnsFlexLayout, type TwoColumnsFlexLayoutProps } from "~/components/layout";
import { cn } from "~/helpers";

export type VerboseProps = {
  _isReversed?: boolean | undefined;
} & TwoColumnsFlexLayoutProps;

export const Verbose = ({ _isReversed = false, ...passthru }: VerboseProps) => {
  return <TwoColumnsFlexLayout className={cn({ "md:flex-row-reverse": _isReversed })} {...passthru} />;
};
