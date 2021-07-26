import {
  ExportProfilePluginMethod,
  Errors,
  DestinationSyncOperations,
} from "@grouparoo/core";
import Mixpanel from "../client/mixpanel";
import { connect } from "../connect";

const deleteProfileOrClearGroups = async (
  client: Mixpanel,
  syncOperations: DestinationSyncOperations,
  profile: any
) => {
  if (syncOperations.delete) {
    await client.ingestion.profile.delete(profile["$distinct_id"]);
  } else {
    if (syncOperations.update) {
      // clear groups
      await client.ingestion.profile.update(profile["$distinct_id"], {
        groups: [],
      });
    }
  }
};

export const exportProfile: ExportProfilePluginMethod = async ({
  appId,
  appOptions,
  syncOperations,
  export: {
    toDelete,
    newProfileProperties,
    oldProfileProperties,
    newGroups,
    oldGroups,
  },
}) => {
  // if we received no mapped data... just exit
  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }

  const client = await connect(appOptions);

  const distinctId = newProfileProperties["$distinct_id"]; // this is how we will identify profiles
  const oldDistinctId = oldProfileProperties["$distinct_id"];
  if (!distinctId) {
    throw new Error(`newProfileProperties[$distinct_id] is a required mapping`);
  }

  let profile;
  let oldProfile;
  profile = await client.query.profile.getByDistinctId(distinctId);
  if (oldDistinctId && oldDistinctId !== distinctId) {
    oldProfile = await client.query.profile.getByDistinctId(oldDistinctId);
  }
  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Error("Destination sync mode does not allow removing profiles");
    }
    const profileToDelete = oldProfile || profile;
    if (profileToDelete) {
      await deleteProfileOrClearGroups(client, syncOperations, profileToDelete);
    }
    return { success: true };
  } else {
    // create the profile and set properties
    const deletePropertiesPayload = {};
    const newPropertyKeys = Object.keys(newProfileProperties);
    Object.keys(oldProfileProperties)
      .filter((k) => !newPropertyKeys.includes(k))
      .forEach((k) => (deletePropertiesPayload[k] = null));

    let payload = Object.assign(newProfileProperties, deletePropertiesPayload);
    const formattedDataFields = {};
    for (const key of Object.keys(payload)) {
      if (key === "$distinct_id") {
        continue;
      }
      formattedDataFields[key] = formatVar(payload[key]);
    }
    formattedDataFields["groups"] = getGroupsListToExport(
      profile,
      oldGroups,
      newGroups
    );
    if (profile && !syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not allow updating existing profiles."
      );
    }

    if (!profile && !syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not allow creating new profiles."
      );
    }
    // on distinctId change: delete the old one or clear its groups.
    if (oldProfile) {
      await deleteProfileOrClearGroups(client, syncOperations, oldProfile);
    }

    await client.ingestion.profile.update(distinctId, formattedDataFields);
  }
  return { success: true };
};

function getGroupsListToExport(profile, oldGroups, newGroups) {
  const groups = newGroups;
  if (profile) {
    const removedGroups = [];
    for (const group of oldGroups) {
      if (!groups.includes(group)) {
        removedGroups.push(group);
      }
    }
    for (const group of profile["$properties"]["groups"]) {
      if (!groups.includes(group) && !removedGroups.includes(group)) {
        groups.push(group);
      }
    }
  }
  return groups;
}

function formatVar(value) {
  if (value === undefined || value === null) {
    return null;
  }
  return value;
}
