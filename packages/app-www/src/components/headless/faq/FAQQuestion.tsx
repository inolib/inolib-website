"use client";

import { forwardRef, useCallback, type ButtonHTMLAttributes, type MouseEventHandler } from "react";

import { useFAQGroup } from "./FAQGroup";

export type FAQQuestionProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-expanded">;

export const FAQQuestion = forwardRef<HTMLButtonElement, FAQQuestionProps>(
  ({ children, onClick, ...passthru }, ref) => {
    const faqGroup = useFAQGroup();

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
      (event) => {
        onClick?.(event);

        if (faqGroup.isExpanded()) {
          faqGroup.close();
        } else {
          faqGroup.open();
        }
      },
      [faqGroup, onClick],
    );

    return (
      <dt>
        <button aria-expanded={faqGroup.isExpanded()} onClick={handleClick} ref={ref} {...passthru}>
          {children}
        </button>
      </dt>
    );
  },
);

FAQQuestion.displayName = "FAQQuestion";
