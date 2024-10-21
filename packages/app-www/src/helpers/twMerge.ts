import { extendTailwindMerge } from "tailwind-merge";

export type Config = Parameters<typeof extendTailwindMerge<never, never>>[0];

export const config: Config = {
  extend: {
    theme: {
      borderWidth: ["", "4"],
      colors: [
        "black",
        { blue: ["50", "100", "300", "600", "900", "950"] },
        { neutral: ["50", "400", "700", "800"] },
        { red: ["600"] },
        { sand: ["50", "400"] },
        "transparent",
        "white",
        { yellow: ["500", "600"] },
      ],
    },
    classGroups: {
      aspect: ["thumbnail"],
      "font-family": ["manrope"],
      "font-size": ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"],
    },
  },
};

export const twMerge = extendTailwindMerge(config);
