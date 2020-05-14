const path = require("path");
const env = require("./env");

module.exports = {
  env,

  webpack: (config, options) => {
    config.resolve.alias["react"] = path.resolve(
      __dirname,
      "..",
      "node_modules",
      "react"
    );

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};
