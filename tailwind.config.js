/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // Z-index utilities for all layers
    "z-1",
    "z-2",
    "z-3",
    "z-4",
    "z-5",
    "z-50",
    // Background colors - neutrals (n-1 through n-13)
    "bg-n-1",
    "bg-n-2",
    "bg-n-3",
    "bg-n-4",
    "bg-n-5",
    "bg-n-6",
    "bg-n-7",
    "bg-n-8",
    "bg-n-9",
    "bg-n-10",
    "bg-n-11",
    "bg-n-12",
    "bg-n-13",
    // Background with opacity for Header and other components
    "bg-n-6/90",
    "bg-n-7/90",
    "bg-n-8/90",
    "bg-n-8/80",
    "bg-n-9/40",
    "bg-n-10",
    // Text colors - neutrals
    "text-n-1",
    "text-n-2",
    "text-n-3",
    "text-n-4",
    "text-n-5",
    "text-n-6",
    "text-n-7",
    "text-n-8",
    "text-n-13",
    // Color utilities (accent colors)
    "bg-color-1",
    "bg-color-2",
    "bg-color-3",
    "bg-color-4",
    "bg-color-5",
    "bg-color-6",
    // Stroke/Border colors
    "bg-stroke-1",
    "border-n-1",
    "border-n-6",
    "border-color-1",
    "border-color-2",
    // Border opacity utilities
    "border-n-1/10",
    "border-n-1/15",
    // Gradients
    "bg-conic-gradient",
    "bg-radial-gradient",
    // Pointer events
    "pointer-events-none",
    "pointer-events-auto",
    // Overflow
    "overflow-hidden",
    "overflow-visible",
    // Positioning
    "absolute",
    "relative",
    "fixed",
    "inset-0",
    "inset-0.5",
    // Backdrop blur
    "backdrop-blur",
    "backdrop-blur-sm",
    // Display and flexbox
    "flex",
    "flex-col",
    "items-center",
    "justify-center",
    "justify-between",
    "justify-start",
    "mt-auto",
    "ml-auto",
    // Grid
    "grid",
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    // Borders and rounding
    "rounded",
    "rounded-full",
    "rounded-xl",
    "rounded-2xl",
    "rounded-3xl",
    "rounded-[1rem]",
    "rounded-[1.7rem]",
    "rounded-[2rem]",
    "rounded-t-[0.9rem]",
    "rounded-[2rem]",
    // Width and height sizing
    "w-full",
    "h-full",
    "w-10",
    "h-10",
    "w-[3.2rem]",
    "h-[3.2rem]",
    "h-[1.4rem]",
    "h-[3.5rem]",
    "h-[20rem]",
    "h-[25rem]",
    "max-w-[24rem]",
    // Transitions
    "transition-colors",
    "transition-opacity",
    // Hover states
    "hover:bg-n-6",
    "hover:opacity-10",
    "hover:opacity-100",
    // Other utilities
    "gap-5",
    "gap-10",
    "mb-5",
    "mb-6",
    "mb-10",
    "p-4",
    "p-6",
    "p-0.5",
    "p-8",
    "p-[2.4rem]",
    "px-1",
    "py-1",
    "px-4",
    "py-4",
    "px-6",
    "pr-6",
    "py-1",
    "px-1",
    // Negative positioning for overlays
    "-top-[1.6rem]",
    "-left-[5.5rem]",
    "-rotate-45",
    "-rotate-90",
    // Line heights
    "leading-normal",
    "leading-8",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
