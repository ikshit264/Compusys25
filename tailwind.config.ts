import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        fontfo: ['var(--font-nibpro)', 'sans-serif'],
        fontbo: ['var(--font-nibproBold)', 'sans-serif'],
        stickers: ['var(--font-stickers)', 'sans-serif'],
        rango: ['var(--font-rango)', 'sans-serif'],
        kalam: ['var(--font-kalam)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
