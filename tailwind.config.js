/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    colors: {
      primary: "hsl(var(--color-primary) / <alpha-value>)",
      neutralGrey: "hsl(var(--neutral-gray) / <alpha-value)",
    },
    fontFamily: {
      Figtree: ["Figtree", "sans-serif"],
    },
  },
  screens: {
    sm: { max: "375px" },
    lg: { max: "1440px" },
  },
};
export const plugins = [];
