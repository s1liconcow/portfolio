import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#ece4d0",
          50: "#f7f3e8",
          100: "#f2ecdb",
          200: "#ece4d0",
          300: "#e3d9bf",
          400: "#d4c7a4",
        },
        ink: {
          DEFAULT: "#16130c",
          muted: "#5a5444",
          faint: "#8a8270",
          rule: "#b9b09a",
          softrule: "#cec4ac",
        },
        oxblood: {
          DEFAULT: "#a8391f",
          dark: "#7a2815",
          light: "#c8533a",
        },
        signal: {
          DEFAULT: "#d9cfb4",
          soft: "#e4dcc4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": [
          "clamp(4rem, 13vw, 12rem)",
          { lineHeight: "0.88", letterSpacing: "-0.04em" },
        ],
        "display-xl": [
          "clamp(3rem, 8vw, 7rem)",
          { lineHeight: "0.92", letterSpacing: "-0.035em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 5.5vw, 4.5rem)",
          { lineHeight: "1", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(2rem, 4vw, 3rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        micro: ["0.68rem", { lineHeight: "1", letterSpacing: "0.14em" }],
      },
      letterSpacing: {
        wider2: "0.18em",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.85)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "draw-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.2s ease-in-out infinite",
        marquee: "marquee 50s linear infinite",
        "draw-line": "draw-line 1.2s cubic-bezier(.2,.8,.2,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
