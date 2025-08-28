import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: "#FC750F",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#4caf50",
          foreground: "#FFFFFF",
        },
        danger: {
          DEFAULT: "#9c0d38",
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#bc9e38",
          foreground: "#FFFFFF",
        },
        default: {
          DEFAULT: "#282e3a",
          foreground: "#FFFFFF",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#232732",
            foreground: "#ffffff",
            primary: {
              DEFAULT: "#FC750F",
              foreground: "#FFFFFF",
            },
            success: {
              DEFAULT: "#4caf50",
              foreground: "#FFFFFF",
            },
            danger: {
              DEFAULT: "#9c0d38",
              foreground: "#FFFFFF",
            },
            warning: {
              DEFAULT: "#bc9e38",
              foreground: "#FFFFFF",
            },
            default: {
              DEFAULT: "#282e3a",
              foreground: "#FFFFFF",
            },
            // focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
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
          },
        },
      },
    }),
  ],
};

module.exports = config;
