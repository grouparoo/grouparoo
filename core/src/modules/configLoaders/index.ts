import { log, config, env } from "actionhero";
import path from "path";
import fs from "fs";
import glob from "glob";
import {
  ConfigurationObject,
  sortConfigurationObjects,
  validateConfigObjects,
  IdsByClass,
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

export function getConfigDir() {
  const configDir =
    process.env.GROUPAROO_CONFIG_DIR || path.join(getParentPath(), "config");
  return configDir;
}

export async function loadConfigDirectory(
  configDir: string,
  externallyValidate: boolean = true
): Promise<{
  seenIds: IdsByClass;
  errors: string[];
  deletedIds: IdsByClass;
}> {
  let seenIds: IdsByClass = {};
  let deletedIds: IdsByClass = {};
  let errors: string[] = [];

  const configObjects = await loadConfigObjects(configDir);

  if (configObjects !== null) {
    const response = await processConfigObjects(
      configObjects,
      externallyValidate
    );
    seenIds = response.seenIds;
    errors = response.errors;

    if (errors.length === 0) {
      deletedIds = await deleteLockedObjects(seenIds);
    }
  }

  return { seenIds, errors, deletedIds };
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
): Promise<{ seenIds: IdsByClass; errors: string[] }> {
  const seenIds: IdsByClass = {
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

  configObjects = sortConfigurationObjects(configObjects);

  const { errors: validationErrors } = validateConfigObjects(configObjects);
  validationErrors.map((err) =>
    log(`[ config ] ${err}`, env === "test" ? "info" : "error")
  );
  errors.push(...validationErrors);

  if (errors.length > 0) return { seenIds, errors };

  for (const i in configObjects) {
    const configObject = configObjects[i];
    if (Object.keys(configObject).length === 0) continue;
    let klass = configObject?.class?.toLowerCase();
    let ids: IdsByClass;
    try {
      switch (klass) {
        case "setting":
          ids = await loadSetting(configObject, externallyValidate, validate);
          break;
        case "app":
          ids = await loadApp(configObject, externallyValidate, validate);
          break;
        case "source":
          ids = await loadSource(configObject, externallyValidate, validate);
          break;
        case "property":
          ids = await loadProperty(configObject, externallyValidate, validate);
          break;
        case "group":
          ids = await loadGroup(configObject, externallyValidate, validate);
          break;
        case "schedule":
          ids = await loadSchedule(configObject, externallyValidate, validate);
          break;
        case "destination":
          ids = await loadDestination(
            configObject,
            externallyValidate,
            validate
          );
          break;
        case "apikey":
          ids = await loadApiKey(configObject, externallyValidate, validate);
          break;
        case "team":
          ids = await loadTeam(configObject, externallyValidate, validate);
          break;
        case "teammember":
          ids = await loadTeamMember(
            configObject,
            externallyValidate,
            validate
          );
          break;
        case "synctable":
          const many = await expandSyncTable(
            configObject,
            externallyValidate,
            validate
          );
          const expanded = await processConfigObjects(
            many,
            externallyValidate,
            validate
          );
          ids = expanded.seenIds;
          errors.push(...expanded.errors);
          break;
        default:
          throw new Error(`unknown config object class: ${configObject.class}`);
      }
    } catch (error) {
      const errorMessage = `[ config ] error with ${configObject?.class} \`${
        configObject.key || configObject.name
      }\` (${configObject.id}): ${error}`;
      errors.push(errorMessage);
      log(errorMessage, "warning");
      continue;
    }

    // should set ids in all cases
    for (const className in ids) {
      const newIds = ids[className];
      seenIds[className].push(...newIds);
    }
  }

  return { seenIds, errors };
}

export async function deleteLockedObjects(seenIds) {
  const deletedIds: IdsByClass = {
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
