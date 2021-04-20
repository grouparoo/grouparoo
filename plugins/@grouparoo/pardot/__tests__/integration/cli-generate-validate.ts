import path from "path";
import fs from "fs";
import { CLISpecHelper } from "@grouparoo/spec-helper";

const pluginPath = path.join(__dirname, "..", "..");
const pluginName = JSON.parse(
  fs.readFileSync(path.join(pluginPath, "package.json")).toString()
).name;
CLISpecHelper.validateGenerators(pluginName, pluginPath);
