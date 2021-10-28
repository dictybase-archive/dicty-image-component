module.exports = {
  styleguideDir: "styleguide",
  title: "dicty-image-component",
  ignore: ["**/*.test.{js,jsx,ts,tsx}", "src/styles/**"],
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json",
  ).parse,
  // Custom webpack - only for Styleguidist
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "ts-loader",
          options: { configFile: "tsconfig.styleguidist.json" },
        },
      ],
    },
  },
}
