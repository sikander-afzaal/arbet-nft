const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "rgb(22, 28, 36)",
        secondary: "rgb(33, 43, 54)",
        gray: "rgb(145, 158, 171)",
      },
    },
  },
  plugins: [],
};
