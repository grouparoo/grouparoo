const fs = require("fs");
const path = require("path");
const { getPluginManifest } = require("../api/src/utils/pluginDetails");
const pluginManifest = getPluginManifest();

// write the plugins manifest to a file for the web to consume
fs.writeFileSync(
  path.join(__dirname, "tmp", "pluginManifest.json"),
  JSON.stringify(pluginManifest, null, 2)
);

// write the require path loader for the webpack plugin loader
const pluginLoaderPaths = {
  monorepo: "../../../plugins/${pluginName}/src/components/${file}.plugin",
  dist: "../../node_modules/${pluginName}/src/components/${file}.plugin",
};
const pluginLoaderPath =
  pluginLoaderPaths[process.env.GROUPAROO_MONOREPO_APP ? "monorepo" : "dist"];

const loader = `import dynamic from "next/dynamic";

export default function LoadPlugin (pluginName: string, file: string) {
  return dynamic(() =>
    import(\`${pluginLoaderPath}\`)
  )
};
`;
fs.writeFileSync(path.join(__dirname, "tmp", "pluginLoader.ts"), loader);

// build the web ENVIRONMENT object
const _exports = {
  API_VERSION: process.env.API_VERSION || "1",
  GROUPAROO_MONOREPO_APP: process.env.GROUPAROO_MONOREPO_APP,
};

// pass plugin env/web to the build
pluginManifest.plugins.forEach((plugin) => {
  if (plugin.grouparoo && plugin.grouparoo.env && plugin.grouparoo.env.web) {
    plugin.grouparoo.env.web.forEach((e) => {
      _exports[e] = process.env[e];
    });
  }
});

module.exports = _exports;
