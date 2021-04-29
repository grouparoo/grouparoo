const fs = require("fs");
const path = require("path");

function readPackage(pkg) {
  if (pkg.name === "grouparoo") {
    const distDir = path.join(__dirname, "cli", "dist");
    const binFile = path.join(distDir, "grouparoo.js");
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir);
      fs.closeSync(fs.openSync(binFile, "w"));
    }
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
