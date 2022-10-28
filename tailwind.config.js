/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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
  plugins: [],
};
