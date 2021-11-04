const path = require("path");
const fs = require("fs");
const { getParentPath } = require("@grouparoo/core/dist/modules/pluginDetails");

function getPluginPath(pluginName) {
  const p = path.join(
    path.dirname(require.resolve(`${pluginName}/package.json`)),
    "..",
    pluginName
  );
  return p;
}

const envFile = path.resolve(path.join(getParentPath(), ".env"));
if (fs.existsSync(envFile)) {
  require("dotenv").config({ path: envFile });
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    GROUPAROO_UI_EDITION: "community",
  },
  productionBrowserSourceMaps: true,
  webpack: (config, options) => {
    // There may be different version of these core packages in our dependency tree.  We need to pick only one version (our version).
    ["react", "react-dom", "next"].forEach((_package) => {
      config.resolve.alias[_package] = getPluginPath(_package);
    });

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    config.module.rules.push({
      test: /grouparoo\/ui*\/.*.ts$|grouparoo\/ui*\/.*.tsx$/,
      use: [options.defaultLoaders.babel],
    });

    config.module.rules.push({
      test: /..\/ui-components\/.*.ts$|..\/ui-components\/.*.tsx$/,
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

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
