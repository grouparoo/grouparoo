import { log, config, env, api } from "actionhero";
import path from "path";
import fs from "fs";
import glob from "glob";
import JSON5 from "json5";
import {
  AnyConfigurationObject,
  sortConfigurationObjects,
  validateConfigObjects,
  IdsByClass,
  getDirectParentId,
  SettingConfigurationObject,
  AppConfigurationObject,
  SourceConfigurationObject,
  PropertyConfigurationObject,
  GroupConfigurationObject,
  ScheduleConfigurationObject,
  DestinationConfigurationObject,
  ApiKeyConfigurationObject,
  TeamConfigurationObject,
  TeamMemberConfigurationObject,
} from "../../classes/codeConfig";
import { GrouparooErrorSerializer } from "../../config/errors";
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
import { ConfigWriter } from "../configWriter";
import { loadProfile } from "./profile";
import Sequelize from "sequelize";

export async function loadConfigDirectory(
  configDir: string | false,
  externallyValidate: boolean = true
): Promise<{
  seenIds: IdsByClass;
  errors: string[];
  deletedIds: IdsByClass;
}> {
  let seenIds: IdsByClass = {};
  let deletedIds: IdsByClass = {};
  let errors: string[] = [];

  if (configDir) {
    const configObjects = await loadConfigObjects(configDir);

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
  configDir: string | false
): Promise<AnyConfigurationObject[]> {
  if (!configDir) return [];

  const globSearch = path.join(configDir, "**", "+(*.json|*.js)");
  const configFiles = glob.sync(globSearch);
  let configObjects: AnyConfigurationObject[] = [];
  for (const i in configFiles) {
    configObjects = configObjects.concat(await loadConfigFile(configFiles[i]));
  }
  configObjects = configObjects.filter((o) => Object.keys(o).length > 0); // skip empty files
  return configObjects;
}

async function loadConfigFile(file: string): Promise<AnyConfigurationObject> {
  let payload: { [key: string]: any } = {};
  if (file.match(/\.json$/)) {
    const contents = fs.readFileSync(file).toString();
    if (contents.trim().includes("{")) payload = JSON5.parse(contents);
  } else {
    payload = require(file);
  }

  const payloadKeys = Object.keys(payload);
  if (payloadKeys.length === 1 && payloadKeys[0] === "default") {
    payload = payload.default;
  }

  if (typeof payload === "function") payload = await payload(config);

  const objects = Array.isArray(payload) ? payload : [payload];
  ConfigWriter.cacheConfigFile({ absFilePath: file, objects });

  return payload;
}

export async function shouldExternallyValidate(
  canExternallyValidate: boolean,
  configObject: AnyConfigurationObject,
  locallyValidateIds: Set<string>
) {
  if (!canExternallyValidate) return false;
  if (!locallyValidateIds) return true;

  const objectId = configObject.id;

  const parentId = await getDirectParentId(configObject);
  if (parentId && locallyValidateIds.has(parentId)) {
    locallyValidateIds.add(objectId);
  }

  if (locallyValidateIds.has(objectId)) {
    return false;
  }

  return true;
}

export async function processConfigObjects(
  configObjects: AnyConfigurationObject[],
  canExternallyValidate: boolean,
  locallyValidateIds?: Set<string>,
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
    profile: [],
  };
  const errors: string[] = [];

  const { errors: validationErrors } = validateConfigObjects(configObjects);
  validationErrors.map((err) =>
    log(`[ config ] ${err}`, env === "test" ? "info" : "error")
  );
  errors.push(...validationErrors);

  if (errors.length > 0) return { seenIds, errors };

  try {
    configObjects = await sortConfigurationObjects(configObjects);
  } catch (error) {
    // If something we wrong while sorting, log the messages and return. We
    // aren't going to process the config objects if we can't be confident we're
    // doing it in the right order.
    error.message.split("\n").map((msg) => {
      if (msg.startsWith("unknownNodeId")) {
        msg = `Could not find object with ID: ${msg.slice(14).split(":")[1]}`;
      }
      const err = new Error(msg);
      errors.push(err.message);
      log(msg, "error");
    });
    return { seenIds: {}, errors };
  }

  if (locallyValidateIds) {
    const configObjectIds = configObjects.map((o) => o.id);
    locallyValidateIds.forEach(
      (id) =>
        !configObjectIds.includes(id) &&
        log(
          `[ config ] tried to locally validate \`${id}\`, but an object with that ID does not exist`,
          "warning"
        )
    );
  }

  for (const i in configObjects) {
    const configObject = configObjects[i];
    if (Object.keys(configObject).length === 0) continue;
    let klass = configObject?.class?.toLowerCase();
    let ids: IdsByClass;

    const externallyValidate = await shouldExternallyValidate(
      canExternallyValidate,
      configObject,
      locallyValidateIds
    );

    if (!externallyValidate) {
      log(
        `[ config ] skipping external validation for ${configObject.class} \`${configObject.id}\``,
        "notice"
      );
    }

    try {
      switch (klass) {
        case "setting":
          ids = await loadSetting(
            configObject as SettingConfigurationObject,
            externallyValidate,
            validate
          );
          break;
        case "app":
          ids = await loadApp(
            configObject as AppConfigurationObject,
            externallyValidate,
            validate
          );
          break;
        case "source":
          ids = await loadSource(
            configObject as SourceConfigurationObject,
            configObjects,
            externallyValidate,
            validate
          );
          break;
        case "property":
          ids = await loadProperty(
            configObject as PropertyConfigurationObject,
            externallyValidate,
            validate
          );
          break;
        case "group":
          ids = await loadGroup(
            configObject as GroupConfigurationObject,
            externallyValidate,
            validate
          );
          break;
        case "schedule":
          ids = await loadSchedule(
            configObject as ScheduleConfigurationObject,
            externallyValidate,
            validate
          );
          break;
        case "destination":
          ids = await loadDestination(
            configObject as DestinationConfigurationObject,
            externallyValidate,
            validate
          );
          break;
        case "apikey":
          ids = await loadApiKey(
            configObject as ApiKeyConfigurationObject,
            externallyValidate,
            validate
          );
          break;
        case "team":
          ids = await loadTeam(
            configObject as TeamConfigurationObject,
            externallyValidate,
            validate
          );
          break;
        case "teammember":
          ids = await loadTeamMember(
            configObject as TeamMemberConfigurationObject,
            externallyValidate,
            validate
          );
          break;
        case "profile":
          ids = await loadProfile(configObject, externallyValidate, validate);
          break;
        default:
          throw new Error(`unknown config object class: ${configObject.class}`);
      }
    } catch (error) {
      // Normally, we can can keep going after an error and keep checking the other config objects
      // but, there's some types of errors (like unique key duplicates) which pollute or abort the transaction and we need to stop
      if (error instanceof Sequelize.DatabaseError) {
        log(
          `TRANSACTION ABORTED at SequelizeDatabaseError at query: ${error.sql}`,
          "debug"
        );
        throw new Error(
          `Sequelize Database Error with Config object for ${
            configObject?.class
          } \`${configObject["key"] || configObject["name"]}\`(${
            configObject.id
          }).  Cannot validate additional objects.`
        );
      }

      const { message, fields } = GrouparooErrorSerializer(error);

      const errorMessage = `[ config ] error with ${configObject?.class} \`${
        configObject["key"] || configObject["name"]
      }\` (${configObject.id}): ${message}`;

      errors.push(errorMessage);

      log(error?.stack || error, "debug");

      if (fields.length === 0) {
        log(errorMessage, "warning");
        continue;
      } else {
        log(errorMessage, "error");
        throw new Error(`Cannot validate additional objects.`);
      }
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
    profile: [],
  };

  deletedIds["teammember"] = await deleteTeamMembers(seenIds.teammember);
  deletedIds["team"] = await deleteTeams(seenIds.team);
  deletedIds["apikey"] = await deleteApiKeys(seenIds.apikey);
  deletedIds["destination"] = await deleteDestinations(seenIds.destination);
  deletedIds["schedule"] = await deleteSchedules(seenIds.schedule);
  deletedIds["group"] = await deleteGroups(seenIds.group);
  deletedIds["property"] = await deleteProperties(seenIds.property);
  deletedIds["source"] = await deleteSources(seenIds.source);
  // back to normal
  deletedIds["app"] = await deleteApps(seenIds.app);

  return deletedIds;
}
