import {
  DestinationMappingOptionsResponseTypes,
  SimpleAppOptions,
  DestinationMappingOptionsMethodResponse,
} from "@grouparoo/core";
import { SalesforceModel } from "./model";
import { connect } from "./../connect";
import { describeObject } from "./../objects";
import { log } from "actionhero";

export interface SalesforceDestinationMappingOptionsMethod {
  (argument: {
    appOptions: SimpleAppOptions;
    appId: string;
    model: SalesforceModel;
  }): Promise<DestinationMappingOptionsMethodResponse>;
}

export const getDestinationMappingOptions: SalesforceDestinationMappingOptionsMethod =
  async ({ appId, appOptions, model }) => {
    const conn = await connect(appOptions);
    const {
      profileObject,
      profileMatchField,
      groupObject,
      profileReferenceField,
      profileReferenceObject,
      profileReferenceMatchField,
    } = model;
    const cacheData = { appId, appOptions };
    const profileInfo = await describeObject(
      conn,
      cacheData,
      profileObject,
      true
    );
    const referenceInfo = profileReferenceField
      ? await describeObject(conn, cacheData, profileReferenceObject, true)
      : null;
    const groupInfo = await describeObject(conn, cacheData, groupObject, true);
    const { known, required } = getFields(
      profileInfo,
      profileMatchField,
      referenceInfo,
      profileReferenceMatchField,
      profileReferenceObject
    );

    return {
      labels: {
        property: {
          singular: `Salesforce ${profileInfo.label || profileObject} Field`,
          plural: `Salesforce ${profileInfo.label || profileObject} Fields`,
        },
        group: {
          singular: `Salesforce ${groupInfo.label || groupObject}`,
          plural: `Salesforce ${groupInfo.labelPlural || groupObject}`,
        },
      },
      properties: {
        required,
        known,
        allowOptionalFromProperties: false,
      },
    };
  };

const supportedTypeMap = {
  string: "string",
  email: "email",
  double: "float",
  textarea: "string",
  datetime: "date",
  boolean: "boolean",
  phone: "phone",
  url: "url",
  percent: "integer",
  encryptedstring: "string",
  int: "integer",
  any: "any",
  anytype: "any",
  id: "string",
  picklist: "string",
  currency: "float",
  //TODO:
  address: null,
  date: null,
  time: null,
  multipicklist: null, // TODO: maybe array
  location: null, // lat and lng things
  base64: null,
  byte: null,
  anyType: null, // can be several things, but never seen in wild yet
  reference: null,
  JunctionIdList: null, // is this the real name? maybe array
  junctionidlist: null,
  DataCategoryGroupReference: null, // Reference to a data category group or a category unique name.
  datacategorygroupreference: null,
  calculated: null, // Fields that are defined by a formula. See Calculated Field Type.
  masterrecord: null, // something about deleting
};

export function getSupportedSalesforceTypes(grouparooTypes = null): string[] {
  const out = [];
  for (const type in supportedTypeMap) {
    if (!supportedTypeMap[type]) {
      continue;
    }
    if (!grouparooTypes || grouparooTypes.includes(supportedTypeMap[type])) {
      out.push(type);
    }
  }
  return out;
}

const mapTypesToGrouparoo = (type) => {
  // https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm
  // https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/field_types.htm

  const grouparooType = supportedTypeMap[type];
  if (grouparooType === undefined) {
    log(`Unknown salesforce type: ${type}`);
    return null;
  }
  return grouparooType;
};

const importantFieldNames = ["FirstName", "LastName", "Email"];
const isFieldImportant = function (field: any): Boolean {
  const name = field.name;
  return importantFieldNames.indexOf(name) >= 0;
};

const REFERENCE_SEPARATOR = ".";
export const parseFieldName = function ({ profileReferenceObject, key }): {
  reference: string;
  fieldName: string;
} {
  if (profileReferenceObject) {
    const refName = `${profileReferenceObject}${REFERENCE_SEPARATOR}`;
    if (key.startsWith(refName)) {
      const end = key.substring(refName.length);
      return { reference: profileReferenceObject, fieldName: end };
    }
  }
  return { reference: null, fieldName: key };
};

const extractFields = (
  info: any,
  match: string,
  prepend: string
): {
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
  let matchField = null;

  for (const field of info.fields) {
    const keyName = field.name;
    const key = prepend
      ? `${prepend}${REFERENCE_SEPARATOR}${keyName}`
      : keyName;
    const type = mapTypesToGrouparoo(field.type);
    if (!type) {
      continue;
    }
    if (keyName === match) {
      matchField = { key, type };
      continue;
    }
    if (!field.updateable) {
      continue;
    }
    if (!field.createable) {
      continue;
    }

    if (!field.nillable && !field.defaultedOnCreate) {
      // needs to be set to create
      required.push({ key, type });
    } else {
      const important = isFieldImportant(field);
      known.push({ key, type, important });
    }
  }

  if (!matchField) {
    throw new Error("matchField not found");
  }

  required.unshift(matchField);

  known = known.sort((a, b) => {
    return a.key.localeCompare(b.key);
  });
  return { required, known };
};

export const getFields = (
  objectInfo: any,
  profileMatchField: string,
  referenceInfo: any,
  profileReferenceMatchField: string,
  profileReferenceObject: string
): {
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
  const objectFields = extractFields(objectInfo, profileMatchField, null);
  let required = objectFields.required;
  let known = objectFields.known;

  if (referenceInfo) {
    // add on these (just required)
    const refFields = extractFields(
      referenceInfo,
      profileReferenceMatchField,
      profileReferenceObject
    );
    required = required.concat(refFields.required);
  }
  return { required, known };
};
