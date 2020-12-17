import { SimpleDestinationOptions } from "@grouparoo/core";
import {
  GroupSyncMode,
  GroupSyncModeData,
} from "@grouparoo/app-templates/dist/destination/group";
export interface FacebookModel {
  syncMode: GroupSyncMode;
  primaryKey: string;
  audienceType: string;
}

export function getFacebookModel(
  destinationOptions: SimpleDestinationOptions,
  defaults: { [key: string]: string }
): FacebookModel {
  const model: FacebookModel = {
    syncMode: null,
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

  const foundMode = GroupSyncModeData[model.syncMode];
  if (!foundMode) {
    throw new Error(`Unknown sync mode: ${model.syncMode}`);
  }

  return model;
}
