const path = require("path");
const fs = require("fs-extra");

const CONFIG_ROOT = path.resolve(path.join(__dirname, "..", "config"));

function readConfig(name) {
  const filePath = path.join(CONFIG_ROOT, `${name}.json`);
  const contents = fs.readFileSync(filePath);
  return JSON.parse(contents.toString());
}
module.exports = { readConfig };
