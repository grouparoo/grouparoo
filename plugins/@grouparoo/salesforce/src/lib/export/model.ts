import { SimpleDestinationOptions } from "@grouparoo/core";
import {
  BatchSyncMode,
  BatchSyncModeData,
} from "@grouparoo/app-templates/dist/destination/batch/types";
export interface SalesforceModel {
  syncMode: BatchSyncMode;
  profileObject: string;
  profileMatchField: string;
  groupObject: string;
  groupNameField: string;
  membershipObject: string;
  membershipProfileField: string;
  membershipGroupField: string;
  profileReferenceField: string;
  profileReferenceObject: string;
  profileReferenceMatchField: string;
}

export function getSalesforceModel(
  destinationOptions: SimpleDestinationOptions,
  defaults: { [key: string]: string }
): SalesforceModel {
  const model: SalesforceModel = {
    syncMode: null,
    profileObject: null,
    profileMatchField: null,
    groupObject: null,
    groupNameField: null,
    membershipObject: null,
    membershipProfileField: null,
    membershipGroupField: null,
    profileReferenceField: null,
    profileReferenceObject: null,
    profileReferenceMatchField: null,
  };

  const modelKeys = Object.keys(model);
  const refKeys = modelKeys.filter((k) => k.indexOf("Reference") > 0);
  // refKeys are optional
  const requiredKeys = modelKeys.filter((k) => !refKeys.includes(k));

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

  const foundMode = BatchSyncModeData[model.syncMode];
  if (!foundMode) {
    throw new Error(`Unknown sync mode: ${model.syncMode}`);
  }

  // needs either zero or all refKeys
  let count = 0;
  for (const key of refKeys) {
    const value = (model[key] || "").toString().trim();
    if (value.length > 0) {
      model[key] = value;
      count++;
    } else {
      model[key] = null;
    }
  }
  if (count > 0) {
    if (refKeys.length !== count) {
      throw new Error(`All Salesforce reference model data is required`);
    }
  }

  return model;
}
