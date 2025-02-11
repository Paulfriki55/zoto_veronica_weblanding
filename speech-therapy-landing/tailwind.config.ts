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
          DEFAULT: "#74a998", // Verde Sage Oscuro (ajustado)
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#f0f7f4", // Verde Claro/Menta (ajustado)
          foreground: "#74a998",
        },
        accent: {
          DEFAULT: "#d9e8e2", // Verde Menta Suave (para acentos)
          foreground: "#74a998",
        },
        muted: { // Agregamos un color muted para fondos muy suaves
          DEFAULT: "#f9fafb",
          foreground: "#6b7280",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#000000",
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
      keyframes: { // Opcional: si quieres agregar keyframes para animaciones
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: { // Opcional: si quieres agregar animaciones predefinidas
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;