import path from "path";
import fs from "fs-extra";
import os from "os";
import replaceInFiles from "replace-in-files";
import glob from "glob";
import { api, log } from "actionhero";
import { loadConfigDirectory } from "@grouparoo/core/dist/modules/configLoaders";
import { getConfigDir } from "@grouparoo/core/dist/modules/pluginDetails";
import { prettier } from "./shared";
import Connection from "./connection";
import { updateEnvVariables } from "./env";

export async function deleteConfigDir() {
  const configDir = await getConfigDir(true);
  deleteDir(configDir);
}

export async function writeConfigFiles(
  dataset: string,
  db: Connection,
  subDirs: string[]
) {
  const configDir = await getConfigDir(true);
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
  await updateDatabase(db, configDir);
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

async function updateDatabase(db: Connection, configDir) {
  if (!db) {
    return;
  }

  const name = db.name();

  // update with app options
  const appPath = path.join(configDir, "apps", "demo_db.json");
  if (fs.existsSync(appPath)) {
    const appOptions = db.getAppOptions();
    const contents = fs.readJSONSync(appPath);
    const app = contents;
    app.options = appOptions;
    const out = JSON.stringify(contents);
    fs.writeFileSync(appPath, out);
  }

  // update plugin name
  const files = path.resolve(path.join(configDir, "**", "*.json"));
  const options = { files, from: "DBNAME", to: name };
  await replaceInFiles(options);

  // if needed, uppercase database elements
  if (["snowflake"].includes(name)) {
    await uppercaseDatabase(configDir, name);
  }
}

async function uppercaseDatabase(configDir: string, name: string) {
  // type: snowflake-import-table
  // options.table, mapping.keys

  // schedule with sourceId with type: snowflake-import-table
  // options.column, filters(all).key

  // property with sourceId with type: snowflake-import-table
  // options.column, options.sortColumn, filters(all).key,

  const sourcesPath = path.resolve(path.join(configDir, "sources", "*.json"));
  const propertiesPath = path.resolve(
    path.join(configDir, "properties", "*.json")
  );

  const sourceIds = [];
  const sourceFiles = glob.sync(sourcesPath);
  for (const file of sourceFiles) {
    console.log(file);
    const contents = fs.readJSONSync(file);
    let source = null;
    let schedule = null;
    let write = false;
    if (contents.length === undefined) {
      source = contents;
    } else {
      // it's an array
      source = contents.find(
        (config) => config.class.toLowerCase() === "source"
      );
      schedule = contents.find(
        (config) => config.class.toLowerCase() === "schedule"
      );
    }
    // find the source
    if (source && source.type === `${name}-import-table`) {
      write = true;
      sourceIds.push(source.id);
      if (source.options?.table) {
        source.options.table = source.options.table.toUpperCase();
      }
      for (const key in source.mapping || {}) {
        const value = source.mapping[key];
        delete source.mapping[key];
        source.mapping[key.toUpperCase()] = value;
      }
    }
    if (schedule && sourceIds.includes(schedule.sourceId)) {
      write = true;
      if (schedule.options?.column) {
        schedule.options.column = schedule.options.column.toUpperCase();
      }
      for (const filter of schedule.filters || []) {
        if (filter.key) {
          filter.key = filter.key.toUpperCase();
        }
      }
    }
    if (write) {
      const out = JSON.stringify(contents);
      fs.writeFileSync(file, out);
    }
  }

  const propertyFiles = glob.sync(propertiesPath);
  for (const file of propertyFiles) {
    console.log(file);
    let write = false;
    const contents = fs.readJSONSync(file);
    const property = contents;
    if (sourceIds.includes(property.sourceId)) {
      write = true;
      if (property.options?.column) {
        property.options.column = property.options.column.toUpperCase();
      }
      if (property.options?.sortColumn) {
        property.options.sortColumn = property.options.sortColumn.toUpperCase();
      }
      for (const filter of property.filters || []) {
        if (filter.key) {
          filter.key = filter.key.toUpperCase();
        }
      }
    }
    if (write) {
      const out = JSON.stringify(contents);
      fs.writeFileSync(file, out);
    }
  }
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
