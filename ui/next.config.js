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
  console.log(`modified your next.js environment with ${envFile}`);
}

module.exports = withSourceMaps({
  webpack: (config, options) => {
    // There may be different version of these core packages in our dependency tree.  We need to pick only one version (our version).
    ["react", "react-dom"].forEach((package) => {
      config.resolve.alias[package] = getPluginPath(package);
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
