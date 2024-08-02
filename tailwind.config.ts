import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
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
        border: "#111B21", 
        input: "#FCF5EB", 
        ring: "#08BEEF", 
        beige: "#d9ad94",
        background: {
          DEFAULT: "#FCF5EB",
          lighter: "#FFF7F0",
        },
        foreground: {
          DEFAULT: "#111B21",
          lighter: "#333944",
        },
        primary: {
          DEFAULT: "#D04040",
          lighter: "#E06060",
          foreground: "#FCF5EB",
        },
        secondary: {
          DEFAULT: "#E0CF4C",
          lighter: "#EEDD77",
          foreground: "#FCF5EB",
        },
        destructive: {
          DEFAULT: "#FF0000",
          lighter: "#FF4D4D",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#6B7280",
          lighter: "#A0A4A8",
          foreground: "#D1D5DB",
        },
        accent: {
          DEFAULT: "#37BFF0",
          lighter: "#66D1F6",
          foreground: "#FCF5EB",
        },
        popover: {
          DEFAULT: "#FCF5EB",
          lighter: "#FFF7F0",
          foreground: "#111B21",
        },
        card: {
          DEFAULT: "#111B21",
          lighter: "#333944",
          foreground: "#FCF5EB",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "rand-move": {
          "0%": {
            transform: "rotate(0deg) translateX(0px) translateY(0px)",
          },
          "50%": {
            transform: "rotate(180deg) translateX(120px) translateY(-90px)",
          },
          "100%": {
            transform: "rotate(360deg) translateX(0px) translateY(0px)",
          },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        move: "move 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
