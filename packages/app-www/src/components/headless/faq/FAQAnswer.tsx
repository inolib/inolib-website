"use client";

import { forwardRef, type HTMLAttributes } from "react";

import { useFAQGroup } from "./FAQGroup";

export type FAQAnswerProps = HTMLAttributes<HTMLElement>;

export const FAQAnswer = forwardRef<HTMLElement, FAQAnswerProps>(({ style, ...passthru }, ref) => {
  const faqGroup = useFAQGroup();

  return <dd ref={ref} style={faqGroup.isExpanded() ? style : { display: "none", ...style }} {...passthru} />;
});

FAQAnswer.displayName = "FAQAnswer";
