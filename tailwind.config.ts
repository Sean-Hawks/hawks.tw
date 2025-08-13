
import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{astro,html,md,mdx,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0ea5e9"
        }
      }
    }
  },
  plugins: []
} satisfies Config
