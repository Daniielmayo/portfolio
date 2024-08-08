import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [
    nextui({
      themes: {
        myThemeButton: {
          extend: "dark",
          background: "#9c0d38",
          colors: {
            primary: {
              DEFAULT: "#4caf50",
            },
            secondary: "#ffff",
            danger:"#f4693b"
          },
          layout: {
            
            fontSize: {
              tiny: "0.75rem", // text-tiny
              small: "0.875rem", // text-small
              medium: "1rem", // text-medium
              large: "1.125rem", // text-large
            },
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
            textColor: {
              primary: "#9c0d38",
            },
          },
        },
      },
    }),
  ],
};
export default config;
