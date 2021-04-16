import { log } from "actionhero";
import { PropertyFiltersWithKey } from "../models/Property";
import { GroupRuleWithKey } from "../models/Group";
import extractDuplicates from "../modules/validators/extractDuplicates";
import { topologicalSort, Graph } from "../modules/topologicalSort";
import { DestinationSyncMode } from "../models/Destination";
import { MustacheUtils } from "../modules/mustacheUtils";

export interface IdsByClass {
  app?: string[];
  source?: string[];
  property?: string[];
  group?: string[];
  schedule?: string[];
  destination?: string[];
  apikey?: string[];
  team?: string[];
  teammember?: string[];
}

export interface ConfigurationObject {
  id?: string;
  class?: string;
  type?: string;
  name?: string;
  key?: string;
  appId?: string;
  sourceId?: string;
  teamId?: string;
  email?: string;
  options?: { [key: string]: any };
  filters?: PropertyFiltersWithKey[];
  identifying?: boolean;
  unique?: boolean;
  isArray?: boolean;
  rules?: GroupRuleWithKey[];
  recurring?: boolean;
  recurringFrequency?: number;
  groupId?: string;
  pluginName?: string;
  permissions?: Array<{ id: string; read: boolean; write: boolean }>;
  value?: string | boolean | number;
  mapping?: { [key: string]: any };
  syncMode?: DestinationSyncMode;
  bootstrappedProperty?: ConfigurationObject;
  destinationGroupMemberships?: { [key: string]: string };

  // For SyncTable
  source?: ConfigurationObject;
  identityProperty?: ConfigurationObject;
  schedule?: ConfigurationObject;
  destination?: ConfigurationObject;
  group?: ConfigurationObject;
  sync?: any;
  table?: string;
  userKeyColumn?: string;
  userKeyMapsToPropertyId?: string;
  highWaterColumn?: string;
}

interface ConfigObjectWithReferenceIDs {
  configObject: ConfigurationObject;
  providedIds: string[];
  prerequisiteIds: string[];
}

// Utils

export function getCodeConfigLockKey() {
  return "config:code";
}

export async function getParentByName(model: any, parentId: string) {
  if (!parentId) throw new Error(`missing parent id to find a ${model.name}`);

  const formattedId = await validateAndFormatId(model, parentId);
  const instance = await model
    .scope(null)
    .findOne({ where: { id: formattedId } });

  if (!instance) {
    throw new Error(`cannot find ${model.name} with id "${parentId}"`);
  }

  return instance;
}

export async function validateAndFormatId(model: any, id: string) {
  if (!id) {
    throw new Error("id is required");
  }

  let failing = false;
  if (id.match(/\s/)) failing = true;
  if (id.match(/[~`!#$%\^&*+=\\[\]\\';,/{}|\\":<>\?]/)) failing = true;
  if (id.length > 40) failing = true;

  if (failing) {
    throw new Error(
      `invalid id: \`${id}\` - ids must be less than 40 characters and not contain spaces or special characters`
    );
  }

  return id;
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
  mode: "created" | "updated" | "deleted" | "validated"
) {
  let logLevel = "info";
  if (mode === "created") logLevel = "notice";
  if (mode === "deleted") logLevel = "warning";

  log(
    `[ config ] ${mode} ${instance.constructor.name} \`${
      instance.key || instance.email || instance.name
    }\` (${instance.id})`,
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

export async function sortConfigurationObjects(
  configObjects: ConfigurationObject[]
): Promise<ConfigurationObject[]> {
  const configObjectsWithIds = await getConfigObjectsWithIds(configObjects);
  const sortedConfigObjectsWithIds = sortConfigObjectsWithIds(
    configObjectsWithIds
  );
  return sortedConfigObjectsWithIds.map((o) => o.configObject);
}

/**
 * Check a set of config objects for duplicate IDs.
 *
 * @param configObjects ConfigurationObject[]
 */
export function validateConfigObjects(
  configObjects: ConfigurationObject[]
): { configObjects: ConfigurationObject[]; errors: string[] } {
  let errors = [];
  const duplicates = extractDuplicates(configObjects, "id");
  if (duplicates.length > 0) {
    errors.push(`Duplicate ID values found: ${duplicates.join(",")}`);
  }
  return { configObjects, errors };
}

export async function getConfigObjectsWithIds(
  configObjects: ConfigurationObject[]
) {
  const configObjectsWithIds: ConfigObjectWithReferenceIDs[] = [];

  for (const i in configObjects) {
    const configObject = configObjects[i];
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

export async function getParentIds(
  configObject: ConfigurationObject,
  otherConfigObjects: Array<ConfigurationObject> = []
) {
  const keys = Object.keys(configObject);
  const prerequisiteIds: string[] = [];
  const providedIds: string[] = [];

  providedIds.push(configObject.id);

  // special cases
  // - Bootstrapped property
  if (
    configObject.class?.toLowerCase() === "source" &&
    configObject?.bootstrappedProperty?.id
  ) {
    providedIds.push(configObject.bootstrappedProperty.id);
  }

  // - query property with mustache dependency
  if (
    configObject.class?.toLowerCase() === "property" &&
    configObject?.options?.query
  ) {
    const mustachePrerequisiteIds = await MustacheUtils.getMustacheVariablesAsPropertyIds(
      configObject?.options?.query,
      otherConfigObjects
    );
    prerequisiteIds.push(...mustachePrerequisiteIds);
  }

  // prerequisites
  for (const i in keys) {
    if (keys[i].match(/.+Id$/)) {
      prerequisiteIds.push(configObject[keys[i]]);
    }
  }

  const objectContainers = ["options", "source", "destination"];
  const validContainerKeys = ["identifyingPropertyId", "propertyId"];
  objectContainers.map((_container) => {
    if (configObject[_container]) {
      const containerKeys = Object.keys(configObject[_container]);
      for (const i in containerKeys) {
        if (validContainerKeys.includes(containerKeys[i])) {
          prerequisiteIds.push(configObject[_container][containerKeys[i]]);
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
    const mappingValues = Object.values(configObject["mapping"]);
    mappingValues.forEach((v) => prerequisiteIds.push(v));
  }

  if (configObject["destinationGroupMemberships"]) {
    const groupIds: string[] = Object.values(
      configObject["destinationGroupMemberships"]
    );
    groupIds.forEach((v) => prerequisiteIds.push(v));
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

  sortedKeys.forEach((id) => {
    sortedConfigObjectsWithIds.push(
      configObjectsWithIds.find(
        (o) =>
          o.configObject.id === id ||
          o.configObject?.bootstrappedProperty?.id === id
      )
    );
  });

  return sortedConfigObjectsWithIds.filter(uniqueArrayValues);
}

function uniqueArrayValues(value, index, self) {
  return self.indexOf(value) === index;
}
