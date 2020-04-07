const path = require("path");
const env = require("./env");
const { getPluginManifest } = require("../api/src/utils/pluginDetails");

module.exports = {
  env,

  webpack: (config, options) => {
    overwriteNextBabelLoaderToIncludePluginNodeModules(config);

    config.module.rules.push({
      test: /\.plugin\.js|\.plugin\.jsx|\.plugin\.ts|\.plugin\.tsx$/,
      use: [options.defaultLoaders.babel],
    });

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};

const overwriteNextBabelLoaderToIncludePluginNodeModules = (config) => {
  const { plugins } = getPluginManifest();
  const pluginNamesWithinNodeModules = [{ name: "@grouparoo/core" }]
    .concat(plugins)
    .map((p) => path.join("node_modules", p.name));

  const NextBabelLoader = config.module.rules.filter((r) => {
    if (r.use && r.use.loader === "next-babel-loader") {
      return true;
    } else {
      return false;
    }
  })[0];

  const originalExclude = NextBabelLoader.exclude;

  NextBabelLoader.exclude = (moduleName, ...args) => {
    for (const i in pluginNamesWithinNodeModules) {
      if (moduleName.indexOf(pluginNamesWithinNodeModules[i]) >= 0) {
        return false;
      }
    }

    return originalExclude(moduleName, ...args);
  };
};
