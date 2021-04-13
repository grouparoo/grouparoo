const fs = require("fs");
const path = require("path");

let initialPackageJSON = {};
if (process.env.INIT_CWD) {
  initialPackageJSON = readPackageJson(
    path.join(process.env.INIT_CWD, "package.json")
  );
} else if (process.env.JEST_WORKER_ID && process.env.PWD) {
  initialPackageJSON = readPackageJson(
    path.join(process.env.PWD, "package.json")
  );
}
const grouparooMonorepoApp = initialPackageJSON.grouparoo
  ? initialPackageJSON.grouparoo.grouparoo_monorepo_app
  : null;

function readPackageJson(path) {
  if (!fs.existsSync(path)) return {};
  return JSON.parse(fs.readFileSync(path).toString());
}

function getParentPath() {
  if (process.env.GROUPAROO_PARENT_PATH) {
    if (path.isAbsolute(process.env.GROUPAROO_PARENT_PATH)) {
      return process.env.GROUPAROO_PARENT_PATH;
    } else {
      return fs.realpathSync(
        path.join(process.cwd(), process.env.GROUPAROO_PARENT_PATH)
      );
    }
  }

  if (grouparooMonorepoApp) {
    return path.join(__dirname, "..", "..", "..", "apps", grouparooMonorepoApp);
  }
  if (runningCoreDirectly()) return getCoreRootPath();
  return path.join(__dirname, "..", "..", "..", "..", "..");
}

function getCoreRootPath() {
  return fs.realpathSync(path.join(__dirname, "..", ".."));
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

      if (pluginName === "@grouparoo/core") continue;

      let pluginPath = "";
      try {
        pluginPath = require.resolve(pluginName);
      } catch {
        pluginPath = path.join(parentPath, "node_modules", pluginName);
        if (!fs.existsSync(pluginPath)) {
          pluginPath = path.join(
            grouparooMonorepoApp
              ? path.join(
                  __dirname,
                  "..",
                  "..",
                  "..",
                  "apps",
                  grouparooMonorepoApp
                )
              : path.join(__dirname, "..", "..", "..", "..", "..", ".."),
            "node_modules",
            pluginName
          );
        }
      }

      pluginPath = fs.realpathSync(pluginPath);
      const pluginPkg = readPackageJson(path.join(pluginPath, "package.json"));

      if (pluginPkg.name) {
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

    manifest.plugins.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
    });
  }

  return manifest;
}

function runningCoreDirectly() {
  const monorepoPackageJSON = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "package.json"
  );
  if (fs.existsSync(monorepoPackageJSON)) {
    const pkgPkg = readPackageJson(monorepoPackageJSON);
    if (pkgPkg.name === "@grouparoo/grouparoo") {
      return true;
    }
  }

  return false;
}

function getCoreVersion() {
  const corePkgJson = readPackageJson(
    path.join(__dirname, "..", "..", "package.json")
  );
  return corePkgJson.version;
}

function getNodeVersion() {
  return process.version;
}

exports.grouparooMonorepoApp = grouparooMonorepoApp;
exports.readPackageJson = readPackageJson;
exports.getParentPath = getParentPath;
exports.getPluginManifest = getPluginManifest;
exports.runningCoreDirectly = runningCoreDirectly;
exports.getCoreVersion = getCoreVersion;
exports.getCoreRootPath = getCoreRootPath;
exports.getNodeVersion = getNodeVersion;
