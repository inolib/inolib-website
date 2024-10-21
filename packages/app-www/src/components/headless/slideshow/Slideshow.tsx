"use client";

import { createContext, forwardRef, useContext, useEffect, useMemo, useState, type HTMLAttributes } from "react";

import type { SlideshowSlideObject } from "./SlideshowSlide";

export type SlideshowObject = {
  next: () => void;
  previous: () => void;
  pushSlide: (slide: SlideshowSlideObject) => void;
};

const SlideshowContext = createContext<SlideshowObject | undefined>(undefined);

export const useSlideshow = () => {
  const slideshow = useContext(SlideshowContext);

  if (slideshow === undefined) {
    throw new Error("Context not found");
  }

  return slideshow;
};

export type SlideshowProps = Omit<HTMLAttributes<HTMLElement>, "aria-atomic" | "aria-live" | "role">;

export const Slideshow = forwardRef<HTMLElement, SlideshowProps>(({ children, ...passthru }, ref) => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState<number>(0);
  const [slides, setSlides] = useState<SlideshowSlideObject[]>([]);

  const contextValue: SlideshowObject = useMemo(
    () => ({
      next: () => {
        setSelectedSlideIndex((selectedSlideIndex) =>
          selectedSlideIndex < slides.length - 1 ? selectedSlideIndex + 1 : 0,
        );
      },
      previous: () => {
        setSelectedSlideIndex((selectedSlideIndex) =>
          selectedSlideIndex > 0 ? selectedSlideIndex - 1 : slides.length - 1,
        );
      },
      pushSlide: (slide) => {
        setSlides((slides) =>
          slides.some((slide_) => slide_.getId() === slide.getId()) ? slides : [...slides, slide],
        );
      },
    }),
    [slides.length],
  );

  useEffect(() => {
    for (const slide of slides) {
      slide.hide();
    }

    slides[selectedSlideIndex]?.show();
  }, [selectedSlideIndex, slides]);

  return (
    <SlideshowContext.Provider value={contextValue}>
      <section aria-atomic={false} aria-live="polite" ref={ref} {...passthru}>
        {children}
      </section>
    </SlideshowContext.Provider>
  );
});

Slideshow.displayName = "Slideshow";
