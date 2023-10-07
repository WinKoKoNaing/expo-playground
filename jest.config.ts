import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: "jest-expo",
    transformIgnorePatterns: [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|dooboo-ui|@dooboo-ui)",
    ],
    modulePaths: ["<rootDir>"],
    setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  };
};
