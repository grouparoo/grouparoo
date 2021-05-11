// import { api, config } from "actionhero";
// import { Model } from "sequelize-typescript";
import { App } from "../models/App";
import { Source } from "../models/Source";
import { Schedule } from "../models/Schedule";
import { Property } from "../models/Property";
import { Group } from "../models/Group";
import { GroupRule } from "../models/GroupRule";
import { Destination } from "../models/Destination";
import { DestinationGroupMembership } from "../models/DestinationGroupMembership";

// import { Option } from "../models/Option";
import { ConfigurationObject } from "../classes/codeConfig";
// import fs from "fs";
// import path from "path";

// import { getConfigDir } from "./configLoaders";

/**
 * TODO:
 *
 * - ✅  Ignore the original code-config files at boot
 * - ✅  (thanks sequelize) Skip "dirty" (eg: un-changed) models
 * - ✅  Make JSON pretty
 * - ⬜️  Make this run for all models in the database.
 * - ⬜️  Be able to boot the app when the object was created from file. (Note:
 *   This is only an issue when using a file-based DB, but would be nice to have
 *   for dev.)
 * - ⬜️  Distinguish between JSON and JS files
 * - ⬜️  Account for the file name not matching the ID
 * - ⬜️  Account for the file having multiple objects in it
 */

// const writeFile = async ({ configFilePath, object }) => {
//   const filePath = path.join(getConfigDir(), configFilePath);
//   const dir = path.dirname(filePath);
//   if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
//   const stringifyFilter = (k, v) => (v === null ? undefined : v)
//   const content = JSON.stringify(object, stringifyFilter, 2)
//   return fs.writeFileSync(filePath, content);
// };

export namespace ConfigWriter {
  export async function buildBaseObject(object) {}

  export async function write() {
    // Any models we see before starting would be from existing code config
    // files.
    // if (!api.process.started) return;

    let config: { [key: string]: ConfigurationObject } = {};

    // ---------------------------------------- | Apps

    const apps = await App.findAll();

    let app: App;

    for (app of apps) {
      const appConfig = await app.getConfigObject();
      config[`apps/${app.id}.json`] = appConfig;
    }

    // ---------------------------------------- | Sources & Schedules

    const sources = await Source.findAll({ include: Schedule });

    let source: Source;

    for (source of sources) {
      const sourceConfig = await source.getConfigObject();
      config[`sources/${source.id}.json`] = sourceConfig;

      const { schedule } = source;
      if (schedule) {
        const scheduleConfig = await schedule.getConfigObject();
        config[`schedules/${schedule.id}.json`] = scheduleConfig;
      }
    }

    // ---------------------------------------- | Properties

    const properties = await Property.findAll();

    let property: Property;

    for (property of properties) {
      config[
        `properties/${property.id}.json`
      ] = await property.getConfigObject();
    }

    // ---------------------------------------- | Groups

    const groups = await Group.findAll({ include: GroupRule });

    let group: Group;

    for (group of groups) {
      config[`groups/${group.id}.json`] = await group.getConfigObject();
    }

    // ---------------------------------------- | Destinations

    const destinations = await Destination.findAll({
      include: DestinationGroupMembership,
    });

    let destination: Destination;

    for (destination of destinations) {
      config[
        `destinations/${destination.id}.json`
      ] = await destination.getConfigObject();
    }

    // console.log(config);
    console.log(
      JSON.stringify(config, (k, v) => (v === null ? undefined : v), 2)
    );

    // console.log(instance);
    // --- await writeFile({ object, configFilePath: `apps/${id}.json` });
  }
}
