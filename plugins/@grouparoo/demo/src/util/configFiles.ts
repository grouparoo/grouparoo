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
  db: Connection,
  setup: boolean,
  sources: string[],
  destinations: string[]
) {
  const configDir = await getConfigDir(true);
  await generateConfig(db, configDir, setup, sources, destinations);
  await prettier(configDir);
}

export async function loadConfigFiles(
  db: Connection,
  setup: boolean,
  sources: string[],
  destinations: string[]
) {
  const demoDir = process.env.JEST_WORKER_ID
    ? `demo-${process.env.JEST_WORKER_ID}`
    : "demo";
  const configDir = path.resolve(path.join(os.tmpdir(), "grouparoo", demoDir));
  await generateConfig(db, configDir, setup, sources, destinations);

  const locked = api.codeConfig.allowLockedModelChanges;
  api.codeConfig.allowLockedModelChanges = true;

  const { errors } = await loadConfigDirectory(configDir);
  if (errors && errors.length) {
    throw new Error(errors.join(", "));
  }

  api.codeConfig.allowLockedModelChanges = locked;

  await unlockAll();
}

async function generateConfig(
  db: Connection,
  configDir,
  setup: boolean,
  sources: string[],
  destinations: string[]
) {
  log(`Config Directory: ${configDir}`, "debug");
  deleteDir(configDir);

  if (setup) {
    copyDir(configDir, "setup");
  }

  if (sources.length > 0) {
    copyDir(configDir, "shared");
  }

  for (const sourceName of sources) {
    copySource(configDir, sourceName);
    if (db) {
      copyDir(configDir, db.name(), sourceName);
    }
  }

  for (const destinationName of destinations) {
    copyDestination(configDir, destinationName, sources);
  }

  await updateDatabase(db, configDir);
  await updateEnvVariables(configDir);
}

function deleteDir(configDir) {
  if (fs.existsSync(configDir)) {
    fs.rmSync(configDir, { recursive: true });
  }
}

function copySource(configDir, sourceName: string) {
  copyDir(configDir, sourceName);
}

function copyDestination(
  configDir: string,
  destinationName: string,
  sources: string[]
) {
  copyDir(configDir, destinationName, "all");
  for (const sourceName of sources) {
    copyDir(configDir, destinationName, sourceName);
  }
}

function copyDir(configDir: string, one: string, two?: string) {
  const rootPath = path.resolve(path.join(__dirname, "..", "..", "config"));
  fs.mkdirpSync(configDir);

  let from;
  if (two) {
    from = path.join(rootPath, one, two);
  } else {
    from = path.join(rootPath, one);
  }
  if (fs.existsSync(from)) {
    fs.copySync(from, configDir);
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
    const appOptions = {};
    const params = db.getAppOptions();
    for (const key of Object.keys(params).sort()) {
      appOptions[key] = params[key];
    }
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
