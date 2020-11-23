import { api, Initializer, config } from "actionhero";
import path from "path";
import glob from "glob";
import { getParentPath } from "../utils/pluginDetails";
import {
  ConfigurationObject,
  sortConfigurationObject,
} from "../classes/codeConfig";

import { loadApp, deleteUnseenApps } from "../modules/configLoaders/app";
import {
  loadSource,
  deleteUnseenSources,
} from "../modules/configLoaders/source";
import {
  loadProfilePropertyRule,
  deleteUnseenProfilePropertyRules,
} from "../modules/configLoaders/profilePropertyRule";
import {
  loadApiKey,
  deleteUnseenApiKeys,
} from "../modules/configLoaders/apiKey";
import { loadTeam, deleteUnseenTeams } from "../modules/configLoaders/team";
import {
  loadTeamMember,
  deleteUnseenTeamMembers,
} from "../modules/configLoaders/teamMember";
import { loadGroup, deleteUnseenGroups } from "../modules/configLoaders/group";
import {
  loadSchedule,
  deleteUnseenSchedules,
} from "../modules/configLoaders/schedule";
import { loadSetting } from "../modules/configLoaders/setting";
import {
  loadDestination,
  deleteUnseenDestinations,
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

    const seenGuids = await processConfigObjects(configObjects);
    await deleteUnseenLockedObjects(seenGuids);

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
      // TODO: Fancier error handling
      // console.error(error);

      throw error.original ? error.original : error;
    }

    seenGuids[klass].push(object);
  }

  return seenGuids;
}

async function deleteUnseenLockedObjects(seenGuids: SeenGuids) {
  console.log(seenGuids);

  await deleteUnseenTeamMembers(seenGuids.teammember);
  await deleteUnseenTeams(seenGuids.team);
  await deleteUnseenApiKeys(seenGuids.apikey);
  await deleteUnseenDestinations(seenGuids.destination);
  await deleteUnseenSchedules(seenGuids.schedule);
  await deleteUnseenGroups(seenGuids.group);
  await deleteUnseenProfilePropertyRules(seenGuids.profilepropertyrule);
  await deleteUnseenSources(seenGuids.source);
  await deleteUnseenApps(seenGuids.app);
}
