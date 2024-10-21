"use client";

import { forwardRef, useCallback, type ButtonHTMLAttributes, type MouseEventHandler } from "react";

import { useSlideshow } from "./Slideshow";

export type SlideshowNextButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const SlideshowNextButton = forwardRef<HTMLButtonElement, SlideshowNextButtonProps>(
  ({ onClick, ...passthru }, ref) => {
    const slideshow = useSlideshow();

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
      (event) => {
        onClick?.(event);

        slideshow.next();
      },
      [onClick, slideshow],
    );

    return <button onClick={handleClick} ref={ref} {...passthru} />;
  },
);

SlideshowNextButton.displayName = "SlideshowNextButton";
