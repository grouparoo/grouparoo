import { SimpleDestinationOptions } from "@grouparoo/core";

export interface SalesforceModel {
  recordObject: string;
  recordMatchField: string;
  groupObject: string;
  groupNameField: string;
  membershipObject: string;
  membershipRecordField: string;
  membershipGroupField: string;
  recordReferenceField: string;
  recordReferenceObject: string;
  recordReferenceMatchField: string;
}

export function getSalesforceModel(
  destinationOptions: SimpleDestinationOptions,
  defaults: { [key: string]: string } = {}
): SalesforceModel {
  const model: SalesforceModel = {
    recordObject: null,
    recordMatchField: null,
    groupObject: null,
    groupNameField: null,
    membershipObject: null,
    membershipRecordField: null,
    membershipGroupField: null,
    recordReferenceField: null,
    recordReferenceObject: null,
    recordReferenceMatchField: null,
  };

  const modelKeys = Object.keys(model);
  const refKeys = modelKeys.filter((k) => k.indexOf("Reference") > 0);
  const groupKeys = [
    "groupObject",
    "groupNameField",
    "membershipObject",
    "membershipRecordField",
    "membershipGroupField",
  ];
  // refKeys are optional
  const requiredKeys = modelKeys.filter(
    (k) => !refKeys.includes(k) && !groupKeys.includes(k)
  );

  const destKeys = Object.keys(destinationOptions);
  for (const key of modelKeys) {
    if (destKeys.includes(key)) {
      model[key] = destinationOptions[key];
    } else {
      model[key] = defaults[key];
    }

    if (requiredKeys.includes(key) && !model[key]) {
      throw new Error(`Missing Salesforce model data: ${key}`);
    }
  }
  checkModelIntegrity(model, refKeys);
  checkModelIntegrity(model, groupKeys);
  return model;
}

function checkModelIntegrity(model, keys) {
  // needs either zero or all keys
  let count = 0;
  for (const key of keys) {
    const value = (model[key] || "").toString().trim();
    if (value.length > 0) {
      model[key] = value;
      count++;
    } else {
      model[key] = null;
    }
  }
  if (count > 0) {
    if (keys.length !== count) {
      const type =
        keys[0].indexOf("Reference") > 0 ? "reference" : "groups related";
      throw new Error(`All Salesforce ${type} model data is required`);
    }
  }
}
