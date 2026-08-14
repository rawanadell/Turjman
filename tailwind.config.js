/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#4F46E5",
        accent: "#06B6D4",
        background: "#F8FAFC",
        darkBackground: "#09090B",
        card: "#FFFFFF",
        border: "#E5E7EB",
        text: "#111827",
        mutedText: "#6B7280",
      },
      borderRadius: {
        "3xl": "2rem",
      },
      boxShadow: {
        "glow": "0 0 40px rgba(37, 99, 235, 0.3)",
      },
    },
  },
  plugins: [],
}
