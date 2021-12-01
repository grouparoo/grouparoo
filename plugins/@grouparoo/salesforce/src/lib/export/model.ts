import { DestinationSyncMode, SimpleDestinationOptions } from "@grouparoo/core";

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

export const SALES_FORCE_DESTINATIONS = {
  object: "salesforce-export-objects",
  contact: "salesforce-export-contact",
} as const;

export function getSalesforceModel(
  destinationOptions: SimpleDestinationOptions,
  destination: string,
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

  let destinationOptionsMapping = destinationOptions;
  switch (destination) {
    case SALES_FORCE_DESTINATIONS.object:
      // explicit default
      break;
    case SALES_FORCE_DESTINATIONS.contact:
      destinationOptionsMapping = getObjectsMapping(destinationOptions);
  }

  const modelKeys = Object.keys(model);
  const refKeys = [
    "recordReferenceField",
    "recordReferenceObject",
    "recordReferenceMatchField",
  ];
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

  const destKeys = Object.keys(destinationOptionsMapping);
  for (const key of modelKeys) {
    if (destKeys.includes(key)) {
      model[key] = destinationOptionsMapping[key];
    } else {
      model[key] = defaults[key];
    }

    if (requiredKeys.includes(key) && !model[key]) {
      throw new Error(`Missing Salesforce model data: ${key}`);
    }
  }
  checkModelIntegrity(model, refKeys, "Reference");
  checkModelIntegrity(model, groupKeys, "Group");

  return model;
}

function getObjectsMapping(destinationOptions: SimpleDestinationOptions) {
  const mapping = {};
  if (destinationOptions.primaryKey) {
    Object.assign(mapping, {
      recordObject: "Contact",
      recordMatchField: destinationOptions.primaryKey,
    });
  }
  if (destinationOptions.accountKey) {
    Object.assign(mapping, {
      recordReferenceField: "AccountId",
      recordReferenceObject: "Account",
      recordReferenceMatchField: destinationOptions.accountKey,
    });
  }
  return mapping;
}

function checkModelIntegrity(model, keys, type) {
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
      throw new Error(
        `To enable ${type} data syncing, all related options must be set.`
      );
    }
  }
}
