import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fog design tokens
        bg: "#f5f7f9",
        surface: "#ffffff",
        ink: "#1d2833",
        "ink-2": "#54636f",
        "ink-3": "#6b7a88",
        "ink-4": "#9aa7b2",
        accent: "#2f6fb0",
        hairline: "#e5ebf0",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.14em",
      },
      maxWidth: {
        page: "820px",
      },
    },
  },
  plugins: [],
};

export default config;
