import { log, config, env } from "actionhero";
import path from "path";
import fs from "fs";
import glob from "glob";
import {
  ConfigurationObject,
  sortConfigurationObjects,
  GuidsByClass,
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
import { expandSyncTable } from "./syncTable";
import { loadDestination, deleteDestinations } from "./destination";
import JSON5 from "json5";
import { getParentPath } from "../../utils/pluginDetails";
import { Property } from "../../models/Property";

export function getConfigDir() {
  const configDir =
    process.env.GROUPAROO_CONFIG_DIR || path.join(getParentPath(), "config");
  return configDir;
}

export async function loadConfigDirectory(
  configDir: string,
  externallyValidate: boolean = true
): Promise<{
  seenGuids: GuidsByClass;
  errors: string[];
  deletedGuids: GuidsByClass;
}> {
  let seenGuids: GuidsByClass = {};
  let deletedGuids: GuidsByClass = {};
  let errors: string[] = [];

  const configObjects = await loadConfigObjects(configDir);

  if (configObjects !== null) {
    const response = await processConfigObjects(
      configObjects,
      externallyValidate
    );
    seenGuids = response.seenGuids;
    errors = response.errors;

    if (errors.length === 0) {
      deletedGuids = await deleteLockedObjects(seenGuids);
    }
  }

  return { seenGuids, errors, deletedGuids };
}

export async function loadConfigObjects(
  configDir: string
): Promise<ConfigurationObject[]> {
  const globSearch = path.join(configDir, "**", "+(*.json|*.js)");
  const configFiles = glob.sync(globSearch);
  let configObjects: ConfigurationObject[] = [];
  for (const i in configFiles) {
    configObjects = configObjects.concat(await loadConfigFile(configFiles[i]));
  }
  configObjects = configObjects.filter((o) => Object.keys(o).length > 0); // skip empty files
  if (configFiles.length === 0) {
    return null;
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
  externallyValidate: boolean,
  validate = false
): Promise<{ seenGuids: GuidsByClass; errors: string[] }> {
  const seenGuids: GuidsByClass = {
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

  const expand = await expandConfigObjects(
    configObjects,
    externallyValidate,
    validate
  );
  configObjects = expand.configObjects;
  errors.push(...expand.errors);
  configObjects = sortConfigurationObjects(configObjects);

  for (const i in configObjects) {
    const configObject = configObjects[i];
    if (Object.keys(configObject).length === 0) continue;
    let klass = configObject?.class?.toLowerCase();
    let guids: GuidsByClass;
    try {
      switch (klass) {
        case "setting":
          guids = await loadSetting(configObject, externallyValidate, validate);
          break;
        case "app":
          guids = await loadApp(configObject, externallyValidate, validate);
          break;
        case "source":
          guids = await loadSource(configObject, externallyValidate, validate);
          break;
        case "property":
          guids = await loadProperty(
            configObject,
            externallyValidate,
            validate
          );
          break;
        case "group":
          guids = await loadGroup(configObject, externallyValidate, validate);
          break;
        case "schedule":
          guids = await loadSchedule(
            configObject,
            externallyValidate,
            validate
          );
          break;
        case "destination":
          guids = await loadDestination(
            configObject,
            externallyValidate,
            validate
          );
          break;
        case "apikey":
          guids = await loadApiKey(configObject, externallyValidate, validate);
          break;
        case "team":
          guids = await loadTeam(configObject, externallyValidate, validate);
          break;
        case "teammember":
          guids = await loadTeamMember(
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

    // should set guids in all cases
    for (const className in guids) {
      const newGuids = guids[className];
      seenGuids[className].push(...newGuids);
    }
  }

  return { seenGuids, errors };
}

async function expandConfigObjects(
  configObjects: ConfigurationObject[],
  externallyValidate: boolean,
  validate = false
): Promise<{ configObjects: ConfigurationObject[]; errors: string[] }> {
  // some objects make many thing. this will expand it to the simple ones

  const errors: string[] = [];
  const out: ConfigurationObject[] = [];

  for (const i in configObjects) {
    const configObject = configObjects[i];
    if (Object.keys(configObject).length === 0) continue;
    let klass = configObject?.class?.toLowerCase();
    try {
      switch (klass) {
        case "synctable":
          const many = await expandSyncTable(
            configObject,
            externallyValidate,
            validate
          );
          console.log(JSON.stringify(many));
          out.push(...many);
          break;
        default:
          out.push(configObject);
          break;
      }
    } catch (error) {
      const errorMessage = `[ config ] error with ${configObject?.class} \`${
        configObject.key || configObject.name
      }\` (${configObject.id}): ${error}`;
      errors.push(errorMessage);
      log(errorMessage, env === "test" ? "info" : "error");
      continue;
    }
  }

  return { configObjects: out, errors };
}

async function deleteLockedObjects(seenGuids): Promise<GuidsByClass> {
  const deletedGuids: GuidsByClass = {
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

  deletedGuids["teammember"] = await deleteTeamMembers(seenGuids.teammember);
  deletedGuids["team"] = await deleteTeams(seenGuids.team);
  deletedGuids["apikey"] = await deleteApiKeys(seenGuids.apikey);
  deletedGuids["destination"] = await deleteDestinations(seenGuids.destination);
  deletedGuids["schedule"] = await deleteSchedules(seenGuids.schedule);
  deletedGuids["group"] = await deleteGroups(seenGuids.group);
  deletedGuids["property"] = await deleteProperties(seenGuids.property);
  // might return a bootstrapped property, needs special processing
  const deletedSourceGuids = await deleteSources(seenGuids.source);
  deletedGuids["source"] = deletedSourceGuids.filter((g) => g.match(/^src_/));
  deletedSourceGuids
    .filter((g) => g.match(/^rul_/))
    .filter((g) => !deletedGuids["property"].includes(g))
    .forEach((g) => deletedGuids["property"].push(g));
  // back to normal
  deletedGuids["app"] = await deleteApps(seenGuids.app);

  return deletedGuids;
}

export function logFatalError(message) {
  log(message, "error");
  if (env !== "test") process.exit(1);
}
