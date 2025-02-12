import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#7A9589", // Darker sage green
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#D4E2DC", // Slightly darker light sage
          foreground: "#7A9589",
        },
        accent: {
          DEFAULT: "#A6BDB2", // Darker mint accent
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)"],
        montserrat: ["var(--font-montserrat)"],
        playfair: ["var(--font-playfair-display)"],
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-playfair-display)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

