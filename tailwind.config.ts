import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "80px"
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
export default config;
