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

type WritableConfigObject = {
  filePath: string;
  object: ConfigurationObject;
};

type CachedConfigFile = {
  absFilePath: string;
  objects: ConfigurationObject[];
};

let CONFIG_FILE_CACHE: CachedConfigFile[] = [];

export namespace ConfigWriter {
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
    // Note: Sources bring their schedule.
    const queries = {
      apps: await App.findAll(),
      sources: await Source.findAll(),
      properties: await Property.findAll(),
      groups: await Group.findAll(),
      destinations: await Destination.findAll(),
    };

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
    return null;
  }

  function isLockable(object: ConfigurationObject) {
    const isMatch = (o) => o.id === object.id && o.class === object.class;
    const cachedFileObj: CachedConfigFile = CONFIG_FILE_CACHE.find(
      (cache) => cache.objects.filter(isMatch).length > 0
    );
    // If there is no cached file, we assume the file doesn't exist and so the
    // object is not lockable.
    if (!cachedFileObj) return false;
    // Otherwise, it is lockable if it is a JS file.
    const ext = path.extname(cachedFileObj.absFilePath);
    return ext === ".js";
  }

  export async function cacheConfigFile(cacheObj: CachedConfigFile) {
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
