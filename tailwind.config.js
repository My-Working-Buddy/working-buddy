const defaultTheme = require("tailwindcss/defaultTheme");

const fontFamliySans = ["Inter var", ...defaultTheme.fontFamily.sans];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: fontFamliySans,
    },
    extend: {},
  },
  plugins: [],
};
