// import { api, config } from "actionhero";
// import { Model } from "sequelize-typescript";
import fs from "fs";
import path from "path";

import { App } from "../models/App";
import { Source } from "../models/Source";
import { Schedule } from "../models/Schedule";
import { Property } from "../models/Property";
import { Group } from "../models/Group";
import { Destination } from "../models/Destination";

// import { Option } from "../models/Option";
import { ConfigurationObject } from "../classes/codeConfig";

import { getConfigDir } from "./configLoaders";

/**
 * TODO:
 *
 * - ✅  Ignore the original code-config files at boot
 * - ✅  (thanks sequelize) Skip "dirty" (eg: un-changed) models
 * - ✅  Make JSON pretty
 * - ✅  Make this run for all models in the database.
 * - ⬜️  Be able to boot the app when the object was created from file. (Note:
 *   This is only an issue when using a file-based DB, but would be nice to have
 *   for dev.)
 * - ⬜️  Distinguish between JSON and JS files
 * - ⬜️  Account for the file name not matching the ID
 * - ⬜️  Account for the file having multiple objects in it
 */

type WritableConfigObject = {
  filePath: string;
  object: ConfigurationObject;
};

export namespace ConfigWriter {
  export async function run() {
    // Any models we see before starting would be from existing code config
    // files.
    // if (!api.process.started) return;

    const configObjects: WritableConfigObject[] = await getConfigObjects();
    await writeFiles(configObjects);
  }

  async function writeFile({ filePath, object }: WritableConfigObject) {
    const configFilePath = path.join(getConfigDir(), filePath);
    const dir = path.dirname(configFilePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const stringifyFilter = (k, v) => (v === null ? undefined : v);
    const content = JSON.stringify(object, stringifyFilter, 2);
    return fs.writeFileSync(configFilePath, content);
  }

  async function writeFiles(configObjects: WritableConfigObject[]) {
    for (let configObject of configObjects) {
      await writeFile(configObject);
    }
  }

  export async function getConfigObjects(): Promise<WritableConfigObject[]> {
    const apps = await App.findAll();
    const sources = await Source.findAll();
    const schedules = await Schedule.findAll();
    const properties = await Property.findAll();
    const groups = await Group.findAll();
    const destinations = await Destination.findAll();
    const instances = [].concat(
      apps,
      sources,
      schedules,
      properties,
      groups,
      destinations
    );
    let objects = [];
    for (let instance of instances) {
      await instance.setConfigFilePath();
      const configObject = await instance.getConfigObject();
      objects.push({ filePath: instance.configFilePath, object: configObject });
    }
    return objects;
  }
}
