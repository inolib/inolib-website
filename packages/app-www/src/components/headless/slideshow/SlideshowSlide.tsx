"use client";

import { forwardRef, useEffect, useId, useMemo, useState, type HTMLAttributes } from "react";

import { useSlideshow } from "./Slideshow";

export type SlideshowSlideObject = {
  getId: () => string;
  hide: () => void;
  show: () => void;
};

export type SlideshowSlideProps = Omit<HTMLAttributes<HTMLDivElement>, "data-id" | "role">;

export const SlideshowSlide = forwardRef<HTMLDivElement, SlideshowSlideProps>(({ style, ...passthru }, ref) => {
  const id = useId();
  const slideshow = useSlideshow();

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const slide: SlideshowSlideObject = useMemo(
    () => ({
      getId: () => id,
      hide: () => {
        setIsSelected(false);
      },
      show: () => {
        setIsSelected(true);
      },
    }),
    [id],
  );

  useEffect(() => {
    slideshow.pushSlide(slide);
  }, [slide, slideshow]);

  return (
    <div data-id={id} ref={ref} role="group" style={isSelected ? style : { display: "none", ...style }} {...passthru} />
  );
});

SlideshowSlide.displayName = "SlideshowSlide";
