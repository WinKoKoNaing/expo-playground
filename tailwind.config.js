// const colors = require("./styles/colors");
// const fontFamily = require("./styles/fonts");

module.exports = {
  content: ["app/**"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // fontFamily,
      // colors,
    },
  },
  plugins: [],
};
