import { api } from "actionhero";
import fs from "fs";
import path from "path";

import { App } from "../models/App";
import { Source } from "../models/Source";
import { Schedule } from "../models/Schedule";
import { Property } from "../models/Property";
import { Group } from "../models/Group";
import { Destination } from "../models/Destination";

import {
  ConfigurationObject,
  getCodeConfigLockKey,
} from "../classes/codeConfig";

import { getConfigDir } from "../utils/pluginDetails";
import { Profile } from "../models/Profile";

type WritableConfigObject = {
  filePath: string;
  object: ConfigurationObject;
};

type CachedConfigFile = {
  absFilePath: string;
  objects: ConfigurationObject[];
};

/**
 * Loading
 * ----------------------------------------
 * 1. Loader tells Writer to cache all files it read.
 * 2. Writer caches files that are writable (i.e. not locked). It ignores locked
 *    files.
 * 3. Individual loaders ask the writer for a lock key. Writer responds with the
 *    key unless it has a cached object.
 *
 *
 * Writing
 * ----------------------------------------
 * 1. Delete all files in the cache.
 * 2. Query the database for all writable objects. These are UNLOCKED Apps,
 *    Sources (and their Schedules), Properties, Groups, and Destinations.
 * 3. Each config object is retrieved from the model, written to file, and then
 *    cached.
 *
 */

let CONFIG_FILE_CACHE: CachedConfigFile[] = [];

export namespace ConfigWriter {
  export async function run() {
    // If we're not in config mode, do nothing.
    if (process.env.GROUPAROO_RUN_MODE !== "cli:config") return;
    // Any models we see before starting would be from existing code config
    // files.
    if (!api.process.started) return;

    await deleteFiles();

    console.log("deleted");
    const configObjects: WritableConfigObject[] = await getConfigObjects();
    console.log("got objs");
    await writeFiles(configObjects);
    console.log("wrote objs");
    return configObjects;
  }

  export async function getConfigObjects(): Promise<WritableConfigObject[]> {
    let objects = [];

    const queryParams = { where: { locked: null } };
    const queries = {
      apps: await App.findAll(queryParams),
      sources: await Source.findAll(queryParams),
      properties: await Property.findAll(queryParams),
      groups: await Group.findAll(queryParams),
      destinations: await Destination.findAll(queryParams),
      profiles: await Profile.findAll(),
    };

    console.log("profiles", queries.profiles);

    for (let [type, instances] of Object.entries(queries)) {
      for (let instance of instances) {
        const object = await instance.getConfigObject();
        const filePath = `${type}/${instance.id}.json`;
        objects.push({ filePath, object });
      }
    }
    return objects;
  }

  // ---------------------------------------- | Config File Cache

  export function getConfigFileCache() {
    return CONFIG_FILE_CACHE;
  }

  export function resetConfigFileCache() {
    CONFIG_FILE_CACHE = [];
  }

  export function getLockKey(configObject: ConfigurationObject): string | null {
    if (process.env.GROUPAROO_RUN_MODE !== "cli:config") {
      return getCodeConfigLockKey();
    }
    if (isLockable(configObject)) {
      return "config:writer";
    }
    // If we are in config mode and the file is not lockable (it is JSON file),
    // we return null. A null value is equivalent to the object being unlocked.
    return null;
  }

  function fileIsLockable(absFilePath: string): boolean {
    // Otherwise, it is lockable if it is a JS file.
    const ext = path.extname(absFilePath);
    return ext !== ".json";
  }

  function isLockable(object: ConfigurationObject) {
    const isMatch = (o) => o.id === object.id && o.class === object.class;
    const cachedFileObj: CachedConfigFile = CONFIG_FILE_CACHE.find(
      (cache) => cache.objects.filter(isMatch).length > 0
    );
    // If there is no cached file, we assume the file is locked. This is because
    // the Writer does not cache locked files.
    if (!cachedFileObj) return true;
    // Otherwise, check the file itself.
    return fileIsLockable(cachedFileObj.absFilePath);
  }

  export async function cacheConfigFile(cacheObj: CachedConfigFile) {
    if (fileIsLockable(cacheObj.absFilePath)) return null;
    CONFIG_FILE_CACHE.push(cacheObj);
  }

  // ---------------------------------------- | File Writers

  async function deleteFiles() {
    for (let { absFilePath } of CONFIG_FILE_CACHE) {
      if (fs.existsSync(absFilePath)) fs.rmSync(absFilePath);
    }
    resetConfigFileCache();
  }

  async function writeFile({ filePath, object }: WritableConfigObject) {
    const configFilePath = path.join(getConfigDir(), filePath);
    const dir = path.dirname(configFilePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const stringifyFilter = (k, v) => (v === null ? undefined : v);
    const content = JSON.stringify(object, stringifyFilter, 2);
    await fs.writeFileSync(configFilePath, content);
    cacheConfigFile({ absFilePath: configFilePath, objects: [object] });
    return true;
  }

  async function writeFiles(configObjects: WritableConfigObject[]) {
    for (let configObject of configObjects) {
      await writeFile(configObject);
    }
  }
}
