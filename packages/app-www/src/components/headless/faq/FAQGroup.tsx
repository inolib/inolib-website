"use client";

import { createContext, forwardRef, useContext, useMemo, useState, type HTMLAttributes } from "react";

export type FAQGroupObject = {
  close: () => void;
  isExpanded: () => boolean;
  open: () => void;
};

const FAQGroupContext = createContext<FAQGroupObject | undefined>(undefined);

export const useFAQGroup = () => {
  const faqGroup = useContext(FAQGroupContext);

  if (faqGroup === undefined) {
    throw new Error("Context not found");
  }

  return faqGroup;
};

export type FAQGroupProps = Omit<HTMLAttributes<HTMLDivElement>, "data-expanded">;

export const FAQGroup = forwardRef<HTMLDivElement, FAQGroupProps>(({ children, ...passthru }, ref) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const faqGroup: FAQGroupObject = useMemo(
    () => ({
      close: () => {
        setIsExpanded(false);
      },
      isExpanded: () => isExpanded,
      open: () => {
        setIsExpanded(true);
      },
    }),
    [isExpanded],
  );

  return (
    <FAQGroupContext.Provider value={faqGroup}>
      <div data-expanded={isExpanded} ref={ref} {...passthru}>
        {children}
      </div>
    </FAQGroupContext.Provider>
  );
});

FAQGroup.displayName = "FAQGroup";
