import { log, config, env } from "actionhero";
import path from "path";
import fs from "fs";
import glob from "glob";
import {
  ConfigurationObject,
  sortConfigurationObject,
  validateAndFormatId,
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
import { Property } from "../../models/Property";

interface idsByClass {
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

export function getConfigDir() {
  const configDir =
    process.env.GROUPAROO_CONFIG_DIR || path.join(getParentPath(), "config");
  return configDir;
}

export async function loadConfigDirectory(configDir: string) {
  let seenIds = {};
  let deletedIds = {};
  let errors = [];

  const { configObjects, configFiles } = await loadConfigObjects(configDir);

  if (configFiles.length > 0) {
    const sortedConfigObjects = sortConfigurationObject(configObjects);
    const response = await processConfigObjects(sortedConfigObjects, true);
    seenIds = response.seenIds;
    errors = response.errors;

    if (errors.length === 0) {
      deletedIds = await deleteLockedObjects(seenIds);
    }
  }

  return { seenIds, errors, deletedIds };
}

export async function loadConfigObjects(configDir: string) {
  const globSearch = path.join(configDir, "**", "+(*.json|*.js)");
  const configFiles = glob.sync(globSearch);
  let configObjects: ConfigurationObject[] = [];
  for (const i in configFiles) {
    configObjects = configObjects.concat(await loadConfigFile(configFiles[i]));
  }
  configObjects = configObjects.filter((o) => Object.keys(o).length > 0); // skip empty files
  return { configObjects, configFiles };
}

async function loadConfigFile(file: string): Promise<ConfigurationObject> {
  let payload;
  if (file.match(/\.json$/)) {
    payload = JSON5.parse(fs.readFileSync(file).toString());
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
  externallyValidate: boolean,
  validate = false
) {
  const seenIds: idsByClass = {
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
  const errors: string[] = [];

  for (const i in configObjects) {
    const configObject = configObjects[i];
    if (Object.keys(configObject).length === 0) continue;
    let klass = configObject?.class?.toLocaleLowerCase();
    let object;
    try {
      switch (klass) {
        case "setting":
          object = await loadSetting(
            configObject,
            externallyValidate,
            validate
          );
          break;
        case "app":
          object = await loadApp(configObject, externallyValidate, validate);
          break;
        case "source":
          object = await loadSource(configObject, externallyValidate, validate);
          if (configObject.bootstrappedProperty) {
            seenIds["property"].push(
              await validateAndFormatId(
                Property,
                configObject.bootstrappedProperty.id
              )
            );
          }
          break;
        case "property":
          object = await loadProperty(
            configObject,
            externallyValidate,
            validate
          );
          break;
        case "group":
          object = await loadGroup(configObject, externallyValidate, validate);
          break;
        case "schedule":
          object = await loadSchedule(
            configObject,
            externallyValidate,
            validate
          );
          break;
        case "destination":
          object = await loadDestination(
            configObject,
            externallyValidate,
            validate
          );
          break;
        case "apikey":
          object = await loadApiKey(configObject, externallyValidate, validate);
          break;
        case "team":
          object = await loadTeam(configObject, externallyValidate, validate);
          break;
        case "teammember":
          object = await loadTeamMember(
            configObject,
            externallyValidate,
            validate
          );
          break;
        default:
          throw new Error(`unknown config object class: ${configObject.class}`);
      }
    } catch (error) {
      const errorMessage = `[ config ] error with ${configObject?.class} \`${
        configObject.key || configObject.name
      }\` (${configObject.id}): ${error}`;
      errors.push(errorMessage);
      log(errorMessage, env === "test" ? "info" : "error");
      continue;
    }

    if (klass !== "setting") seenIds[klass].push(object.id);
  }

  return { seenIds, errors };
}

export async function deleteLockedObjects(seenIds) {
  const deletedIds: idsByClass = {
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

  deletedIds["teammember"] = await deleteTeamMembers(seenIds.teammember);
  deletedIds["team"] = await deleteTeams(seenIds.team);
  deletedIds["apikey"] = await deleteApiKeys(seenIds.apikey);
  deletedIds["destination"] = await deleteDestinations(seenIds.destination);
  deletedIds["schedule"] = await deleteSchedules(seenIds.schedule);
  deletedIds["group"] = await deleteGroups(seenIds.group);
  deletedIds["property"] = await deleteProperties(seenIds.property);
  // might return a bootstrapped property, needs special processing
  const deletedSourceIds = await deleteSources(seenIds.source);
  deletedIds["source"] = deletedSourceIds.source;
  deletedSourceIds.property.map((id) => {
    if (!deletedIds["property"].includes(id)) deletedIds["property"].push(id);
  });
  // back to normal
  deletedIds["app"] = await deleteApps(seenIds.app);

  return deletedIds;
}

export function logFatalError(message) {
  log(message, "error");
  if (env !== "test") process.exit(1);
}
