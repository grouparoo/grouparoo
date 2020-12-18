import { log, config, env } from "actionhero";
import path from "path";
import fs from "fs";
import glob from "glob";
import {
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

interface SeenGuids {
  app: string[];
  source: string[];
  property: string[];
  group: string[];
  schedule: string[];
  destination: string[];
  apikey: string[];
  team: string[];
  teammember: string[];
}

export async function loadConfigDirectory(configDir: string) {
  const globSearch = path.join(configDir, "**", "+(*.json|*.js)");
  const configFiles = glob.sync(globSearch);
  let configObjects: ConfigurationObject[] = [];
  for (const i in configFiles) {
    configObjects = configObjects.concat(await loadConfigFile(configFiles[i]));
  }

  if (configFiles.length > 0) {
    const sortedConfigObjects = sortConfigurationObject(configObjects);
    const seenGuids = await processConfigObjects(sortedConfigObjects);
    await deleteLockedObjects(seenGuids);
  }
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

async function processConfigObjects(configObjects: Array<ConfigurationObject>) {
  const seenGuids: SeenGuids = {
    app: [],
    source: [],
    property: [],
    group: [],
    schedule: [],
    destination: [],
    apikey: [],
    team: [],
    teammember: [],
  };

  for (const i in configObjects) {
    const configObject = configObjects[i];
    if (Object.keys(configObject).length === 0) continue;
    let klass = configObject?.class?.toLocaleLowerCase();
    let object;
    try {
      switch (klass) {
        case "setting":
          object = await loadSetting(configObject);
          break;
        case "app":
          object = await loadApp(configObject);
          break;
        case "source":
          object = await loadSource(configObject);
          break;
        case "property":
          object = await loadProperty(configObject);
          break;
        case "group":
          object = await loadGroup(configObject);
          break;
        case "schedule":
          object = await loadSchedule(configObject);
          break;
        case "destination":
          object = await loadDestination(configObject);
          break;
        case "apikey":
          object = await loadApiKey(configObject);
          break;
        case "team":
          object = await loadTeam(configObject);
          break;
        case "teammember":
          object = await loadTeamMember(configObject);
          break;
        default:
          throw new Error(`unknown config object class: ${configObject.class}`);
      }
    } catch (error) {
      log(
        `error with config object: ${JSON.stringify(configObject)} - ${error}`,
        env === "test" ? "info" : "emerg"
      );
      throw error.original ? error.original : error;
    }

    if (klass !== "setting") seenGuids[klass].push(object.guid);
  }

  return seenGuids;
}

async function deleteLockedObjects(seenGuids: SeenGuids) {
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
