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
  export async function write() {
    // Any models we see before starting would be from existing code config
    // files.
    // if (!api.process.started) return;

    let config: { [key: string]: ConfigurationObject } = {};

    // ---------------------------------------- | Apps

    const apps = await App.findAll();

    let app: App;

    for (app of apps) {
      const { id, name, type } = app;

      // NOTE: Choosing to hit the db again in favor of using the shared logic,
      // rather than eager loading the associations.
      const options = await app.getOptions();

      config[`apps/${id}.json`] = {
        id,
        class: "app",
        type,
        name,
        options,
      };
    }

    // ---------------------------------------- | Sources & Schedules

    const sources = await Source.findAll({ include: Schedule });

    let source: Source;

    for (source of sources) {
      const { id, name, type, appId, schedule } = source;

      // NOTE: Choosing to hit the db again in favor of using the shared logic,
      // rather than eager loading the associations.
      const options = await source.getOptions();
      const mappings = await source.getMapping();

      config[`sources/${id}.json`] = {
        id,
        class: "source",
        type,
        name,
        appId,
        mapping: mappings,
        options,
      };

      if (schedule) {
        const { id, name, recurring, recurringFrequency } = schedule;

        // Here we've already eager-loaded the schedule, but didn't dig deeper
        // to find its options.
        const options = await schedule.getOptions();

        config[`schedules/${schedule.id}.json`] = {
          id,
          name,
          class: "schedule",
          sourceId: source.id,
          recurring,
          recurringFrequency,
          options,
        };
      }
    }

    // ---------------------------------------- | Properties

    const properties = await Property.findAll();

    let property: Property;

    for (property of properties) {
      const {
        id,
        key,
        type,
        sourceId,
        unique,
        identifying,
        isArray,
      } = property;

      // NOTE: Choosing to hit the db again in favor of using the shared logic,
      // rather than eager loading the associations.
      const options = await property.getOptions();
      const filters = await property.getFilters();

      config[`properties/${id}.json`] = {
        id,
        class: "property",
        type,
        name: key,
        sourceId,
        unique,
        identifying,
        isArray,
        options,
        filters,
      };
    }

    // ---------------------------------------- | Groups

    const groups = await Group.findAll({ include: GroupRule });

    let group: Group;

    for (group of groups) {
      const { id, name, type, groupRules } = group;

      config[`groups/${id}.json`] = {
        id,
        class: "group",
        type,
        name,
        rules: groupRules.map(({ propertyId, op, match }) => ({
          propertyId,
          operation: { op },
          match,
        })),
      };
    }

    // ---------------------------------------- | Destinations

    const destinations = await Destination.findAll({
      include: DestinationGroupMembership,
    });

    let destination: Destination;

    for (destination of destinations) {
      const {
        id,
        name,
        type,
        appId,
        groupId,
        syncMode,
        destinationGroupMemberships,
      } = destination;

      const options = await destination.getOptions();
      const mapping = await destination.getMapping();

      config[`destinations/${id}.json`] = {
        id,
        class: "destination",
        name,
        type,
        appId,
        groupId,
        syncMode,
        options,
        mapping,
        destinationGroupMemberships: Object.fromEntries(
          destinationGroupMemberships.map((dgm) => [dgm.remoteKey, groupId])
        ),
      };
    }

    // console.log(config);
    console.log(
      JSON.stringify(config, (k, v) => (v === null ? undefined : v), 2)
    );

    // console.log(instance);
    // --- await writeFile({ object, configFilePath: `apps/${id}.json` });
  }
}
