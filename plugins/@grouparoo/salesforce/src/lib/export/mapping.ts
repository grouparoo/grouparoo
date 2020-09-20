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
  (argument: { appOptions: SimpleAppOptions; model: SalesforceModel }): Promise<
    DestinationMappingOptionsMethodResponse
  >;
}

export const getDestinationMappingOptions: SalesforceDestinationMappingOptionsMethod = async ({
  appOptions,
  model,
}) => {
  const conn = await connect(appOptions);
  const { profileObject, profileMatchField, groupObject } = model;
  const profileInfo = await describeObject(conn, profileObject, true);
  const groupInfo = await describeObject(conn, groupObject, true);
  const { known, required } = await getFields(profileInfo, profileMatchField);

  return {
    labels: {
      profilePropertyRule: {
        singular: `Salesforce ${profileInfo.label || profileObject} Field`,
        plural: `Salesforce ${profileInfo.label || profileObject} Fields`,
      },
      group: {
        singular: `Salesforce ${groupInfo.label || groupObject}`,
        plural: `Salesforce ${groupInfo.labelPlural || groupObject}`,
      },
    },
    profilePropertyRules: {
      required,
      known,
      allowOptionalFromProfilePropertyRules: false,
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
  anyType: "any", // can be several things, but never seen in wild yet
  any: "any",
  anytype: "any",
  id: "string",
  picklist: "string",
  //TODO:
  currency: null,
  address: null,
  date: null,
  time: null,
  multipicklist: null, // TODO: maybe array
  location: null, // lat and lng things
  base64: null,
  byte: null,
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

export const getFields = async (
  objectInfo: any,
  profileMatchField
): Promise<{
  required: Array<{
    key: string;
    type: DestinationMappingOptionsResponseTypes;
  }>;
  known: Array<{
    key: string;
    type: DestinationMappingOptionsResponseTypes;
    important?: boolean;
  }>;
}> => {
  const required = [];
  let known = [];
  let matchField = null;

  for (const field of objectInfo.fields) {
    const key = field.name;
    const type = mapTypesToGrouparoo(field.type);
    if (!type) {
      continue;
    }
    if (key === profileMatchField) {
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
