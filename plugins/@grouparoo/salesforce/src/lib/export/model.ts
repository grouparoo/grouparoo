import { SimpleDestinationOptions } from "@grouparoo/core";
export interface SalesforceModel {
  profileObject: string;
  profileMatchField: string;
  groupObject: string;
  groupNameField: string;
  membershipObject: string;
  membershipProfileField: string;
  membershipGroupField: string;
}

export function getSalesforceModel(
  destinationOptions: SimpleDestinationOptions,
  defaults: { [key: string]: string }
): SalesforceModel {
  const model: SalesforceModel = {
    profileObject: null,
    profileMatchField: null,
    groupObject: null,
    groupNameField: null,
    membershipObject: null,
    membershipProfileField: null,
    membershipGroupField: null,
  };
  // all for now, could be less later
  const requiredKeys = Object.keys(model);

  const modelKeys = Object.keys(model);
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
  return model;
}
