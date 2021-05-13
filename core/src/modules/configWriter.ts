import { api } from "actionhero";
import fs from "fs";
import path from "path";

import { App } from "../models/App";
import { Source } from "../models/Source";
import { Schedule } from "../models/Schedule";
import { Property } from "../models/Property";
import { Group } from "../models/Group";
import { Destination } from "../models/Destination";

import { ConfigurationObject } from "../classes/codeConfig";

import { getConfigDir } from "./configLoaders";

type WritableConfigObject = {
  filePath: string;
  object: ConfigurationObject;
};

export namespace ConfigWriter {
  export async function run() {
    // Any models we see before starting would be from existing code config
    // files.
    if (!api.process.started) return;

    const configObjects: WritableConfigObject[] = await getConfigObjects();
    await writeFiles(configObjects);

    return configObjects;
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
    let objects = [];
    const queries = {
      apps: await App.findAll(),
      sources: await Source.findAll(),
      schedules: await Schedule.findAll(),
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
}
