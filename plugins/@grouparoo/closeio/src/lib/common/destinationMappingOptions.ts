import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
  objectCache,
  SimpleAppOptions,
} from "@grouparoo/core";
import { CloseioClient } from "../client";
import { GROUP_FIELD_PREFIX } from "./listMethods";
import { configMapping, EntityType } from "./configMapping";
import { connect } from "../connect";

export interface CloseioCacheData {
  appId: string;
  appOptions: SimpleAppOptions;
}

export type CloseioFieldType =
  | "date"
  | "datetime"
  | "hidden"
  | "user"
  | "choices"
  | "contact"
  | "number"
  | "text";

export const CloseioTypeMapping: Record<
  CloseioFieldType,
  DestinationMappingOptionsResponseType
> = {
  text: "string",
  hidden: "string",
  number: "number",
  date: "date",
  datetime: "date",
  user: null,
  choices: null,
  contact: null,
};

export type KnownCloseioField = {
  key: string;
  closeioKey: string;
  type: DestinationMappingOptionsResponseType;
  closeioType: CloseioFieldType;
  required: boolean;
  important: boolean;
  groupMembershipField: boolean;
  // multiple: boolean;
};

export async function fetchCustomFields(
  client: CloseioClient,
  type: EntityType
): Promise<KnownCloseioField[]> {
  const result = await client.closeio._get(`/custom_field/${type}/`);
  const fields: KnownCloseioField[] = [];
  for (const field of result.data) {
    // Omit multiple-value fields
    if (field.accepts_multiple_values) {
      continue;
    }

    // Omit fields with non-allowed types
    const grouparooType = CloseioTypeMapping[field.type];
    if (grouparooType === null) {
      continue;
    }

    const _field: KnownCloseioField = {
      closeioKey: field.id,
      key: field.name,
      closeioType: field.type,
      type: grouparooType,
      required: false,
      important: false,
      groupMembershipField: field.name.startsWith(GROUP_FIELD_PREFIX),
      // multiple: field.accepts_multiple_values,
    };
    fields.push(_field);
  }
  return fields;
}

export const getCustomFields = async (
  client: CloseioClient,
  type: EntityType,
  cacheData: CloseioCacheData,
  update: boolean = false
): Promise<KnownCloseioField[]> => {
  const { appId, appOptions } = cacheData;
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getCustomFields", type, appOptions];
  const read = !update; // if updating, skip the read from cache. still write.
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs, read },
    async () => {
      return fetchCustomFields(client, type);
    }
  );
};

export const DEFAULT_FIELD_PROPS: Partial<KnownCloseioField> = {
  type: "string",
  closeioType: "text",
  required: false,
  important: false,
  groupMembershipField: false,
};

export const getKnownFields = (type: EntityType) => {
  return configMapping[type].fields.map<KnownCloseioField>((field) =>
    Object.assign({} as any, DEFAULT_FIELD_PROPS, field)
  );
};

export const getAllFields = async (
  client: CloseioClient,
  type: EntityType,
  cacheData: CloseioCacheData,
  update: boolean = false
) => {
  const closeioCustomFields = await getCustomFields(
    client,
    type,
    cacheData,
    update
  );
  return [...getKnownFields(type), ...closeioCustomFields];
};

export const getDestinationMappingOptions: (
  type: EntityType
) => DestinationMappingOptionsMethod =
  (type: EntityType) =>
  async ({ appId, appOptions }) => {
    const client = await connect(appOptions);
    const cacheData = {
      appId,
      appOptions,
    };
    const allKnown = await getAllFields(client, type, cacheData, true);

    const required = allKnown.filter((field) => field.required);

    // Filter out required fields and those that we create to manage group membership
    const knownNotRequired = allKnown.filter(
      (field) => !field.required && !field.groupMembershipField
    );

    return {
      labels: {
        property: {
          singular: "Close.io Field",
          plural: "Close.io Fields",
        },
        group: {
          singular: "Close.io Filter",
          plural: "Close.io Filters",
        },
      },
      properties: {
        known: knownNotRequired,
        required,
        allowOptionalFromProperties: false,
      },
    };
  };

export function getCloseioCustomFieldKey(
  allFields: KnownCloseioField[],
  key: string
) {
  const field = allFields.find((f) => f.key === key);
  return field ? `custom.${field.closeioKey}` : null;
}
