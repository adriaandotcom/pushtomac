/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#F5ECF2",
          100: "#E8BBDB",
          200: "#DC8CC9",
          300: "#D06FBD",
          400: "#C359B3",
          500: "#B546A8",
          600: "#A03699",
          700: "#8C288A",
          800: "#6F1D70",
          900: "#501455",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
