const path = require("path");
const fs = require("fs");

const rootPath = path.resolve(path.join(__dirname, "..", ".."));

function allPluginFiles(glob) {
  const packageFiles = [].concat(
    glob.sync(path.join(rootPath, "plugins", "*", "*", "package.json"))
  );
  return packageFiles;
}

function appPackageFiles(glob) {
  const packageFiles = [].concat(
    allPluginFiles(glob),
    glob.sync(path.join(rootPath, "package.json")),
    glob.sync(path.join(rootPath, "*", "package.json")),
    glob.sync(path.join(rootPath, "apps", "*", "package.json"))
  );
  return packageFiles;
}

function allPackageFiles(glob) {
  const packageFiles = [].concat(
    appPackageFiles(glob),
    glob.sync(path.join(rootPath, "internal", "*", "package.json")),
    glob.sync(path.join(rootPath, "tools", "*", "package.json"))
  );
  return packageFiles;
}

function allPackagePaths(glob) {
  const allJson = allPackageFiles(glob);
  return allJson.map((f) => path.resolve(path.join(f, "..")));
}

function allPluginPaths(glob) {
  const allJson = allPluginFiles(glob);
  return allJson.map((f) => path.resolve(path.join(f, "..")));
}

module.exports = {
  allPackageFiles,
  allPackagePaths,
  allPluginPaths,
  appPackageFiles,
};
