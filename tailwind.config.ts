import type { Config } from "tailwindcss";

import { colors } from "./constants";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          primary: colors.dental.primary, // Deep blue
          secondary: colors.dental.secondary, // Bright blue
          accent1: colors.dental.accent1, // Light cyan
          accent2: colors.dental.accent2, // Bright cyan
          black: colors.dental.black, // Pure black
          deepBlue: colors.dental.deepBlue, // dark blue
          navy: colors.dental.navy, // Navy blue
          butterflyBlue: colors.dental.butterflyBlue, // Butterfly blue
          teal: colors.dental.teal, // Teals
          gray: colors.dental.gray, // Gray
          dirtyGold: colors.dental.dirtyGold, // dirty gold
          gold: colors.dental.gold,
          lightGold: colors.dental.lightGold,
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
        castoro: ["Castoro Titling", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
