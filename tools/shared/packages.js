const glob = require("glob");
const path = require("path");
const fs = require("fs");

const rootPath = path.resolve(path.join(__dirname, "..", ".."));

function allPluginFiles() {
  const packageFiles = [].concat(
    glob.sync(path.join(rootPath, "plugins", "*", "*", "package.json"))
  );
  return packageFiles;
}

function allPackageFiles() {
  const packageFiles = [].concat(
    allPluginFiles(),
    glob.sync(path.join(rootPath, "package.json")),
    glob.sync(path.join(rootPath, "*", "package.json")),
    glob.sync(path.join(rootPath, "internal", "*", "package.json")),
    glob.sync(path.join(rootPath, "apps", "*", "package.json")),
    glob.sync(path.join(rootPath, "tools", "*", "package.json"))
  );
  return packageFiles;
}

function allPackagePaths() {
  const allJson = allPackageFiles();
  return allJson.map((f) => path.resolve(path.join(f, "..")));
}

function allPluginPaths() {
  const allJson = allPluginFiles();
  return allJson.map((f) => path.resolve(path.join(f, "..")));
}

module.exports = { allPackageFiles, allPackagePaths, allPluginPaths };
