"use client";

import { forwardRef, useCallback, type ButtonHTMLAttributes, type MouseEventHandler } from "react";

import { useSlideshow } from "./Slideshow";

export type SlideshowPreviousButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const SlideshowPreviousButton = forwardRef<HTMLButtonElement, SlideshowPreviousButtonProps>(
  ({ onClick, ...passthru }, ref) => {
    const slideshow = useSlideshow();

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
      (event) => {
        onClick?.(event);

        slideshow.previous();
      },
      [onClick, slideshow],
    );

    return <button onClick={handleClick} ref={ref} {...passthru} />;
  },
);

SlideshowPreviousButton.displayName = "SlideshowPreviousButton";
