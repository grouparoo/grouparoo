import {
  DestinationMappingOptionsResponseType,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";
import { log } from "actionhero";
import { FacebookModel, AudienceSubtype } from "./model";

const FIELDS = {
  // don't need to hash. can be used to update and delete
  EXTERN_ID: {
    type: "string",
    name: "External ID",
    important: true,
    identity: true,
  },

  // Hashing required. Trim leading, trail white space, and convert all characters to lowercase.
  EMAIL: {
    type: "email",
    name: "Email",
    important: true,
    identity: true,
    encode: "em",
  },

  LOOKALIKE_VALUE: {
    type: "float",
    name: "Lookalike Value",
    important: true,
    audienceTypes: ["LOOKALIKE"],
  },

  // Hashing required. Use these values: m for male and f for female.
  GEN: { type: "string", name: "Gender", encode: "ge" },

  // criteria: first name. Hashing required. Use a-z only. Lowercase only, no punctuation. Special characters in UTF8 format.
  FN: {
    type: "string",
    important: true,
    name: "First Name",
    encode: "f5first",
  },

  // criteria: last name. Hashing required. Use a-z only. Lowercase only, no punctuation. Special characters in UTF8 format.
  LN: { type: "string", important: true, name: "Last Name", encode: "f5last" },

  // criteria: first name initial Hashing required. Use a-z only. Lowercase only. Special characters in UTF8 format.
  FI: { type: "string", name: "First Name Initial", encode: "fi" },

  // criteria: U.S. states Hashing required. Use the 2-character ANSI abbreviation code, lowercase. Normalize states outside U.S. in lowercase, no punctuation, no special characters, no white space.
  ST: { type: "string", name: "State", encode: "st" },

  // criteria: city Hashing required. Use a-z only. Lowercase only, no punctuation, no special characters, no white space.
  CT: { type: "string", name: "City", encode: "ct" },

  // criteria: zip code Hashing required. Use lowercase, no white space. Use only the first 5 digits for U.S. Use Area/District/Sector format for the UK.
  ZIP: { type: "string", name: "Zip Code", encode: "zp" },

  // criteria: country code Hashing required. Use lowercase, 2-letter country codes in ISO 3166-1 alpha-2.
  COUNTRY: { type: "string", name: "Country", encode: "country" },

  // criteria: mobile advertiser ID Hashing NOT required. Use all lowercase, keep hyphens.
  MADID: { type: "string", name: "Mobile Advertiser ID", identity: true },

  // TODO:
  // Hashing required. Remove symbols, letters, and any leading zeroes. You should prefix the country code if COUNTRY field is not specified.
  PHONE: { type: null, name: "Phone", encode: "ph" },

  // criteria: birth month  Hashing required. Use the MM format: 01 to 12.
  DOBM: { type: null, name: "Birth Month", encode: "dobm" },

  // criteria: birthday Hashing required. Use the DD format: 01 to 31.
  DOBD: { type: null, name: "Birth Day", encode: "dobd" },

  // Hashing required. Use the YYYY format from 1900 to current year.
  DOBY: { type: null, name: "Birth Year", encode: "doby" },
};

export const getMappingFields = (
  model: FacebookModel
): {
  required: {
    key: string;
    type: DestinationMappingOptionsResponseType;
  }[];
  known: {
    key: string;
    type: DestinationMappingOptionsResponseType;
    important?: boolean;
  }[];
} => {
  const { primaryKey, audienceType } = model;
  const required = [];
  let known = [];
  for (const key in FIELDS) {
    const obj = FIELDS[key];
    const type = getFieldType(key);
    if (!type) {
      continue;
    }
    if (obj.audienceTypes && !obj.audienceTypes.includes(audienceType)) {
      continue;
    }
    if (key === primaryKey) {
      required.push({ key, type });
    } else {
      const important = !!obj.important;
      known.push({ key, type, important });
    }
  }
  return { required, known };
};

export const getFieldList = (
  audienceType: AudienceSubtype
): DestinationOptionsMethodResponse => {
  const out: DestinationOptionsMethodResponse = {};
  Object.assign(out, getPrimaryKeys(audienceType));

  return out;
};

function getPrimaryKeys(audienceType: AudienceSubtype) {
  const out: DestinationOptionsMethodResponse = {
    primaryKey: { type: "list", options: [], descriptions: [] },
  };

  for (const key in FIELDS) {
    const obj = FIELDS[key];
    if (!obj.identity) {
      continue;
    }
    if (obj.audienceTypes && !obj.audienceTypes.includes(audienceType)) {
      continue;
    }
    out.primaryKey.options.push(key);
    out.primaryKey.descriptions.push(obj.name);
  }

  return out;
}

export function getEncodeKey(key: string) {
  const obj = FIELDS[key];
  if (!obj) {
    log(`Unknown facebook type for encoding: ${key}`);
    return undefined;
  }
  return obj.encode || null;
}

export function getFieldType(key: string) {
  // https://developers.facebook.com/docs/marketing-api/audiences/guides/custom-audiences/
  const obj = FIELDS[key];
  if (!obj) {
    log(`Unknown facebook type for type: ${key}`);
    return null;
  }
  return obj.type || null;
}
