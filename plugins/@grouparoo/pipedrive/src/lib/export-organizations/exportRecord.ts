import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { PipedriveCacheData } from "../common/destinationMappingOptions";
import {
  getExportRecordWithErrorHandling,
  makePayload,
} from "../common/exportRecord";

export const exportOrganizationRecord: ExportRecordPluginMethod = (arg) => {
  return getExportRecordWithErrorHandling(handleOrganizationChanges)(arg);
};

const handleOrganizationChanges: ExportRecordPluginMethod = async ({
  appId,
  appOptions,
  syncOperations,
  export: {
    newRecordProperties,
    oldRecordProperties,
    newGroups,
    oldGroups,
    toDelete,
  },
}) => {
  if (Object.keys(newRecordProperties).length === 0) {
    return { success: true };
  }

  const client = await connect(appId, appOptions);
  const cacheData: PipedriveCacheData = { appId, appOptions };

  const newName = newRecordProperties["Name"];
  const oldName = oldRecordProperties["Name"];

  const newFoundId = await client.findOrganizationIdByName(newName);

  let oldFoundId = null;
  if (oldName && oldName !== newName) {
    oldFoundId = await client.findOrganizationIdByName(oldName);
  }

  const foundId = newFoundId || oldFoundId;
  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete records."
      );
    }

    if (foundId) {
      await client.organizations.delete(foundId);
    }

    return { success: true };
  }

  if (!newRecordProperties["Name"]) {
    throw new Error(`newRecordProperties[Name] is a required mapping`);
  }

  const payload = await makePayload(
    client,
    "organization",
    cacheData,
    oldRecordProperties,
    newRecordProperties,
    oldGroups,
    newGroups
  );

  if (foundId) {
    // Update existing Person
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing records."
      );
    }

    await client.organizations.update(foundId, payload);
  } else {
    if (!syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new records."
      );
    }
    // Create new Person
    await client.organizations.create(payload);
  }

  return { success: true };
};
