/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "rgb(0,0,0)",
        whiteColor: "#FFFFFF",
        greyColor: "rgb(153,153,153)",
        boxColor: "#1A1A1A",
        yellowColor: "#FFBD39",
      },
    },
  },
  plugins: [],
}