const path = require("path");
const fs = require("fs");
const withSourceMaps = require("@zeit/next-source-maps");
const { getParentPath } = require("@grouparoo/core/dist/utils/pluginDetails");

function getPluginPath(pluginName) {
  return path.join(
    path.dirname(require.resolve(`${pluginName}/package.json`)),
    "..",
    pluginName
  );
}

const envFile = path.resolve(path.join(getParentPath(), ".env"));
if (fs.existsSync(envFile)) {
  require("dotenv").config({ path: envFile });
}

module.exports = withSourceMaps({
  env: {
    GROUPAROO_UI_EDITION: "enterprise",
  },
  webpack: (config, options) => {
    // There may be different version of these core packages in our dependency tree.  We need to pick only one version (our version).
    ["react", "react-dom"].forEach((_package) => {
      config.resolve.alias[_package] = getPluginPath(_package);
    });

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    config.module.rules.push({
      test: /grouparoo\/ui\/.*.ts$|grouparoo\/ui\/.*.tsx$/,
      use: [options.defaultLoaders.babel],
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
