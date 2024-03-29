/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      navbarColor: "#252B42",
      navbarLight: "#FFFFFF",
      grey: "#252B42",
      iconblue: "#23A6F0",
      textgrey: "#737373",
    },
    extend: {
      fontFamily: {
        montserrat: ['"montserrat"', "arial"],
      },
    },
  },
  plugins: [],
};
