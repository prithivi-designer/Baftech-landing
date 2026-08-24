import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.02)",
          hover: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.08)",
          borderHover: "rgba(255, 255, 255, 0.22)",
        },
      },
      fontFamily: {
        montserrat: ["'Montserrat Alternates'", "system-ui", "-apple-system", "sans-serif"],
        urbanist: ["'Urbanist'", "system-ui", "-apple-system", "sans-serif"],
        geist: ["'Geist'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'Geist Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 50px -10px rgba(255, 255, 255, 0.25)",
        "glow-sm": "0 0 20px -5px rgba(255, 255, 255, 0.15)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
