import { api } from "actionhero";
import fs from "fs";
import path from "path";
import prettier from "prettier";
import { App } from "../models/App";
import { GrouparooModel } from "../models/GrouparooModel";
import { Destination } from "../models/Destination";
import { Group } from "../models/Group";
import { Property } from "../models/Property";
import { Setting } from "../models/Setting";
import { Source } from "../models/Source";

import {
  AnyConfigurationObject,
  getCodeConfigLockKey,
} from "../classes/codeConfig";

import { getConfigDir } from "../modules/pluginDetails";
import { GrouparooRecord } from "../models/GrouparooRecord";

type WritableConfigObject = {
  filePath: string;
  object: AnyConfigurationObject;
};

type CachedConfigFile = {
  absFilePath: string;
  objects: AnyConfigurationObject[];
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
  // ---------------------------------------- | Helpers

  export function generateId(name, separator: string = "_"): string {
    if (!name || name.length === 0) return;
    const id = name
      .toLowerCase()
      // replace bad characters with a space
      .replace(/[^a-zA-Z0-9\-_ ]/g, " ")
      // remove spaces from beginning and end
      .trim()
      // replace spaces with underscore
      .replace(/[ ]/g, separator)
      // replace multiple word separators with an underscore
      .replace(/[\-_ ][\-_ ]+/g, separator);
    if (id.length === 0) throw new Error("Could not generate ID from name.");
    return id;
  }

  export function generateFilePath(
    object: AnyConfigurationObject | [AnyConfigurationObject],
    prefix?: string
  ): string {
    const id = Array.isArray(object) ? object[0]?.id : object?.id;
    if (!id) return;
    let filePath = `${id}.json`;
    if (prefix) filePath = `${prefix}/${filePath}`;
    return filePath;
  }

  // ---------------------------------------- | Controllers

  export async function run() {
    // If we're not in config mode, do nothing.
    if (process.env.GROUPAROO_RUN_MODE !== "cli:config") return;
    // Any models we see before starting would be from existing code config
    // files.
    if (!api.process.started) return;
    // Get the config objects before deleting any of the current objects. Then,
    // if we run into an error, we leave what we had before and don't rewrite
    // the config files until the objects are fixed through the UI.
    const configObjects: WritableConfigObject[] = await getConfigObjects();
    await deleteFiles();
    await writeFiles(configObjects);
    return configObjects;
  }

  export async function getConfigObjects(): Promise<WritableConfigObject[]> {
    let objects = [];

    const queryParams = { where: { locked: null } };
    let queries = {
      models: await GrouparooModel.findAll(queryParams),
      apps: await App.findAll(queryParams),
      sources: await Source.findAll(queryParams),
      properties: await Property.findAll(queryParams),
      groups: await Group.findAll(queryParams),
      destinations: await Destination.findAll(queryParams),
    };

    const clusterNameSetting: Setting = await Setting.findOne({
      where: { pluginName: "core", key: "cluster-name" },
    });
    if (clusterNameSetting.value !== clusterNameSetting.defaultValue) {
      queries["settings"] = [clusterNameSetting];
    }

    for (let [type, instances] of Object.entries(queries)) {
      for (let instance of instances) {
        const object = await instance.getConfigObject();
        // Don't process arrays that have objects missing id values.
        if (Array.isArray(object) && object.filter((o) => !o.id).length > 0) {
          continue;
        }
        // Don't process objects that have missing id values.
        if (!Array.isArray(object) && !object?.id) continue;
        const filePath = generateFilePath(
          object as AnyConfigurationObject,
          type
        );
        objects.push({ filePath, object });
      }
    }

    const records = await GrouparooRecord.findAll();
    const recordObjects = await Promise.all(
      records.map((p) => p.getConfigObject())
    );
    if (recordObjects.length > 0) {
      objects.push({
        filePath: "development/records.json",
        object: recordObjects,
      });
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

  export function getLockKey(
    configObject: AnyConfigurationObject
  ): string | null {
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

  function isLockable(object: AnyConfigurationObject) {
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
      if (fs.existsSync(absFilePath)) fs.unlinkSync(absFilePath);
    }
    resetConfigFileCache();
  }

  async function writeFile({ filePath, object }: WritableConfigObject) {
    const configDir = await getConfigDir(true);

    const configFilePath = path.join(configDir, filePath);
    const dir = path.dirname(configFilePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const stringifyFilter = (k, v) => (v === null ? undefined : v);
    const content = JSON.stringify(object, stringifyFilter, 2);
    console.log(content);
    await fs.writeFileSync(
      configFilePath,
      prettier.format(content, { parser: "json" })
    );
    cacheConfigFile({ absFilePath: configFilePath, objects: [object] });
    return true;
  }

  async function writeFiles(configObjects: WritableConfigObject[]) {
    for (let configObject of configObjects) {
      await writeFile(configObject);
    }
  }
}
