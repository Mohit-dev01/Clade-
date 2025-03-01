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
      boxShadow: {
        "custom-inset": "inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        "custom-insett": "inset 0px 4px 4px 0px rgba(0, 0, 0, 0.08)",
        "custom-shadow": "-4px 8px 20px 0px rgba(0,0,0,0.102)",
      },
    },
  },
  plugins: [],
};
export default config;
