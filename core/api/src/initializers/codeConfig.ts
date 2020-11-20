import { api, Initializer, config } from "actionhero";
import path from "path";
import glob from "glob";
import { getParentPath } from "../utils/pluginDetails";
import {
  ConfigurationObject,
  sortConfigurationObject,
} from "../classes/codeConfig";

import { loadApp } from "../modules/configLoaders/app";
import { loadSource } from "../modules/configLoaders/source";
import { loadProfilePropertyRule } from "../modules/configLoaders/profilePropertyRule";
import { loadApiKey } from "../modules/configLoaders/apiKey";
import { loadTeam } from "../modules/configLoaders/team";
import { loadTeamMember } from "../modules/configLoaders/teamMember";

declare module "actionhero" {
  export interface Api {
    codeConfig: {
      allowLockedModelChanges: boolean;
    };
  }
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

    const globSearch = path.join(
      getParentPath(),
      "config",
      "**",
      "+(*.json|*.js)"
    );
    const configFiles = glob.sync(globSearch);
    let configObjects: ConfigurationObject[] = [];
    for (const i in configFiles) {
      configObjects = configObjects.concat(
        await loadConfigFile(configFiles[i])
      );
    }

    await processConfigObjects(configObjects);

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
  const sortedConfigObjects = configObjects.sort(sortConfigurationObject);

  for (const i in sortedConfigObjects) {
    const configObject = sortedConfigObjects[i];
    try {
      switch (configObject.class.toLocaleLowerCase()) {
        case "app":
          await loadApp(configObject);
          break;
        case "source":
          await loadSource(configObject);
          break;
        case "profilepropertyrule":
          await loadProfilePropertyRule(configObject);
          break;
        case "apikey":
          await loadApiKey(configObject);
          break;
        case "team":
          await loadTeam(configObject);
          break;
        case "teammember":
          await loadTeamMember(configObject);
          break;
        default:
          throw new Error(`unknown config object class: ${configObject.class}`);
      }
    } catch (error) {
      // TODO: Fancier error handling
      // console.error(error);
      throw error;
    }
  }
}
