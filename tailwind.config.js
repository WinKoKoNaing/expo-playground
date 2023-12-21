/** @type {import('tailwindcss').Config} */

// const colors = require("./styles/colors");
// const fontFamily = require("./styles/fonts");

module.exports = {
  darkMode: "class",
  content: [
    "app/**/*.{js,jsx,ts,tsx}",
    "components/**/*.{js,jsx,ts,tsx}",
    "features/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // colors,
      // fontFamily,
    },
  },
  plugins: [],
};
