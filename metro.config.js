const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname, { isCSSEnabled: true });

const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
  minifierConfig: { compress: { drop_console: true } },
};
config.resolver = {
  ...resolver,
  assetExts: [...resolver.assetExts.filter((ext) => ext !== "svg")],
  sourceExts: [...resolver.sourceExts, "svg", "mjs", "cjs"],
};

module.exports = withNativeWind(config, {
  input: "global.css",
  inlineNativeRem: 16,
});
