import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#e10600",
        secondary: "#1f1f27",
        tertiary: "#b1b1b3",
        shade1: "#b40500",
        shade2: "#9e0400",
        shade3: "#870400",
        shade4: "#710300",
        shade5: "#5a0200",
      },
      fontFamily: {
        formula: ["var(--font-formula1)"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
