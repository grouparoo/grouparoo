import {
  DestinationMappingOptionsMethod,
  DestinationMappingOptionsResponseTypes,
} from "@grouparoo/core";
import { connect } from "./../connect";
import { log } from "actionhero";

export const destinationMappingOptions: DestinationMappingOptionsMethod = async () => {
  const { known, required } = getFields();

  return {
    labels: {
      profilePropertyRule: {
        singular: "Facebook Key",
        plural: "Facebook Keys",
      },
      group: {
        singular: "Facebook Audience",
        plural: "Facebook Audiences",
      },
    },
    profilePropertyRules: {
      required,
      known,
      allowOptionalFromProfilePropertyRules: false,
    },
  };
};

const FIELDS = {
  // don't need to hash. can be used to update and delete
  EXTERN_ID: { type: "string", important: true },

  // Hashing required. Trim leading, trail white space, and convert all characters to lowercase.
  EMAIL: { type: "email", important: true },

  // Hashing required. Use these values: m for male and f for female.
  GEN: { type: "string" },

  // criteria: first name. Hashing required. Use a-z only. Lowercase only, no punctuation. Special characters in UTF8 format.
  FN: { type: "string", important: true },

  // criteria: last name. Hashing required. Use a-z only. Lowercase only, no punctuation. Special characters in UTF8 format.
  LN: { type: "string", important: true },

  // criteria: first name initial Hashing required. Use a-z only. Lowercase only. Special characters in UTF8 format.
  FI: { type: "string" },

  // criteria: U.S. states Hashing required. Use the 2-character ANSI abbreviation code, lowercase. Normalize states outside U.S. in lowercase, no punctuation, no special characters, no white space.
  ST: { type: "string" },

  // criteria: city Hashing required. Use a-z only. Lowercase only, no punctuation, no special characters, no white space.
  CT: { type: "string" },

  // criteria: zip code Hashing required. Use lowercase, no white space. Use only the first 5 digits for U.S. Use Area/District/Sector format for the UK.
  ZIP: { type: "string" },

  // criteria: country code Hashing required. Use lowercase, 2-letter country codes in ISO 3166-1 alpha-2.
  COUNTRY: { type: "string" },

  // criteria: mobile advertiser ID Hashing NOT required. Use all lowercase, keep hyphens.
  MADID: { type: "string" },

  // TODO:
  // Hashing required. Remove symbols, letters, and any leading zeroes. You should prefix the country code if COUNTRY field is not specified.
  PHONE: { type: null },

  // criteria: birth month  Hashing required. Use the MM format: 01 to 12.
  DOBM: { type: null },

  // criteria: birthday Hashing required. Use the DD format: 01 to 31.
  DOBD: { type: null },

  // Hashing required. Use the YYYY format from 1900 to current year.
  DOBY: { type: null },
};

const mapTypesFromFacebookToGrouparoo = (key) => {
  // https://developers.facebook.com/docs/marketing-api/audiences/guides/custom-audiences/
  const obj = FIELDS[key];
  if (!obj) {
    log(`Unknown marketo type: ${key}`);
    return null;
  }
  if (!obj.type) {
    return null;
  }
  return obj.type;
};

export const getFields = (): {
  required: Array<{
    key: string;
    type: DestinationMappingOptionsResponseTypes;
  }>;
  known: Array<{
    key: string;
    type: DestinationMappingOptionsResponseTypes;
    important?: boolean;
  }>;
} => {
  const required = [];
  let known = [];
  for (const key in FIELDS) {
    const obj = FIELDS[key];
    const type = mapTypesFromFacebookToGrouparoo(key);
    if (!type) {
      continue;
    }
    if (obj.required) {
      required.push({ key, type });
    } else {
      const important = !!obj.important;
      known.push({ key, type, important });
    }
  }
  return { required, known };
};
