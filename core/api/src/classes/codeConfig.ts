import { log } from "actionhero";
import { GroupRuleWithKey } from "../models/Group";
import { ProfilePropertyRuleFiltersWithKey } from "../models/ProfilePropertyRule";

export interface ConfigurationObject {
  id: string;
  class: string;
  type: string;
  name?: string;
  key?: string;
  appId?: string;
  sourceId?: string;
  teamId?: string;
  email?: string;
  options?: { [key: string]: any };
  filters?: ProfilePropertyRuleFiltersWithKey[];
  identifying?: boolean;
  unique?: boolean;
  isArray?: boolean;
  rules?: GroupRuleWithKey[];
  recurring?: boolean;
  recurringFrequency: number;
  groupId?: string;
  pluginName?: string;
  permissions?: Array<{ guid: string; read: boolean; write: boolean }>;
  value: string | boolean | number;
  bootstrappedProfilePropertyRule?: ConfigurationObject;
  mapping?: { [key: string]: any };
}

interface orderedConfigObject {
  configObject: ConfigurationObject;
  providedIds: string[];
  prerequisiteIds: string[];
}

// Utils

export const codeConfigLockKey = "config:code";

export async function getParentByName(model: any, id: string) {
  if (!id) {
    throw new Error(`missing parent id to find a ${model.name}`);
  }

  const guid = await validateAndFormatGuid(model, id);
  const instance = await model.scope(null).findOne({ where: { guid } });

  if (!instance) {
    throw new Error(`cannot find ${model.name} with guid "${guid}"`);
  }

  return instance;
}

export async function validateAndFormatGuid(model: any, id: string) {
  if (!id) throw new Error("id is required");
  let guid = `${id}`;

  const guidPrefix: string = new model().guidPrefix();
  if (guid.indexOf(`${guidPrefix}_`) !== 0) guid = `${guidPrefix}_${guid}`;

  let failing = false;
  if (guid.match(/\s/)) failing = true;
  if (guid.match(/[A-Z]/)) failing = true;
  if (guid.match(/-/)) failing = true;
  if (guid.length > 40) failing = true;

  if (failing) {
    throw new Error(
      `invalid guid: \`${guid}\` - guids must be less than 40 characters and only contain lower-case letters, numbers, and underscores`
    );
  }

  return guid;
}

export function validateConfigObjectKeys(
  model: any,
  configObject,
  additionalAllowedKeys: string[] = []
) {
  const errors: string[] = [];
  const modelKeys = Object.keys(model.rawAttributes).concat(
    additionalAllowedKeys
  );
  let idFound = false;
  const configKeys = Object.keys(configObject)
    .filter((k) => k !== "class")
    .filter((k) => typeof configObject[k] !== "object")
    .map((k) => {
      if (k === "id") {
        idFound = true;
        return "guid";
      } else if (k.match(/.+Id$/)) {
        return k.replace(/Id$/, "Guid");
      } else {
        return k;
      }
    });

  if (!idFound) errors.push(`id is required for a ${model.name}`);

  configKeys.forEach((k) => {
    if (!modelKeys.includes(k)) {
      errors.push(`${k} is not a valid property of a ${model.name}`);
    }
  });

  if (errors.length > 0) throw new Error(errors.join(", "));
}

export function logModel(instance, mode: "created" | "updated" | "deleted") {
  let logLevel = "info";
  if (mode === "created") logLevel = "notice";
  if (mode === "deleted") logLevel = "warning";

  log(
    `[ config ] ${mode} ${instance.constructor.name} \`${
      instance.key || instance.email || instance.name
    }\` (${instance.guid})`,
    logLevel
  );
}

export function extractNonNullParts(
  configObject: ConfigurationObject,
  key: string
) {
  const cleanedOptions: ConfigurationObject["options"] = {};

  if (configObject[key]) {
    for (const i in configObject[key]) {
      const value = configObject[key][i];
      if (value !== null && value !== undefined) cleanedOptions[i] = value;
    }
  }

  return cleanedOptions;
}

export function sortConfigurationObject(configObjects: ConfigurationObject[]) {
  const configObjectsWithIds: orderedConfigObject[] = [];

  for (const i in configObjects) {
    const configObject = configObjects[i];
    const { providedIds, prerequisiteIds } = getParentIds(configObject);
    configObjectsWithIds.push({
      configObject,
      providedIds,
      prerequisiteIds,
    });
  }

  const sortedConfigObjectsWithIds = sortConfigObjectsWithIds(
    configObjectsWithIds
  );
  return sortedConfigObjectsWithIds.map((o) => o.configObject);
}

function getParentIds(configObject: ConfigurationObject) {
  const keys = Object.keys(configObject);
  const prerequisiteIds: string[] = [];
  const providedIds: string[] = [];

  providedIds.push(configObject.id);

  // special cases
  // - Bootstrapped profile property rules
  if (configObject?.bootstrappedProfilePropertyRule?.id) {
    providedIds.push(configObject.bootstrappedProfilePropertyRule.id);
  }

  // prerequisites
  for (const i in keys) {
    if (keys[i].match(/.+Id$/)) {
      prerequisiteIds.push(configObject[keys[i]]);
    }
  }

  const objectContainers = ["options"];
  objectContainers.map((_container) => {
    if (configObject[_container]) {
      const containerKeys = Object.keys(configObject[_container]);
      for (const i in containerKeys) {
        if (containerKeys[i].match(/.+Id$/)) {
          prerequisiteIds.push(configObject[_container][containerKeys[i]]);
        } else if (containerKeys[i].match(/.+Guid$/)) {
          prerequisiteIds.push(
            configObject[_container][containerKeys[i]].replace(/^.{3}_/, "")
          );
        }
      }
    }
  });

  const arrayContainers = ["rules"];
  arrayContainers.map((_container) => {
    for (const i in configObject[_container]) {
      const record = configObject[_container][i];
      const recordKeys = Object.keys(record);
      for (const j in recordKeys) {
        if (recordKeys[j].match(/.+Id$/)) {
          prerequisiteIds.push(record[recordKeys[j]]);
        }
      }
    }
  });

  if (configObject["mapping"]) {
    const mappingValues = Object.keys(configObject["mapping"]);
    mappingValues.forEach((v) => {
      prerequisiteIds.push(v);
    });
  }

  if (configObject["destinationGroupMemberships"]) {
    const groupIds: string[] = Object.values(
      configObject["destinationGroupMemberships"]
    );
    groupIds.forEach((v) => {
      prerequisiteIds.push(v);
    });
  }

  return { prerequisiteIds, providedIds };
}

function sortConfigObjectsWithIds(configObjectsWithIds: orderedConfigObject[]) {
  const sortedConfigObjectsWithIds: orderedConfigObject[] = [];

  configObjectsWithIds.forEach((c) => {
    if (sortedConfigObjectsWithIds.length === 0) {
      sortedConfigObjectsWithIds.push(c);
    } else if (c.prerequisiteIds.length === 0) {
      sortedConfigObjectsWithIds.unshift(c);
    } else {
      let indexOfLastDependency: number;
      let indexOfFirstDependent: number;

      sortedConfigObjectsWithIds.forEach((listedConfigObject, idx) => {
        c.prerequisiteIds.forEach((id) => {
          if (listedConfigObject.providedIds.includes(id)) {
            indexOfLastDependency = idx;
          }
        });

        c.providedIds.map((id) => {
          if (
            !indexOfFirstDependent &&
            listedConfigObject.prerequisiteIds.includes(id)
          ) {
            indexOfFirstDependent = idx;
          }
        });
      });

      if (indexOfLastDependency) {
        sortedConfigObjectsWithIds.splice(indexOfLastDependency + 1, 0, c);
      } else if (indexOfFirstDependent) {
        sortedConfigObjectsWithIds.splice(indexOfFirstDependent, 0, c);
      } else {
        sortedConfigObjectsWithIds.push(c);
      }
    }
  });

  return sortedConfigObjectsWithIds;
}
