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
          DEFAULT: "#5F9EA0", // Menta turquesa
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5F5F0", // Blanco hueso
          foreground: "#5F9EA0",
        },
        accent: {
          DEFAULT: "#98CBC4", // Turquesa suave
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

