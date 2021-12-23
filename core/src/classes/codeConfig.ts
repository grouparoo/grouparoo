import { ActionheroLogLevel, log } from "actionhero";
import {
  DestinationCollection,
  DestinationSyncMode,
} from "../models/Destination";
import { GroupRuleWithKey } from "../models/Group";
import { PropertyFiltersWithKey } from "../models/Property";
import { MustacheUtils } from "../modules/mustacheUtils";
import { TopLevelGroupRules } from "../modules/topLevelGroupRules";
import { Graph, topologicalSort } from "../modules/topologicalSort";

export interface IdsByClass {
  model?: string[];
  app?: string[];
  source?: string[];
  property?: string[];
  group?: string[];
  schedule?: string[];
  destination?: string[];
  apikey?: string[];
  team?: string[];
  teammember?: string[];
  record?: string[];
}

interface ConfigurationObject {
  id?: string;
  class?: string;
}

export interface ApiKeyConfigurationObject extends ConfigurationObject {
  name: string;
  type?: string;
  apiKey?: string;
  permissions?: Array<{ topic: string; read: boolean; write: boolean }>;
  options?: { permissionAllRead: boolean; permissionAllWrite: boolean };
}

export interface ModelConfigurationObject extends ConfigurationObject {
  name: string;
  type: string;
}

export interface AppConfigurationObject extends ConfigurationObject {
  name: string;
  type: string;
  refresh?: { query: string; recurringFrequency: number };
  options?: { [key: string]: any };
}

export interface DestinationConfigurationObject extends ConfigurationObject {
  name: string;
  type: string;
  appId: string;
  modelId: string;
  syncMode: DestinationSyncMode;
  collection: DestinationCollection;
  groupId?: string;
  options?: { [key: string]: any };
  mapping?: { [key: string]: any };
  destinationGroupMemberships?: { [key: string]: string };
}

export interface GroupConfigurationObject extends ConfigurationObject {
  name: string;
  modelId: string;
  rules?: GroupRuleWithKey[];
}

export interface RecordConfigurationObject extends ConfigurationObject {
  modelId: string;
  properties?: { [key: string]: Array<string | boolean | number | Date> };
}

export interface PropertyConfigurationObject extends ConfigurationObject {
  key: string;
  type: string;
  sourceId: string;
  unique?: boolean;
  isArray?: boolean;
  options?: { [key: string]: any };
  filters?: PropertyFiltersWithKey[];
}

export interface ScheduleConfigurationObject extends ConfigurationObject {
  name: string;
  sourceId: string;
  recurring?: boolean;
  recurringFrequency?: number;
  confirmRecords?: boolean;
  options?: { [key: string]: any };
  filters?: PropertyFiltersWithKey[];
  refreshEnabled?: boolean;
}

export interface SettingConfigurationObject extends ConfigurationObject {
  pluginName: string;
  key: string;
  value: string | boolean | number;
}

export interface SourceConfigurationObject extends ConfigurationObject {
  appId: string;
  name: string;
  modelId: string;
  type: string;
  options?: { [key: string]: any };
  mapping?: { [key: string]: any };
}

export interface TeamConfigurationObject extends ConfigurationObject {
  name: string;
  permissions?: Array<{ topic: string; read: boolean; write: boolean }>;
  options?: { permissionAllRead: boolean; permissionAllWrite: boolean };
}

export interface TeamMemberConfigurationObject extends ConfigurationObject {
  teamId: string;
  email: string;
  options?: {
    firstName?: string;
    lastName?: string;
    password?: string;
  };
}

export type AnyConfigurationObject =
  | ModelConfigurationObject
  | ApiKeyConfigurationObject
  | AppConfigurationObject
  | DestinationConfigurationObject
  | GroupConfigurationObject
  | RecordConfigurationObject
  | PropertyConfigurationObject
  | ScheduleConfigurationObject
  | SettingConfigurationObject
  | SourceConfigurationObject
  | TeamConfigurationObject
  | TeamMemberConfigurationObject;

interface ConfigObjectWithReferenceIDs {
  configObject: AnyConfigurationObject;
  providedIds: string[];
  prerequisiteIds: string[];
}

// Utils

export function getCodeConfigLockKey() {
  return "config:code";
}

export async function getParentByName(model: any, parentId: string) {
  if (!parentId) throw new Error(`missing parent id to find a ${model.name}`);

  const instance = await model.scope(null).findOne({ where: { id: parentId } });

  if (!instance) {
    throw new Error(`cannot find ${model.name} with id "${parentId}"`);
  }

  return instance;
}

export function validateConfigObjectKeys(
  model: any,
  configObject: AnyConfigurationObject,
  additionalAllowedKeys: string[] = []
) {
  const errors: string[] = [];
  const modelKeys = Object.keys(model.rawAttributes).concat(
    additionalAllowedKeys
  );
  let idFound = false;
  const configKeys = Object.keys(configObject)
    .filter((k) => k !== "class")
    .map((k) => {
      if (k === "id") {
        idFound = true;
        return "id";
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

export function logModel(
  instance,
  mode: "created" | "updated" | "deleted" | "validated",
  name?: string
) {
  let logLevel: ActionheroLogLevel = "info";
  if (mode === "created") logLevel = "notice";
  if (mode === "deleted") logLevel = "warning";

  log(
    `[ config ] ${mode} ${instance.constructor.name} \`${
      name || instance.key || instance.email || instance.name
    }\` (${instance.id})`,
    logLevel
  );
}

export function extractNonNullParts<T, Key extends keyof T>(
  configObject: T,
  key: Key
) {
  const cleanedOptions: T[Key] = {} as any;

  if (configObject[key]) {
    for (const i in configObject[key]) {
      const value = configObject[key][i];
      if (value !== null && value !== undefined) cleanedOptions[i] = value;
    }
  }

  return cleanedOptions;
}

export function getAutoBootstrappedProperty(
  sourceConfigObject: SourceConfigurationObject,
  otherConfigObjects: AnyConfigurationObject[]
) {
  if (cleanClass(sourceConfigObject) !== "source") return null;
  if (!sourceConfigObject["mapping"]) return null;

  const mappingValues = Object.values(sourceConfigObject["mapping"]);
  for (const value of mappingValues) {
    // If this source id == its mapped property's sourceId, we should bootstrap the property
    const autoBootstrappedProperty: PropertyConfigurationObject =
      otherConfigObjects
        .filter((o): o is PropertyConfigurationObject => typeof o === "object") // TS Trick to mock a type guard
        .find(
          (o) =>
            cleanClass(o) === "property" &&
            o.id === value &&
            o["sourceId"] === sourceConfigObject.id
        );
    if (autoBootstrappedProperty) {
      if (!autoBootstrappedProperty["unique"]) {
        throw new Error(
          `The property "${autoBootstrappedProperty.id}" needs to be set as "unique: true" to be used as the mapping for the source "${sourceConfigObject.id}"`
        );
      }

      if (autoBootstrappedProperty["isArray"]) {
        throw new Error(
          `The property "${autoBootstrappedProperty.id}" cannot be an array to be used as the mapping for the source "${sourceConfigObject.id}"`
        );
      }

      return autoBootstrappedProperty;
    }
  }

  return null;
}

export async function sortConfigurationObjects(
  configObjects: AnyConfigurationObject[]
): Promise<AnyConfigurationObject[]> {
  const configObjectsWithIds = await getConfigObjectsWithIds(configObjects);
  const sortedConfigObjectsWithIds =
    sortConfigObjectsWithIds(configObjectsWithIds);
  return sortedConfigObjectsWithIds.map((o) => o.configObject);
}

/**
 * Check a set of config objects for duplicate IDs within the same type.
 *
 * @param configObjects ConfigurationObject[]
 */
export function validateConfigObjects(
  configObjects: AnyConfigurationObject[]
): {
  configObjects: AnyConfigurationObject[];
  errors: string[];
} {
  let errors: string[] = [];
  const idTypes: { [type: string]: string[] } = {};

  for (const configObject of configObjects) {
    if (!configObject.id) {
      errors.push(
        (configObject["name"]
          ? `"${configObject["name"]}"`
          : configObject["key"]
          ? `"${configObject["key"]}"`
          : "A config object") + " is missing an ID"
      );
    }

    const _class = cleanClass(configObject);
    if (!idTypes[_class]) {
      idTypes[_class] = [];
    }
    if (idTypes[_class].includes(configObject.id)) {
      errors.push(
        `Duplicate ID values found for ${configObject.id} of class ${_class}`
      );
    } else {
      idTypes[_class].push(configObject.id);
    }
  }

  return { configObjects, errors };
}

export async function getConfigObjectsWithIds(
  configObjects: AnyConfigurationObject[]
) {
  const configObjectsWithIds: ConfigObjectWithReferenceIDs[] = [];

  for (const configObject of configObjects) {
    const { providedIds, prerequisiteIds } = await getParentIds(
      configObject,
      configObjects
    );
    configObjectsWithIds.push({
      configObject,
      providedIds,
      prerequisiteIds,
    });
  }

  return configObjectsWithIds;
}

export async function getDirectParentId(configObject: ConfigurationObject) {
  const parentKeys = {
    destination: "appId",
    source: "appId",
    property: "sourceId",
    teammember: "teamId",
  };

  const parentKey = parentKeys[cleanClass(configObject)];
  if (!parentKey) return null;

  const parentId = configObject[parentKey];
  if (!parentId) return null;

  return parentId as string;
}

export async function getParentIds(
  configObject: AnyConfigurationObject,
  otherConfigObjects: Array<AnyConfigurationObject> = []
) {
  const keys = Object.keys(configObject);
  // IDs here are prepended with the class of the object to allow for ID duplication between classes, but not of the same type
  const prerequisiteIds: string[] = [];
  const providedIds: string[] = [];

  providedIds.push(`${cleanClass(configObject)}:${configObject.id}`);

  // special cases
  // - property with mustache dependency

  if (configObject["options"]) {
    for (const [k, v] of Object.entries(configObject["options"])) {
      if (
        cleanClass(configObject) === "property" &&
        typeof v === "string" &&
        v.includes("{{") &&
        v.length > 4
      ) {
        const mustachePrerequisiteIds =
          await MustacheUtils.getMustacheVariablesAsPropertyIds(
            v,
            otherConfigObjects
          );
        prerequisiteIds.push(
          ...mustachePrerequisiteIds.map((p) => `property:${p}`)
        );
      }
    }
  }

  // prerequisites
  for (const i in keys) {
    if (keys[i].match(/.+Id$/)) {
      const _class = keys[i].replace(/Id$/, "");
      const value = configObject[keys[i]];
      prerequisiteIds.push(`${_class}:${value}`);
    }
  }

  const objectContainers = ["options", "source", "destination"];
  const validContainerKeys = ["propertyId"];
  objectContainers.map((_container) => {
    if (configObject[_container]) {
      const containerKeys = Object.keys(configObject[_container]);
      for (const i in containerKeys) {
        if (validContainerKeys.includes(containerKeys[i])) {
          prerequisiteIds.push(
            `property:${configObject[_container][containerKeys[i]]}`
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
          const value = record[recordKeys[j]];

          // special case: topLevel properties
          if (TopLevelGroupRules.map((r) => r.key).includes(value)) {
            continue;
          }

          prerequisiteIds.push(`property:${value}`);
        }
      }
    }
  });

  if (configObject["mapping"]) {
    const autoBootstrappedProperty = getAutoBootstrappedProperty(
      configObject as SourceConfigurationObject,
      otherConfigObjects
    );
    const mappingValues = Object.values(configObject["mapping"]);
    for (const value of mappingValues) {
      if (!autoBootstrappedProperty || value !== autoBootstrappedProperty.id)
        prerequisiteIds.push(`property:${value}`);
    }
  }

  if (configObject["destinationGroupMemberships"]) {
    const groupIds: string[] = Object.values(
      configObject["destinationGroupMemberships"]
    );
    groupIds.forEach((v) => prerequisiteIds.push(`group:${v}`));
  }

  if (configObject["properties"]) {
    const propertyIds: string[] = Object.keys(configObject["properties"]);
    propertyIds.forEach((v) => prerequisiteIds.push(`property:${v}`));
  }

  return {
    prerequisiteIds: prerequisiteIds.filter(uniqueArrayValues),
    providedIds: providedIds.filter(uniqueArrayValues),
  };
}

export function sortConfigObjectsWithIds(
  configObjectsWithIds: ConfigObjectWithReferenceIDs[]
) {
  const sortedConfigObjectsWithIds: ConfigObjectWithReferenceIDs[] = [];
  const dependencyGraph: Graph = {};

  configObjectsWithIds.forEach((o) => {
    o.providedIds.forEach((providedId) => {
      dependencyGraph[providedId] = o.prerequisiteIds.filter(
        (preReq) => preReq !== providedId
      );
    });
  });

  const sortedKeys = topologicalSort(dependencyGraph);

  sortedKeys.forEach((typeAndId) => {
    const [_class, id] = typeAndId.split(":");

    const parent = configObjectsWithIds.find(
      (o) => cleanClass(o.configObject) === _class && o.configObject.id === id
    );

    if (parent) {
      sortedConfigObjectsWithIds.push(parent);
    }
  });

  return sortedConfigObjectsWithIds.filter(uniqueArrayValues);
}

function uniqueArrayValues(value, index, self) {
  return self.indexOf(value) === index;
}

export function cleanClass(configObject: ConfigurationObject) {
  return configObject.class?.trim().toLowerCase() ?? undefined;
}
