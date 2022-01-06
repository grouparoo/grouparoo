import {
  DestinationMappingOptionsResponseType,
  SimpleAppOptions,
  DestinationMappingOptionsMethodResponse,
  Destination,
} from "@grouparoo/core";
import { SalesforceModel } from "./model";
import { connect } from "../connect";
import { describeObject } from "../objects";
import { log } from "actionhero";
import { DestinationSyncModeData } from "@grouparoo/core/dist/models/Destination";

export interface SalesforceDestinationMappingOptionsMethod {
  (argument: {
    destination: Destination;
    appOptions: SimpleAppOptions;
    appId: string;
    model: SalesforceModel;
  }): Promise<DestinationMappingOptionsMethodResponse>;
}

export const getDestinationMappingOptions: SalesforceDestinationMappingOptionsMethod =
  async ({ appId, appOptions, destination, model }) => {
    const conn = await connect(appOptions);
    const {
      recordObject,
      recordMatchField,
      groupObject,
      recordReferenceField,
      recordReferenceObject,
      recordReferenceMatchField,
    } = model;

    const cacheData = { appId, appOptions };
    const recordInfo = await describeObject(
      conn,
      cacheData,
      recordObject,
      true
    );
    const referenceInfo = recordReferenceField
      ? await describeObject(conn, cacheData, recordReferenceObject, true)
      : null;
    const groupInfo = groupObject
      ? await describeObject(conn, cacheData, groupObject, true)
      : null;

    const { known, required } = await getFields(
      destination,
      recordInfo,
      recordMatchField,
      referenceInfo,
      recordReferenceMatchField,
      recordReferenceObject
    );

    return {
      labels: {
        property: {
          singular: `Salesforce ${recordInfo.label || recordObject} Field`,
          plural: `Salesforce ${recordInfo.label || recordObject} Fields`,
        },
        group: groupInfo
          ? {
              singular: `Salesforce ${groupInfo.label || groupObject}`,
              plural: `Salesforce ${groupInfo.labelPlural || groupObject}`,
            }
          : undefined,
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
  phone: "phoneNumber",
  url: "url",
  percent: "integer",
  encryptedstring: "string",
  int: "integer",
  any: "any",
  anytype: "any",
  id: "string",
  picklist: "string",
  currency: "float",
  masterrecord: "string", // When records are merged, the ID of the record that is saved
  reference: "string", // Cross-references to a different object. Analogous to a foreign key field in SQL.
  base64: "string", // Base 64-encoded binary data.
  date: "string",
  number: "float",
  //TODO:
  address: null, //A compound data type that contains address field data.
  time: null,
  multipicklist: null, // TODO: maybe array
  location: null, // lat and lng things
  byte: null,
  anyType: null, // can be several things, but never seen in wild yet
  JunctionIdList: null, // is this the real name? maybe array
  junctionidlist: null,
  DataCategoryGroupReference: null, // Reference to a data category group or a category unique name.
  datacategorygroupreference: null,
  calculated: null, // Fields that are defined by a formula. See Calculated Field Type.
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

export function mapTypesToGrouparoo(type) {
  // https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/primitive_data_types.htm
  // https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/field_types.htm

  const grouparooType = supportedTypeMap[type];
  if (grouparooType === undefined) {
    log(`Unknown salesforce type: ${type}`);
    return null;
  }
  return grouparooType;
}

const importantFieldNames = ["FirstName", "LastName", "Email"];
const isFieldImportant = function (field: any): Boolean {
  const name = field.name;
  return importantFieldNames.indexOf(name) >= 0;
};

const REFERENCE_SEPARATOR = ".";
export const parseFieldName = function ({ recordReferenceObject, key }): {
  reference: string;
  fieldName: string;
} {
  if (recordReferenceObject) {
    const refName = `${recordReferenceObject}${REFERENCE_SEPARATOR}`;
    if (key.startsWith(refName)) {
      const end = key.substring(refName.length);
      return { reference: recordReferenceObject, fieldName: end };
    }
  }
  return { reference: null, fieldName: key };
};

const extractFields = async (
  destination: Destination,
  info: any,
  match: string,
  prepend: string
): Promise<{
  required: Array<{
    key: string;
    type: DestinationMappingOptionsResponseType;
  }>;
  known: Array<{
    key: string;
    type: DestinationMappingOptionsResponseType;
    important?: boolean;
  }>;
}> => {
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
      const syncMode = await destination.getSyncMode();
      if (syncMode !== DestinationSyncModeData.enrich.key) {
        required.push({ key, type });
      }
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

export const getFields = async (
  destination: Destination,
  objectInfo: any,
  recordMatchField: string,
  referenceInfo: any,
  recordReferenceMatchField: string,
  recordReferenceObject: string
): Promise<{
  required: Array<{
    key: string;
    type: DestinationMappingOptionsResponseType;
  }>;
  known: Array<{
    key: string;
    type: DestinationMappingOptionsResponseType;
    important?: boolean;
  }>;
}> => {
  const objectFields = await extractFields(
    destination,
    objectInfo,
    recordMatchField,
    null
  );
  let required = objectFields.required;
  let known = objectFields.known;

  if (referenceInfo) {
    // add on these (just required)
    const refFields = await extractFields(
      destination,
      referenceInfo,
      recordReferenceMatchField,
      recordReferenceObject
    );
    required = required.concat(refFields.required);
  }
  return { required, known };
};
