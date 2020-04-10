const fs = require("fs");
const path = require("path");

const grouparooMonorepoApp = process.env.GROUPAROO_MONOREPO_APP;

function readPackageJson(path) {
  if (!fs.existsSync(path)) {
    return {};
  }

  return JSON.parse(fs.readFileSync(path).toString());
}

function getParentPath() {
  return grouparooMonorepoApp
    ? path.join(__dirname, "..", "..", "..", "..", "apps", grouparooMonorepoApp)
    : path.join(__dirname, "..", "..", "..", "..", "..", "..");
}

function getPluginManifest() {
  const manifest = {
    parent: {
      path: null,
      grouparoo: { plugins: [] },
    },
    plugins: [],
  };

  // parent
  const parentPath = getParentPath();
  const parentPkg = readPackageJson(path.join(parentPath, "package.json"));
  manifest.parent = { grouparoo: parentPkg.grouparoo, path: parentPath };

  // plugins
  if (manifest.parent.grouparoo && manifest.parent.grouparoo.plugins) {
    for (const i in manifest.parent.grouparoo.plugins) {
      const pluginName = manifest.parent.grouparoo.plugins[i];
      const pluginPath = path.join(parentPath, "node_modules", pluginName);
      const pluginPkg = readPackageJson(path.join(pluginPath, "package.json"));
      manifest.plugins.push({
        name: pluginPkg.name,
        version: pluginPkg.version,
        license: pluginPkg.license,
        url:
          pluginPkg.url ||
          (pluginPkg.repository && pluginPkg.repository.url
            ? pluginPkg.repository.url
            : null) ||
          pluginPkg.homepage,
        path: pluginPath,
        grouparoo: pluginPkg.grouparoo || null,
      });
    }
  }

  return manifest;
}

exports.grouparooMonorepoApp = grouparooMonorepoApp;
exports.readPackageJson = readPackageJson;
exports.getParentPath = getParentPath;
exports.getPluginManifest = getPluginManifest;
