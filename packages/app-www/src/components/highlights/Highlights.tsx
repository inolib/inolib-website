import { TwoColumnsFlexLayout, type TwoColumnsFlexLayoutProps } from "~/components/layout";
import { cn } from "~/helpers";

export type HighlightsProps = {
  _isReversed?: boolean | undefined;
} & TwoColumnsFlexLayoutProps;

export const Highlights = ({ _isReversed, ...passthru }: HighlightsProps) => {
  return <TwoColumnsFlexLayout className={cn({ "md:flex-row-reverse": _isReversed })} {...passthru} />;
};
