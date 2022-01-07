import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseType,
  objectCache,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { connect } from "../connect";
import { IntercomCacheData } from "./listMethods";
import { CreationMode } from "./destinationOptions";

export const destinationMappingOptions: DestinationMappingOptionsMethod =
  async ({ appId, appOptions, destinationOptions }) => {
    const client = await connect(appOptions);
    const required = getRequiredFields(destinationOptions);
    const known = await getKnownAttributes(client, { appId, appOptions }, true);

    return {
      labels: {
        property: {
          singular: "Intercom User Attribute",
          plural: "Intercom User Attributes",
        },
        group: {
          singular: "Intercom Tag",
          plural: "Intercom Tags",
        },
      },
      properties: {
        required,
        known,
        allowOptionalFromProperties: false,
      },
    };
  };

const mapTypesFromIntercomToGrouparoo = (key, intercomType) => {
  switch (key) {
    case "phone":
      return "phoneNumber";
    case "avatar":
      return null; // TODO: make type for URL
  }

  const map = {
    string: "string",
    integer: "integer",
    float: "float",
    boolean: "boolean",
    date: "date",
  };
  const grouparooType = map[intercomType];
  if (!grouparooType) {
    throw `Unknown Intercom type: ${intercomType}`;
  }
  return grouparooType;
};

const getRequiredFields = (
  destinationOptions: SimpleDestinationOptions
): {
  key: string;
  type: DestinationMappingOptionsResponseType;
}[] => {
  const { creationMode } = destinationOptions;
  const required = [];
  required.push({ key: "email", type: "email" });
  if (creationMode !== CreationMode.Lead) {
    required.push({ key: "external_id", type: "string" });
  }
  return required;
};

export const getKnownAttributeMap = async (
  client: any,
  cacheData: IntercomCacheData
): Promise<{ [attributeName: string]: string }> => {
  const known = await getKnownAttributes(client, cacheData);
  const out = {};
  for (const field of known) {
    out[field.key] = field.type;
  }
  return out;
};

const getKnownAttributes = async (
  client: any,
  cacheData: IntercomCacheData,
  update: boolean = false
): Promise<
  {
    key: string;
    type: DestinationMappingOptionsResponseType;
    important?: boolean;
  }[]
> => {
  const { appId, appOptions } = cacheData;
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getKnownAttributes", appOptions];
  const read = !update; // if updating, skip the read from cache. still write.
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs, read },
    async () => {
      return fetchKnownAttributes(client);
    }
  );
};

export const fetchKnownAttributes = async (
  client: any
): Promise<
  {
    key: string;
    type: DestinationMappingOptionsResponseType;
    important?: boolean;
  }[]
> => {
  const importantKeys = ["name"];
  const requiredKeys = ["email", "external_id"];

  const { body } = await client.dataAttributes.list({ model: "contact" });
  const list = body.data;

  const out = [];
  for (const field of list) {
    const key = field.full_name;
    const { api_writable, archived } = field;
    if (!api_writable) {
      continue;
    }
    if (archived) {
      continue;
    }
    if (requiredKeys.includes(key)) {
      continue;
    }
    const important = field.custom || importantKeys.includes(key);
    const type: DestinationMappingOptionsResponseType =
      mapTypesFromIntercomToGrouparoo(key, field.data_type);
    if (type) {
      out.push({ key, type, important });
    }
  }

  return out;
};
