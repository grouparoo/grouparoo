const fs = require("fs-extra");
const path = require("path");
const {
  getPluginManifest,
  grouparooMonorepoApp,
  runningCoreDirectly,
} = require("../api/src/utils/pluginDetails");
const pluginManifest = getPluginManifest();

// prepare the paths we'll be using
// the top-level folder needs to exist for webpack to scan, even if there are no plugins
fs.mkdirpSync(path.join(__dirname, "tmp", "plugin"));

// write the plugins manifest to a file for the web to consume
fs.writeFileSync(
  path.join(__dirname, "tmp", "pluginManifest.json"),
  JSON.stringify(pluginManifest, null, 2)
);

// For every plugin provided, we need to make an file within the core project that has a direct import for it.
// The plugin components are already JS transpiled, so we do not need to transpile them (babel), only load them (webpack).
// We do not want to use wildcard strings in the import statement to save webpack from scanning all of our directories
pluginManifest.plugins.forEach((plugin) => {
  const pluginName = plugin.name;
  if (plugin && plugin.grouparoo && plugin.grouparoo.webComponents) {
    for (const k in plugin.grouparoo.webComponents) {
      plugin.grouparoo.webComponents[k].forEach((file) => {
        const pluginFile =
          grouparooMonorepoApp || runningCoreDirectly()
            ? `../../../../../../../../plugins/${pluginName}/dist/components/${file}.plugin.js`
            : `../../../../../../../../../${pluginName}/dist/components/${file}.plugin.js`;
        fs.mkdirpSync(path.join(__dirname, "tmp", "plugin", k, pluginName));
        fs.writeFileSync(
          path.join(__dirname, "tmp", "plugin", k, pluginName, `${file}.tsx`),
          `export { default } from "${pluginFile}"
console.info("[ Grouparoo Plugin ] '${file}' from ${pluginName}");
`
        );
      });
    }
  }
});

// build the web ENVIRONMENT object
const _exports = {
  API_VERSION: `v${process.env.API_VERSION || 1}`,
  GROUPAROO_MONOREPO_APP: grouparooMonorepoApp,
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
