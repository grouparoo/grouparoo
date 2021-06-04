import { api } from "actionhero";
import fs from "fs";
import path from "path";
import slugify from "slugify";

import { App } from "../models/App";
import { Destination } from "../models/Destination";
import { Group } from "../models/Group";
import { Property } from "../models/Property";
import { Source } from "../models/Source";

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
 * TODO:
 *
 * - [✔] Add slugify method to ConfigWriter
 * - [✔] Add specs for slugify method (simple, since we're using another lib)
 * - [✔] Use slugify method within the App model
 * - [✔] Extend to the other model (including profile)
 * - [✔] Work through associations - e.g. how does a source find its appId?
 *       Should it use the app's config object?
 * - [ ] Check specs and fix for the shape of these objects, if necessary
 * - [ ] Write specs for all test cases (below)
 *
 *
 * Test cases:
 *
 * - [ ] App requires certain associations and columns
 * - [ ] Source requires certain associations and columns
 * - [ ] Schedule (through a Source) requires certain associations and columns
 * - [ ] Property requires certain associations and columns
 * - [ ] Destination requires certain associations and columns
 * - [ ] Group requires certain associations and columns
 * - [ ] The ID values generated for all cases above are from getConfigId() and
 *       differ from the primary id for each object.
 * - [ ] ConfigWriter skips objects that don't have ID values
 * - [ ] If Source exists and is valid, but its Schedule doesn't have a name,
 *       the object is still just a single object.
 * - [ ] MappingHelper.generateFilePath()
 * - [ ] MappingHelper.getConfigMapping(), including that it returns null
 *       without a valid object, and that it works for arrays.
 *
 */

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

  export function generateId(name): string {
    if (!name) return;
    slugify.extend({ $: "", "%": "", "&": "", "<": "", ">": "" });
    return slugify(name, { lower: true, strict: true });
  }

  export function generateFilePath(
    object: ConfigurationObject,
    prefix?: string
  ): string {
    const name = Array.isArray(object) ? object[0].name : object.name;
    let filePath = `${generateId(name)}.json`;
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

    await deleteFiles();

    const configObjects: WritableConfigObject[] = await getConfigObjects();
    await writeFiles(configObjects);
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
    };

    for (let [type, instances] of Object.entries(queries)) {
      for (let instance of instances) {
        const object = await instance.getConfigObject();
        // Don't process arrays that have objects missing id values.
        if (Array.isArray(object) && object.filter((o) => !o.id).length > 0) {
          continue;
        }
        // Don't process objects that have missing id values.
        if (!Array.isArray(object) && !object?.id) continue;
        const filePath = generateFilePath(object, type);
        objects.push({ filePath, object });
      }
    }

    const profiles = await Profile.findAll();
    const profileObjects = await Promise.all(
      profiles.map((p) => p.getConfigObject())
    );
    if (profileObjects.length > 0) {
      objects.push({
        filePath: "development/profiles.json",
        object: profileObjects,
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
