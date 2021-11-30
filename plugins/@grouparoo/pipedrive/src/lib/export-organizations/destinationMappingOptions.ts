import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
  SimpleAppOptions,
  objectCache,
} from "@grouparoo/core";

import { connect } from "../connect";
import { PipedriveClient } from "../client";
import { GROUP_FIELD_PREFIX } from "./listMethods";

export interface PipedriveCacheData {
  appId: string;
  appOptions: SimpleAppOptions;
}

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appOptions, appId }) => {
    const client = await connect(appOptions);
    const allKnown = await getKnownOrganizationFields(
      client,
      { appId, appOptions },
      true
    );

    const required = allKnown.filter((field) => field.required);

    // Filter out required fields and those that we create to manage group membership
    const knownNotRequired = allKnown.filter(
      (field) => !field.required && !field.groupMembershipField
    );

    return {
      labels: {
        property: {
          singular: "Pipedrive Field",
          plural: "Pipedrive Fields",
        },
        group: {
          singular: "Pipedrive Filter",
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
  pipedriveType: string,
  fieldName: string
): DestinationMappingOptionsResponseType => {
  // https://pipedrive.readme.io/docs/core-api-concepts-custom-fields#section-types-of-custom-fields

  const overrides: Record<string, DestinationMappingOptionsResponseType> = {
    Name: "string",
  };

  if (overrides[fieldName]) return overrides[fieldName];

  const map: Record<string, DestinationMappingOptionsResponseType> = {
    varchar: "string",
    varchar_auto: "string",
    text: "string",
    double: "number",
    monetary: "number",
    enum: "integer",
    user: "integer",
    org: "integer",
    people: "integer",
    phone: "phoneNumber",
    date: "date",
    address: "string",
    daterange: "date",

    // TODO
    time: null, // time in the format of "00:00:00"
    timerange: null,
    set: null, // multiple options
  };

  const grouparooType = map[pipedriveType];
  if (grouparooType) {
    return grouparooType;
  }

  return null;
};

type KnownOrganizationField = {
  key: string;
  pipedriveKey: string;
  type: DestinationMappingOptionsResponseType;
  required: boolean;
  important: boolean;
  groupMembershipField: boolean;
};

export const getKnownOrganizationFieldMap = async (
  client: PipedriveClient,
  cacheData: PipedriveCacheData,
  update: boolean = false
): Promise<{ [fieldName: string]: string }> => {
  const known = await getKnownOrganizationFields(client, cacheData, update);
  const out = {};
  for (const field of known) {
    out[field.key] = field.pipedriveKey;
  }
  return out;
};

const getKnownOrganizationFields = async (
  client: PipedriveClient,
  cacheData: PipedriveCacheData,
  update: boolean = false
): Promise<KnownOrganizationField[]> => {
  const { appId, appOptions } = cacheData;
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getKnownOrganizationFields", appOptions];
  const read = !update; // if updating, skip the read from cache. still write.
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs, read },
    async () => {
      return fetchKnownOrganizationFields(client);
    }
  );
};

export const fetchKnownOrganizationFields = async (
  client: PipedriveClient
): Promise<KnownOrganizationField[]> => {
  const required = ["name"];
  const allowedFields = [...required, "label"];

  // Allow setting "End of" for date ranges and "Currency" for monetary fields
  // The keys for these are like cd77a9b30948242ef1ef57acbe28c0aa054b8fde_until
  const subfieldsRegex = /(_until|_currency)$/;

  const fields = await client.organizations.fields.getAll();

  const out: KnownOrganizationField[] = [];

  for (const field of fields) {
    // Some fields are system fields that don't make sense to manually update (counts, computed fields, auto timestamps...)
    // There's no explicit flag for this, but we check for the ones whose field definition can't be modified.
    // Some of those fields should be available though, so we let them through.
    if (!field.edit_flag && !allowedFields.includes(field.key)) continue;

    // Most subfields can not be edited, but some can be
    if (field.is_subfield && !field.key.match(subfieldsRegex)) continue;

    const type = mapTypesToGrouparoo(field.field_type, field.name);
    if (type) {
      out.push({
        key: field.name,
        pipedriveKey: field.key,
        required: required.includes(field.key),
        important: field.important_flag, // they have a built-in (paid) feature to mark fields as important
        groupMembershipField: field.name.startsWith(GROUP_FIELD_PREFIX), // used to hide our fields from destinationMappingOptions
        type,
      });
    }
  }

  return out;
};
