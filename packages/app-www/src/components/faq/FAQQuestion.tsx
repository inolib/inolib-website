import { FAQQuestion as BaseFAQQuestion, type FAQQuestionProps as BaseFAQQuestionProps } from "~/components/headless";
import { cn } from "~/helpers";

import MinusIcon from "#/images/icons/minus.svg";
import PlusIcon from "#/images/icons/plus.svg";

export type FAQQuestionProps = BaseFAQQuestionProps;

export const FAQQuestion = ({ children, className, ...passthru }: FAQQuestionProps) => {
  return (
    <BaseFAQQuestion
      className={cn(
        "flex w-full justify-between gap-8 rounded-3xl p-6 text-left text-2xl font-bold outline-none hover:bg-blue-50 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-black",
        className,
      )}
      {...passthru}
    >
      {children}

      <div className="flex size-9 shrink-0 grow-0 items-center justify-center rounded-full bg-blue-900">
        <MinusIcon className="size-6 stroke-white [[data-expanded=false]_&]:hidden" />
        <PlusIcon className="size-6 stroke-white [[data-expanded=true]_&]:hidden" />
      </div>
    </BaseFAQQuestion>
  );
};
