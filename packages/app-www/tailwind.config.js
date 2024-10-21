/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    aspectRatio: {
      thumbnail: "2 / 1",
    },
    borderWidth: {
      DEFAULT: "0.09375rem", // 1.5px
      4: "0.25rem", // 4px
    },
    colors: {
      black: "#000000",
      blue: {
        // 25: "#F5F9FA",
        50: "#EEF5F6",
        100: "#CBE0E4",
        // 200: "#B2D1D7",
        300: "#8EBBC5",
        // 400: "#79AEB9",
        // 500: "#579AA8",
        600: "#4F8C99",
        700: "#3E6D77",
        // 800: "#30555C",
        900: "#254147",
        950: "#111F22",
      },
      neutral: {
        50: "#FAFAFA",
        // 100: "#F5F5F5",
        // 200: "#E5E5E5",
        // 300: "#D4D4D4",
        400: "#A3A3A3",
        // 500: "#737373",
        // 600: "#525252",
        700: "#404040",
        800: "#262626",
        // 900: "#171717",
        // 950: "#0A0A0A",
      },
      red: {
        600: "#DC2626",
      },
      sand: {
        // 25: "#FCFBF9",
        50: "#F5F4EE",
        // 100: "#F1EEE5",
        // 200: "#EAE7D9",
        // 300: "#E6E2D2",
        400: "#E0DBC7",
        // 500: "#CCC7B5",
        // 600: "#9F9B8D",
        // 700: "#7B786D",
        // 800: "#5E5C54",
        // 900: "#3B3A35",
        // 950: "#1E1D1A",
      },
      transparent: "transparent",
      white: "#FFFFFF",
      yellow: {
        // 25: "#FEFFF5",
        // 50: "#FCFFE6",
        // 100: "#F6FFB0",
        // 200: "#F1FF8A",
        // 300: "#EBFF55",
        // 400: "#E7FF34",
        500: "#E1FF01",
        600: "#CDE801",
        // 700: "#A0B501",
        // 800: "#7C8C01",
        // 900: "#5F6B00",
        // 950: "#2D3300",
      },
    },
    fontFamily: {
      manrope: ["Manrope Variable", "sans-serif"],
    },
    fontSize: {
      xs: ["0.75rem", 1.5], // 12px
      sm: ["0.875rem", 1.5], // 14px
      base: ["1rem", 1.5], // 16px
      lg: ["1.125rem", 1.5], // 18px
      xl: ["1.25rem", 1.5], // 20px
      "2xl": ["1.5rem", 1.5], // 24px
      "3xl": ["1.875rem", 1.25], // 30px
      "4xl": ["2.25rem", 1.25], // 36px
      "5xl": ["3rem", 1.25], // 48px
      "6xl": ["3.75rem", 1.25], // 60px
    },
  },
};
