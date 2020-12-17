import { log, config, env } from "actionhero";
import path from "path";
import fs from "fs";
import glob from "glob";
import {
  codeConfigModels,
  ConfigurationObject,
  sortConfigurationObject,
} from "../../classes/codeConfig";
import { loadApp, deleteApps } from "./app";
import { loadSource, deleteSources } from "./source";
import { loadProperty, deleteProperties } from "./property";
import { loadApiKey, deleteApiKeys } from "./apiKey";
import { loadTeam, deleteTeams } from "./team";
import { loadTeamMember, deleteTeamMembers } from "./teamMember";
import { loadGroup, deleteGroups } from "./group";
import { loadSchedule, deleteSchedules } from "./schedule";
import { loadSetting } from "./setting";
import { loadDestination, deleteDestinations } from "./destination";
import JSON5 from "json5";
import { getParentPath } from "../../utils/pluginDetails";
import { Transaction } from "sequelize";

export function getConfigDir() {
  const configDir =
    process.env.GROUPAROO_CONFIG_DIR || path.join(getParentPath(), "config");
  return configDir;
}

export async function loadConfigDirectory(configDir: string) {
  const configObjects = await loadConfigObjects(configDir);
  if (configObjects.length > 0) {
    const sortedConfigObjects = sortConfigurationObject(configObjects);
    const { seenGuids, errors } = await processConfigObjects(
      sortedConfigObjects
    );

    if (!errors) await deleteLockedObjects(seenGuids);
  }
}

export async function loadConfigObjects(configDir: string) {
  const globSearch = path.join(configDir, "**", "+(*.json|*.js)");
  const configFiles = glob.sync(globSearch);
  let configObjects: ConfigurationObject[] = [];
  for (const i in configFiles) {
    configObjects = configObjects.concat(await loadConfigFile(configFiles[i]));
  }
  return configObjects;
}

async function loadConfigFile(file: string): Promise<ConfigurationObject> {
  let payload;
  if (file.match(/\.json$/)) {
    payload = JSON5.parse(fs.readFileSync(file));
  } else {
    payload = require(file);
  }

  const payloadKeys = Object.keys(payload);
  if (payloadKeys.length === 1 && payloadKeys[0] === "default") {
    payload = payload.default;
  }

  if (typeof payload === "function") payload = await payload(config);
  return payload;
}

export async function processConfigObjects(
  configObjects: Array<ConfigurationObject>,
  transaction?: Transaction
) {
  const seenGuids = {};
  const errors: string[] = [];
  codeConfigModels.forEach(
    (model) => (seenGuids[model.name.toLowerCase()] = [])
  );

  for (const i in configObjects) {
    const configObject = configObjects[i];
    if (Object.keys(configObject).length === 0) continue;
    let klass = configObject?.class?.toLocaleLowerCase();
    let object;
    try {
      switch (klass) {
        case "setting":
          object = await loadSetting(configObject, transaction);
          break;
        case "app":
          object = await loadApp(configObject, transaction);
          break;
        case "source":
          object = await loadSource(configObject, transaction);
          break;
        case "property":
          object = await loadProperty(configObject, transaction);
          break;
        case "group":
          object = await loadGroup(configObject, transaction);
          break;
        case "schedule":
          object = await loadSchedule(configObject, transaction);
          break;
        case "destination":
          object = await loadDestination(configObject, transaction);
          break;
        case "apikey":
          object = await loadApiKey(configObject, transaction);
          break;
        case "team":
          object = await loadTeam(configObject, transaction);
          break;
        case "teammember":
          object = await loadTeamMember(configObject, transaction);
          break;
        default:
          throw new Error(`unknown config object class: ${configObject.class}`);
      }
    } catch (error) {
      const errorMessage = `[ config ] error with ${
        configObject?.class
      }: ${JSON.stringify(configObject)} --> ${error}`;
      errors.push(errorMessage);
      log(errorMessage, env === "test" ? "info" : "emerg");
      continue;
      // throw error.original ? error.original : error;
    }

    if (klass !== "setting") seenGuids[klass].push(object.guid);
  }

  return { seenGuids, errors };
}

async function deleteLockedObjects(seenGuids, transaction?: Transaction) {
  await deleteTeamMembers(seenGuids.teammember);
  await deleteTeams(seenGuids.team);
  await deleteApiKeys(seenGuids.apikey);
  await deleteDestinations(seenGuids.destination);
  await deleteSchedules(seenGuids.schedule);
  await deleteGroups(seenGuids.group);
  await deleteProperties(seenGuids.property);
  await deleteSources(seenGuids.source);
  await deleteApps(seenGuids.app);
}
