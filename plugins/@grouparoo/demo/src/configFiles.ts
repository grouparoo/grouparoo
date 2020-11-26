import path from "path";
import fs from "fs-extra";
import os from "os";
import { api } from "actionhero";
import { getParentPath } from "@grouparoo/core/api/src/utils/pluginDetails";
import { loadConfigDirectory } from "@grouparoo/core/api/dist/modules/configLoaders/all";
import { getAppOptions } from "./sample_data";
import { prettier, log } from "./util/shared";

export function getConfigDir() {
  const configDir =
    process.env.GROUPAROO_CONFIG_DIR || path.join(getParentPath(), "config");
  return configDir;
}

export async function writeConfigFiles() {
  const configDir = getConfigDir();
  await generateConfig(configDir);
  await prettier(configDir);
}

export async function loadConfigFiles(setup = false) {
  const configDir = path.resolve(path.join(os.tmpdir(), "grouparoo", "demo"));
  await generateConfig(configDir, setup);

  const locked = api.codeConfig.allowLockedModelChanges;
  api.codeConfig.allowLockedModelChanges = true;

  await loadConfigDirectory(configDir);

  api.codeConfig.allowLockedModelChanges = locked;

  await unlockAll();
}

export async function loadSetupFiles() {
  return loadConfigFiles(true);
}

async function generateConfig(configDir, setup = false) {
  log(1, `Config Directory: ${configDir}`);
  deleteDir(configDir);
  fs.mkdirpSync(configDir);

  if (setup) {
    copyFile(configDir, "team.json");
  } else {
    copyDir(configDir);
    updatePurchases(configDir);
  }
}

function deleteDir(configDir) {
  if (fs.existsSync(configDir)) {
    fs.rmdirSync(configDir, { recursive: true });
  }
}

function copyFile(configDir, relativePath) {
  const dirPath = path.resolve(path.join(__dirname, "..", "config"));
  const srcPath = path.join(dirPath, relativePath);
  const destPath = path.join(configDir, relativePath);
  fs.copyFileSync(srcPath, destPath);
}

function copyDir(configDir) {
  const dirPath = path.resolve(path.join(__dirname, "..", "config"));
  fs.copySync(dirPath, configDir);
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

async function unlockAll() {
  // unlock these for the demo so they can be shared
  const models = api.sequelize.models;
  //console.log({ thing: api.sequelize });
  api.sequelize.options.logging = console.log;
  for (const name in models) {
    const Model = models[name];
    if (["Team"].includes(name)) {
      continue;
    }
    const attributes = Model.rawAttributes;
    if (attributes.locked) {
      log(3, `Unlocking ${name}`);
      await Model.scope(null).update(
        { locked: false },
        {
          where: { locked: true },
          hooks: false,
          validate: false,
          sideEffects: false,
          silent: true,
        }
      );
    }
  }
}
