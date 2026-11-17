/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"]
      },
      colors: {
        ink: "#0b1020",
        violet: "#8b7cff",
        mint: "#48d8c8"
      }
    }
  },
  plugins: []
};
