import { FAQ as BaseFAQ, type FAQProps as BaseFAQProps } from "~/components/headless";

export type FAQProps = BaseFAQProps;

export const FAQ = ({ children, ...passthru }: FAQProps) => {
  return (
    <BaseFAQ className="flex max-w-prose flex-col gap-8" {...passthru}>
      {children}
    </BaseFAQ>
  );
};
