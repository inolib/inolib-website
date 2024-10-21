import { forwardRef, type HTMLAttributes } from "react";

export type FAQProps = HTMLAttributes<HTMLDListElement>;

export const FAQ = forwardRef<HTMLDListElement, FAQProps>(({ ...passthru }, ref) => {
  return <dl ref={ref} {...passthru} />;
});

FAQ.displayName = "FAQ";
