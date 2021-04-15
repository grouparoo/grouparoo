import { SimpleDestinationOptions } from "@grouparoo/core";

export type AudienceSubtype = "CUSTOM" | "LOOKALIKE";

export interface FacebookModel {
  primaryKey: string;
  audienceType: AudienceSubtype;
}

export function getFacebookModel(
  destinationOptions: SimpleDestinationOptions,
  defaults: { [key: string]: string }
): FacebookModel {
  const model: FacebookModel = {
    primaryKey: null,
    audienceType: null,
  };

  const modelKeys = Object.keys(model);
  const requiredKeys = modelKeys; // all required

  const destKeys = Object.keys(destinationOptions);
  for (const key of modelKeys) {
    if (destKeys.includes(key)) {
      model[key] = destinationOptions[key];
    } else {
      model[key] = defaults[key];
    }

    if (requiredKeys.includes(key) && !model[key]) {
      throw new Error(`Missing Facebook model data: ${key}`);
    }
  }

  return model;
}
