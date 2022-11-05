/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        amiri: "'Amiri Quran', serif",
        messiri: "'El Messiri', sans-serif",
        merienda: "'Merienda', cursive",
        merienda_one: "'Merienda One', cursive",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
