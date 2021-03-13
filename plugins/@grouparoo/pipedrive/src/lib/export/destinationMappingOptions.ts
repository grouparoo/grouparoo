import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseTypes,
  SimpleAppOptions,
  objectCache,
} from "@grouparoo/core";

import { connect } from "./../connect";

export interface PipedriveCacheData {
  appId: string;
  appOptions: SimpleAppOptions;
}

export const destinationMappingOptions: DestinationMappingOptionsMethod = async ({
  appOptions,
  appId,
}) => {
  const client = await connect(appOptions);
  const allKnown = await getKnownPersonFields(
    client,
    { appId, appOptions },
    true
  );
  const knownNotRequired = allKnown.filter((field) => !field.required);
  const required = allKnown.filter((field) => field.required);

  return {
    labels: {
      property: {
        singular: "Pipedrive Field",
        plural: "Pipedrive Fields",
      },
      group: {
        singular: "Pipedrive Filter", // TODO not sure yet
        plural: "Pipedrive Filters",
      },
    },
    properties: {
      known: knownNotRequired,
      required,
      allowOptionalFromProperties: false,
    },
  };
};

const mapTypesToGrouparoo = (
  pipedriveType: string
): DestinationMappingOptionsResponseTypes => {
  // https://pipedrive.readme.io/docs/core-api-concepts-custom-fields#section-types-of-custom-fields

  const map: Record<string, DestinationMappingOptionsResponseTypes> = {
    varchar: "string",
    varchar_auto: "string",
    text: "string",
    double: "float",
    monetary: "float",
    enum: "integer", // TODO verify this
    user: "integer", // TODO verify this
    org: "integer", // TODO verify this
    people: "integer", // TODO verify this
    phone: "phoneNumber",
    date: "date",
    address: "string", // TODO test this

    // TODO
    set: null,
    time: null,
    timerange: null,
    daterange: null,
  };

  const grouparooType = map[pipedriveType];
  if (grouparooType) {
    return grouparooType;
  }

  return null;
};

type KnownPersonField = {
  key: string;
  pipedriveKey: string;
  type: DestinationMappingOptionsResponseTypes;
  required: boolean;
  important: boolean;
};

const getKnownPersonFields = async (
  client: any,
  cacheData: PipedriveCacheData,
  update: boolean = false
): Promise<KnownPersonField[]> => {
  const { appId, appOptions } = cacheData;
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getKnownPersonFields", appOptions];
  const read = !update; // if updating, skip the read from cache. still write.
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs, read },
    async () => {
      return fetchKnownPersonFields(client);
    }
  );
};

export const fetchKnownPersonFields = async (
  client: any
): Promise<KnownPersonField[]> => {
  const required = ["name", "email"];
  const allowedFields = [...required, "phone", "label"];

  const {
    data: fields,
  } = await client.PersonFieldsController.getAllPersonFields();

  const out: KnownPersonField[] = [];

  for (const field of fields) {
    // Some fields are system fields.
    // There's no explicit flag for this, but we check for the ones whose field definition can't be modefied.
    if (!field.edit_flag && !allowedFields.includes(field.key)) continue;

    const type = mapTypesToGrouparoo(field.field_type);
    if (type) {
      out.push({
        key: field.name,
        pipedriveKey: field.key,
        required: required.includes(field.key),
        important: field.important_field,
        type,
      });
    }
  }

  return out;
};
