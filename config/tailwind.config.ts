import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        surface: {
          DEFAULT: "#0F172A",
          subtle: "#1E293B",
        },
        primary: {
          DEFAULT: "#6366F1",
          glow: "rgba(99, 102, 241, 0.5)",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
        },
        accent: {
          cyan: "#22D3EE",
          silver: "#F8FAFC",
        },
        border: "rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "shimmer": "shimmer 2s linear infinite",
        "glow": "glow 4s ease-in-out infinite alternate",
      },
      backgroundImage: {
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
        "ai-gradient": "linear-gradient(to right, #6366F1, #8B5CF6, #22D3EE)",
      },
    },
  },
  plugins: [],
};

export default config;