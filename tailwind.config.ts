import type { Config } from "tailwindcss"
const colors = [
  'hitam', 'putih', 'maroon', 'camel', 'mustard', 'platinum', 'khaki', 'olive',
  'emerald', 'navy', 'steelblue', 'stoneblue', 'dustypink',  'pastelkuning', 'pastelmerah', 'lightdark2'
];

const safelist = colors.map(color => `bg-${color}`);

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  safelist: safelist,
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
        desc: "hsl(var(--desc))",
        line: "hsl(var(--line))",
        pastel: "hsl(var(--pastel))",
        borderhome: "rgba(8, 9, 10, 0.14)",
        mediumpastel: "hsl(var(--medium-pastel))",
        viapastel: "hsl(var(--viapastel))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        lightdark2: "#1B1B34",
        lightgray: "#939393",
        darkgreen: "#0C8C5E",
        navdark: "#ffffff08",
        navlight: "#08090a08",
        second: {
          background: "hsl(var(--second-background))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        yellow: {
          DEFAULT: "hsl(var(--yellow))",
          foreground: "hsl(var(--yellow-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        xl: "20px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        title: "60px",
        title2: "40px",
        deskripsi: "18px",
      },
      boxShadow: {
        'card': '15px 15px 20px 0px rgba(0, 0, 0, 0.02)',
      },
      letterSpacing: {
        title: '-1.2px',
        desc: '-0.2px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config