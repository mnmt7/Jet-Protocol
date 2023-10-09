import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        playfair: ["var(--font-playfair-display)"],
      },

      colors: {
        "sage-green": "#64AE9D",
        "sage-green-dark": "#49766c",
      },

      boxShadow: {
        "inner-black-white":
          "0px 2px 2px 0px #FFFFFF7A inset, 0px -2px 2px 0px #0000007A inset",
      },
    },
  },
  plugins: [],
};
export default config;
