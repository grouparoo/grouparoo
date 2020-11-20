import { log } from "actionhero";

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
  options: { [key: string]: any };
  bootstrappedProfilePropertyRule?: ConfigurationObject;
}

// Utils

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

export async function validateAndFormatGuid(model, id: string) {
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
      `guids must be less than 40 characters and only contain lower-case letters, numbers, and underscores`
    );
  }

  return guid;
}

export function logModel(instance, isNew: boolean) {
  log(
    `[ config ] ${isNew ? "created" : "updated"} ${
      instance.constructor.name
    } \`${instance.key || instance.email || instance.name}\` (${
      instance.guid
    }) from config file`
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

export function sortConfigurationObject(
  a: ConfigurationObject,
  b: ConfigurationObject
) {
  const klass = a.class.toLocaleLowerCase();
  const otherKlass = b.class.toLocaleLowerCase();

  const points = {
    app: 10,
    source: 9,
    profilepropertyrule: 8,
    group: 7,
    destination: 6,
    setting: 5,
    schedule: 4,
    apikey: 3,
    team: 2,
    teammember: 1,
  };

  return points[otherKlass] - points[klass];
}
