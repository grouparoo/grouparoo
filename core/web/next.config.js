const path = require("path");
const env = require("./env");
const { runningCoreDirectly } = require("../api/src/utils/pluginDetails");

const nodeModulesPath = runningCoreDirectly()
  ? path.resolve(__dirname, "..", "node_modules")
  : path.resolve(__dirname, "..", "..", "..", "..", "node_modules");

const { plugins } = getPluginManifest();
const pluginNamesWithinNodeModules = [{ name: "@grouparoo/core" }]
  .concat(plugins)
  .filter((p) => p?.grouparoo?.webComponents)
  .map((p) => path.join("node_modules", p.name));

module.exports = {
  env,

  webpack: (config, options) => {
    overwriteNextBabelLoaderToIncludePluginNodeModules(config);

    // when grouparoo is deployed, and we want to run in dev mode, we need to opt-into babel within node modules
    // related to overwriteNextBabelLoaderToIncludePluginNodeModules
    config.module.rules.push({
      test: /node_modules\/@grouparoo\/core\/web\/.*.ts$|node_modules\/@grouparoo\/core\/web\/.*.tsx$/,
      use: [options.defaultLoaders.babel],
    });

    config.resolve.alias["react"] = path.resolve(nodeModulesPath, "react");
    config.resolve.alias["react-dom"] = path.resolve(
      nodeModulesPath,
      "react-dom"
    );

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};

/**
 * This method exits to allow next.js/babel to transpile files within node_modules... which is how Grouparoo is deployed!
 */
const overwriteNextBabelLoaderToIncludePluginNodeModules = (config) => {
  const allowedModuleNames = ["node_modules/@grouparoo/core"];
  const NextBabelLoader = config.module.rules.filter((r) => {
    if (r.use && r.use.loader === "next-babel-loader") {
      return true;
    } else {
      return false;
    }
  })[0];

  if (!NextBabelLoader) {
    return;
  }

  const originalExclude = NextBabelLoader.exclude;

  NextBabelLoader.exclude = (moduleName, ...args) => {
    for (const i in allowedModuleNames) {
      if (moduleName.indexOf(allowedModuleNames[i]) >= 0) {
        return false;
      }
    }

    return originalExclude(moduleName, ...args);
  };
};
