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

export async function writeConfigFiles(db: Connection, subDirs: string[]) {
  const configDir = getConfigDir();
  await generateConfig(db, configDir, subDirs);
  await prettier(configDir);
}

export async function loadConfigFiles(db: Connection, subDirs: string[]) {
  const configDir = path.resolve(path.join(os.tmpdir(), "grouparoo", "demo"));
  await generateConfig(db, configDir, subDirs);

  const locked = api.codeConfig.allowLockedModelChanges;
  api.codeConfig.allowLockedModelChanges = true;

  await loadConfigDirectory(configDir);

  api.codeConfig.allowLockedModelChanges = locked;

  await unlockAll();
}

async function generateConfig(db: Connection, configDir, subDirs: string[]) {
  log(1, `Config Directory: ${configDir}`);
  deleteDir(configDir);

  for (const subDir of subDirs) {
    copyDir(configDir, subDir);
    switch (subDir) {
      case "purchases":
        updatePurchases(db, configDir);
        break;
    }
  }
}

function deleteDir(configDir) {
  if (fs.existsSync(configDir)) {
    fs.rmdirSync(configDir, { recursive: true });
  }
}

function copyDir(configDir, subDir: string) {
  let dirPath = path.resolve(
    path.join(__dirname, "..", "..", "config", subDir)
  );
  fs.mkdirpSync(configDir);
  fs.copySync(dirPath, configDir);
}

function updatePurchases(db: Connection, configDir) {
  const appPath = path.join(configDir, "apps", "demo_db.json");
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
