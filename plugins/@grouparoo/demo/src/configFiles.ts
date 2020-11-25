import { api, log, config } from "actionhero";
import path from "path";
import fs from "fs-extra";
import { getParentPath } from "@grouparoo/core/api/src/utils/pluginDetails";
import { getAppOptions } from "./sample_data";
import { prettier } from "./util/shared";

export function getConfigDir() {
  const configDir =
    process.env.GROUPAROO_CONFIG_DIR || path.join(getParentPath(), "config");
  return configDir;
}

export async function configFiles() {
  deleteConfigDir();
  const configDir = getConfigDir();
  console.log({ configDir });
  fs.mkdirpSync(configDir);
  copy(configDir);
  update(configDir);
  await prettier(configDir);
}

export function deleteConfigDir() {
  const configDir = getConfigDir();
  if (fs.existsSync(configDir)) {
    fs.rmdirSync(configDir, { recursive: true });
  }
}

function copy(configDir) {
  const dirPath = path.resolve(path.join(__dirname, "..", "config"));
  fs.copySync(dirPath, configDir);
}

function update(configDir) {
  updatePurchases(configDir);
}

function updatePurchases(configDir) {
  const purchasesDir = path.join(configDir, "purchases");
  const appPath = path.join(purchasesDir, "app.json");
  const appOptions = getAppOptions();
  const contents = fs.readJSONSync(appPath);
  const app = contents.find((j) => j.class === "App");
  app.options = appOptions;
  const out = JSON.stringify(contents);
  fs.writeFileSync(appPath, out);
}
