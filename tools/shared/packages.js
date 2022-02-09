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

function allUiFiles(glob) {
  const packageFiles = [].concat(
    glob.sync(path.join(rootPath, "ui", "*", "package.json"))
  );
  return packageFiles;
}

function allPackageFiles(glob) {
  const packageFiles = [].concat(
    appPackageFiles(glob),
    allUiFiles(glob),
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

function readPackageJSON(file) {
  return JSON.parse(fs.readFileSync(file).toString());
}

function writePackageJSON(file, data) {
  return fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n");
}

module.exports = {
  allPackageFiles,
  allPackagePaths,
  allPluginPaths,
  allUiFiles,
  appPackageFiles,
  readPackageJSON,
  writePackageJSON,
};
