import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";

export enum SyncMode {
  // these values actually used in destinationOptions settings
  Sync = "Sync", // create, update, delete (default)
  Enrich = "Enrich", // update only (no create or delete)
  Additive = "Additive", // create or update (no delete)
}

export const SyncModeData = {
  [SyncMode.Sync]: {
    create: true,
    update: true,
    delete: true,
    description: "Sync all profiles (create, update, archive)",
  },
  [SyncMode.Enrich]: {
    create: false,
    update: true,
    delete: false,
    description: "Only update existing objects (update)",
  },
  [SyncMode.Additive]: {
    create: true,
    update: true,
    delete: false,
    description: "Sync all profiles, but do not archive (create, update)",
  },
};

export const destinationOptions: DestinationOptionsMethod = async () => {
  const out: DestinationOptionsMethodResponse = {};
  Object.assign(out, getSyncModes());
  return out;
};

function getSyncModes() {
  const out: DestinationOptionsMethodResponse = {
    syncMode: { type: "list", options: [], descriptions: [] },
  };

  for (const mode in SyncModeData) {
    out.syncMode.options.push(mode);
    out.syncMode.descriptions.push(SyncModeData[mode].description);
  }

  return out;
}
