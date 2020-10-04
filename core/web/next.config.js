const path = require("path");
const fs = require("fs");
const {
  getPluginManifest,
  getParentPath,
} = require("../api/src/utils/pluginDetails");
require("./plugins"); // prepare plugins

const withSourceMaps = require("@zeit/next-source-maps");

const nodeModulesPath = path.join(
  path.dirname(require.resolve("react/package.json")),
  ".."
);

// pass plugin env/web to the build for
const env = {};
const pluginManifest = getPluginManifest();

const envFile = path.resolve(path.join(getParentPath(), ".env"));
if (fs.existsSync(envFile)) {
  require("dotenv").config({ path: envFile });
  console.log(`modified your next.js environment with ${envFile}`);
}

pluginManifest.plugins.forEach((plugin) => {
  if (plugin.grouparoo && plugin.grouparoo.env && plugin.grouparoo.env.web) {
    plugin.grouparoo.env.web.forEach((e) => {
      env[e] = process.env[e];

      // NODE_ENV is "production" when `next build` is running, in any environment
      if (env[e] === undefined && process.env.NODE_ENV === "production") {
        throw new Error(
          `process.env.${e} is undefined, and is required at build time`
        );
      }
    });
  }
});

module.exports = withSourceMaps({
  env,

  webpack: (config, options) => {
    overwriteNextBabelLoaderToIncludePluginNodeModules(config);

    // when grouparoo is deployed, and we want to run in dev mode, we need to opt-into babel within node modules
    // related to overwriteNextBabelLoaderToIncludePluginNodeModules
    config.module.rules.push({
      test: /node_modules\/@grouparoo\/core\/web\/.*.ts$|node_modules\/@grouparoo\/core\/web\/.*.tsx$/,
      use: [options.defaultLoaders.babel],
    });

    // There may be different version of these core packages in our dependency tree.  We need to pick only one version (our version).
    ["react", "react-dom"].forEach((package) => {
      config.resolve.alias[package] = path.resolve(nodeModulesPath, package);
    });

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },

  async redirects() {
    return [
      { source: "/settings", destination: "/settings/core", statusCode: 307 },
      { source: "/resque", destination: "/resque/overview", statusCode: 307 },
    ];
  },
});

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
