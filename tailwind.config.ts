import type { Config } from "tailwindcss";

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
        primary: {
          DEFAULT: '#1B4D3E',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#D4A373',
          foreground: '#1B4D3E',
        },
        accent: {
          DEFAULT: '#E63946',
          foreground: '#FFFFFF',
        },
        background: '#FAFAF9',
        surface: '#FFFFFF',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        wheat: {
          DEFAULT: 'hsl(var(--wheat-gold))',
          foreground: 'hsl(var(--wheat-gold-foreground))',
        },
        soil: {
          DEFAULT: 'hsl(var(--soil-brown))',
          foreground: 'hsl(var(--soil-brown-foreground))',
        },
        sky: {
          DEFAULT: 'hsl(var(--sky-blue))',
          foreground: 'hsl(var(--sky-blue-foreground))',
        },
        olive: {
          DEFAULT: 'hsl(var(--olive-green))',
          foreground: 'hsl(var(--olive-green-foreground))',
        },
        harvest: {
          DEFAULT: 'hsl(var(--harvest-orange))',
          foreground: 'hsl(var(--harvest-orange-foreground))',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Merriweather', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
};

export default config;
