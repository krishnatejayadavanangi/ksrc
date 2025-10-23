/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",       // bright cyan
        secondary: "#2563eb",     // blue
        accent: "#fbbf24",        // golden yellow
        background: "#f9fafb",    // light gray background
        darkbg: "#1e293b",        // dark section background
        textPrimary: "#111827",   // dark text
        textSecondary: "#374151", // medium gray
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
