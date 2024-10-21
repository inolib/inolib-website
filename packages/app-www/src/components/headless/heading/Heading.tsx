import { forwardRef, type HTMLAttributes } from "react";

export type HeadingProps = {
  _level: 1 | 2 | 3 | 4 | 5 | 6;
} & HTMLAttributes<HTMLHeadingElement>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ _level, children, ...passthru }, ref) => {
  switch (_level) {
    case 1: {
      return (
        <h1 ref={ref} {...passthru}>
          {children}
        </h1>
      );
    }
    case 2: {
      return (
        <h2 ref={ref} {...passthru}>
          {children}
        </h2>
      );
    }
    case 3: {
      return (
        <h3 ref={ref} {...passthru}>
          {children}
        </h3>
      );
    }
    case 4: {
      return (
        <h4 ref={ref} {...passthru}>
          {children}
        </h4>
      );
    }
    case 5: {
      return (
        <h5 ref={ref} {...passthru}>
          {children}
        </h5>
      );
    }
    case 6: {
      return (
        <h6 ref={ref} {...passthru}>
          {children}
        </h6>
      );
    }
  }
});

Heading.displayName = "Heading";
