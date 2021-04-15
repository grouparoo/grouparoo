import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";

export enum CreationMode {
  // these values actually used in destinationOptions settings
  User = "User", // new contacts are users, others updated as-is
  Lead = "Lead", // new contacts are leads, others updated as-is
  Lifecycle = "Lifecycle", // if there is an external_id, it's a user, else lead
}

export const CreationModeData = {
  [CreationMode.User]: {
    description: "Creates new contacts as users.",
  },
  [CreationMode.Lead]: {
    description: "Creates new contacts as leads.",
  },
  [CreationMode.Lifecycle]: {
    description:
      "If there is no external_id, it is a lead. Otherwise, it is a user.",
  },
};

export enum RemovalMode {
  // these values actually used in destinationOptions settings
  Archive = "Archive",
  Delete = "Delete",
}

export const RemovalModeData = {
  [RemovalMode.Archive]: {
    description: "Archive contacts that are no longer being synced.",
  },
  [RemovalMode.Delete]: {
    description:
      "Permanently delete contacts that are no longer being synced. WARNING: These users can never be re-created in Intercom.",
  },
};

export const destinationOptions: DestinationOptionsMethod = async () => {
  const out: DestinationOptionsMethodResponse = {};
  Object.assign(out, getCreationModes());
  Object.assign(out, getRemovalModes());
  return out;
};

function getCreationModes() {
  const out: DestinationOptionsMethodResponse = {
    creationMode: { type: "list", options: [], descriptions: [] },
  };

  for (const mode in CreationModeData) {
    out.creationMode.options.push(mode);
    out.creationMode.descriptions.push(CreationModeData[mode].description);
  }

  return out;
}

function getRemovalModes() {
  const out: DestinationOptionsMethodResponse = {
    removalMode: { type: "list", options: [], descriptions: [] },
  };

  for (const mode in RemovalModeData) {
    out.removalMode.options.push(mode);
    out.removalMode.descriptions.push(RemovalModeData[mode].description);
  }

  return out;
}
