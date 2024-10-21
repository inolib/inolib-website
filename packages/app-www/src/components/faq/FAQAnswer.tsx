import { FAQAnswer as BaseFAQAnswer, type FAQAnswerProps as BaseFAQAnswerProps } from "~/components/headless";
import { cn } from "~/helpers";

export type FAQAnswerProps = BaseFAQAnswerProps;

export const FAQAnswer = ({ className, ...passthru }: FAQAnswerProps) => {
  return <BaseFAQAnswer className={cn("-mt-2 flex flex-col gap-4 p-6 pt-4", className)} {...passthru} />;
};
