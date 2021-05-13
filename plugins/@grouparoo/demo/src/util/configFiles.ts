import path from "path";
import fs from "fs-extra";
import os from "os";
import { api } from "actionhero";
import {
  loadConfigDirectory,
  getConfigDir,
} from "@grouparoo/core/dist/modules/configLoaders";
import { prettier, log } from "./shared";
import Connection from "./connection";
import { updateEnvVariables } from "./env";

export async function deleteConfigDir() {
  const configDir = getConfigDir();
  deleteDir(configDir);
}

export async function writeConfigFiles(
  dataset: string,
  db: Connection,
  subDirs: string[]
) {
  const configDir = getConfigDir();
  await generateConfig(dataset, db, configDir, subDirs);
  if (subDirs.length > 0) {
    await prettier(configDir);
  }
}

export async function loadConfigFiles(
  dataset: string,
  db: Connection,
  subDirs: string[]
) {
  subDirs = [...new Set(subDirs)]; // unique

  const configDir = path.resolve(path.join(os.tmpdir(), "grouparoo", "demo"));
  await generateConfig(dataset, db, configDir, subDirs);

  const locked = api.codeConfig.allowLockedModelChanges;
  api.codeConfig.allowLockedModelChanges = true;

  await loadConfigDirectory(configDir);

  api.codeConfig.allowLockedModelChanges = locked;

  await unlockAll();
}

async function generateConfig(
  dataset: string,
  db: Connection,
  configDir,
  subDirs: string[]
) {
  log(1, `Config Directory: ${configDir}`);
  deleteDir(configDir);

  for (const subDir of subDirs) {
    copyDir(configDir, db, dataset, subDir);
  }
  updateDatabase(db, configDir);
  await updateEnvVariables(configDir);
}

function deleteDir(configDir) {
  if (fs.existsSync(configDir)) {
    fs.rmdirSync(configDir, { recursive: true });
  }
}

function copyDir(configDir, db: any, dataset: string, subDir: string) {
  const rootPath = path.resolve(path.join(__dirname, "..", "..", "config"));
  fs.mkdirpSync(configDir);

  copyDirIfExists(path.join(rootPath, "shared", "all", subDir), configDir);
  copyDirIfExists(path.join(rootPath, "shared", db.name(), subDir), configDir);
  copyDirIfExists(path.join(rootPath, dataset, "all", subDir), configDir);
  copyDirIfExists(path.join(rootPath, dataset, db.name(), subDir), configDir);
}

function copyDirIfExists(from, to) {
  if (fs.existsSync(from)) {
    fs.copySync(from, to);
  }
}

function updateDatabase(db: Connection, configDir) {
  const appPath = path.join(configDir, "apps", "demo_db.json");

  if (!db || !fs.existsSync(appPath)) {
    return;
  }

  const appOptions = db.getAppOptions();
  const contents = fs.readJSONSync(appPath);
  const app = contents;
  app.options = appOptions;
  const out = JSON.stringify(contents);
  fs.writeFileSync(appPath, out);
}

async function unlockAll() {
  // unlock these for the demo so they can be shared
  const models = api.sequelize.models;
  for (const name in models) {
    const Model = models[name];
    // if (["Team"].includes(name)) {
    //   continue;
    // }
    const attributes = Model.rawAttributes;
    if (attributes.locked) {
      log(3, `Unlocking ${name}`);
      await Model.scope(null).update(
        { locked: null },
        {
          where: { locked: "config:code" },
          hooks: false,
          validate: false,
          sideEffects: false,
          silent: true,
        }
      );
    }
  }
}
