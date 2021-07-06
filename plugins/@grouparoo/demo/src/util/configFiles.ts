import path from "path";
import fs from "fs-extra";
import os from "os";
import { api, log } from "actionhero";
import { loadConfigDirectory } from "@grouparoo/core/dist/modules/configLoaders";
import { getConfigDir } from "@grouparoo/core/dist/utils/pluginDetails";
import { prettier } from "./shared";
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

  const demoDir = process.env.JEST_WORKER_ID
    ? `demo-${process.env.JEST_WORKER_ID}`
    : "demo";
  const configDir = path.resolve(path.join(os.tmpdir(), "grouparoo", demoDir));
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
  log(`Config Directory: ${configDir}`, "debug");
  deleteDir(configDir);

  for (const subDir of subDirs) {
    copyDir(configDir, dataset, db, subDir);
  }
  updateDatabase(db, configDir);
  await updateEnvVariables(configDir);
}

function deleteDir(configDir) {
  if (fs.existsSync(configDir)) {
    fs.rmSync(configDir, { recursive: true });
  }
}

function copyDir(configDir, dataset: string, db: any, subDir: string) {
  const rootPath = path.resolve(path.join(__dirname, "..", "..", "config"));
  fs.mkdirpSync(configDir);

  copyDirIfExists(configDir, rootPath, "shared", "all", subDir);
  copyDirIfExists(configDir, rootPath, "shared", db, subDir);
  copyDirIfExists(configDir, rootPath, dataset, "all", subDir);
  copyDirIfExists(configDir, rootPath, dataset, db, subDir);
}

function copyDirIfExists(
  toConfigDir: string,
  rootPath: string,
  dataset: string,
  db: any,
  subDir: string
) {
  if (!dataset || !db) {
    return;
  }
  const dbName = typeof db === "string" ? db : db.name();
  const from = path.join(rootPath, dataset, dbName, subDir);
  if (fs.existsSync(from)) {
    fs.copySync(from, toConfigDir);
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
      log(`Unlocking ${name}`, "debug");
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
