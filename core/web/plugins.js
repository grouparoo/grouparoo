const fs = require("fs-extra");
const path = require("path");
const {
  getPluginManifest,
  grouparooMonorepoApp,
  // getParentPath,
  runningCoreDirectly,
} = require("../api/src/utils/pluginDetails");
const pluginManifest = getPluginManifest();

// prepare the paths we'll be using and start clean
if (fs.existsSync(path.join(__dirname, "tmp"))) {
  fs.rmdirSync(path.join(__dirname, "tmp"), { recursive: true });
}
fs.mkdirpSync(path.join(__dirname, "tmp"));

// the top-level folder needs to exist for webpack to scan, even if there are no plugins
fs.mkdirpSync(path.join(__dirname, "tmp", "plugin"));

// write the plugins manifest to a file for the web to consume
fs.writeFileSync(
  path.join(__dirname, "tmp", "pluginManifest.json"),
  JSON.stringify(pluginManifest, null, 2)
);

// write if we are running core directly to a file
fs.writeFileSync(
  path.join(__dirname, "tmp", "runningCoreDirectly.ts"),
  `export const runningCoreDirectly = ${runningCoreDirectly()};`
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
console.info("[Grouparoo Plugin] '${file}' from ${pluginName}");
`
        );
      });
    }
  }
});
