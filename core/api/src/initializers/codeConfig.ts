import { api, log, Initializer, config } from "actionhero";
import path from "path";
import glob from "glob";
import { getParentPath } from "../utils/pluginDetails";
import {
  ConfigurationObject,
  sortConfigurationObject,
} from "../classes/codeConfig";

import { loadApp, deleteApps } from "../modules/configLoaders/app";
import { loadSource, deleteSources } from "../modules/configLoaders/source";
import {
  loadProfilePropertyRule,
  deleteProfilePropertyRules,
} from "../modules/configLoaders/profilePropertyRule";
import { loadApiKey, deleteApiKeys } from "../modules/configLoaders/apiKey";
import { loadTeam, deleteTeams } from "../modules/configLoaders/team";
import {
  loadTeamMember,
  deleteTeamMembers,
} from "../modules/configLoaders/teamMember";
import { loadGroup, deleteGroups } from "../modules/configLoaders/group";
import {
  loadSchedule,
  deleteSchedules,
} from "../modules/configLoaders/schedule";
import { loadSetting } from "../modules/configLoaders/setting";
import {
  loadDestination,
  deleteDestinations,
} from "../modules/configLoaders/destination";

declare module "actionhero" {
  export interface Api {
    codeConfig: {
      allowLockedModelChanges: boolean;
    };
  }
}

interface SeenGuids {
  app: string[];
  source: string[];
  profilepropertyrule: string[];
  group: string[];
  schedule: string[];
  destination: string[];
  apikey: string[];
  team: string[];
  teammember: string[];
}

export class CodeConfig extends Initializer {
  constructor() {
    super();
    this.name = "codeConfig";
    this.loadPriority = 10000;
  }

  async initialize() {
    api.codeConfig = {
      allowLockedModelChanges: true,
    };

    const configDir =
      process.env.GROUPAROO_CONFIG_DIR || path.join(getParentPath(), "config");
    const globSearch = path.join(configDir, "**", "+(*.json|*.js)");
    const configFiles = glob.sync(globSearch);
    let configObjects: ConfigurationObject[] = [];
    for (const i in configFiles) {
      configObjects = configObjects.concat(
        await loadConfigFile(configFiles[i])
      );
    }

    if (configFiles.length > 0) {
      const seenGuids = await processConfigObjects(configObjects);
      await deleteLockedObjects(seenGuids);
    }

    // after this point in the Actionhero boot lifecycle, locked models cannot be changed
    api.codeConfig.allowLockedModelChanges = false;
  }
}

async function loadConfigFile(file: string): Promise<ConfigurationObject> {
  let payload = require(file);
  if (typeof payload === "function") payload = await payload(config);
  return payload;
}

async function processConfigObjects(configObjects: Array<ConfigurationObject>) {
  const seenGuids: SeenGuids = {
    app: [],
    source: [],
    profilepropertyrule: [],
    group: [],
    schedule: [],
    destination: [],
    apikey: [],
    team: [],
    teammember: [],
  };

  const sortedConfigObjects = configObjects.sort(sortConfigurationObject);

  for (const i in sortedConfigObjects) {
    const configObject = sortedConfigObjects[i];
    let klass = configObject.class.toLocaleLowerCase();
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
        case "profilepropertyrule":
          object = await loadProfilePropertyRule(configObject);
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
        "emerg"
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
  await deleteProfilePropertyRules(seenGuids.profilepropertyrule);
  await deleteSources(seenGuids.source);
  await deleteApps(seenGuids.app);
}
