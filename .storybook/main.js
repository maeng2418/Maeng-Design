const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
      exclude: /node_modules/,
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          [
            "react-app",
            {
              flow: false,
              typescript: true,
              runtime: "automatic",
              importSource: "@emotion/react",
            },
          ],
        ],
        plugins: ["@emotion/babel-plugin"],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
