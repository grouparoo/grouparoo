import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { CloseioCacheData } from "../common/destinationMappingOptions";
import {
  getExportRecordWithErrorHandling,
  makePayload,
} from "../common/exportRecord";

export const exportLeadRecord: ExportRecordPluginMethod = (arg) => {
  return getExportRecordWithErrorHandling(handleLeadChanges)(arg);
};

const handleLeadChanges: ExportRecordPluginMethod = async ({
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

  if (!newRecordProperties["Name"]) {
    throw new Error(`newRecordProperties[Name] is a required mapping`);
  }

  const client = await connect(appOptions);
  const cacheData: CloseioCacheData = { appId, appOptions };

  const newName = newRecordProperties["Name"];
  const oldName = oldRecordProperties["Name"];

  const newFoundId = await client.findLeadIdByName(newName);

  let oldFoundId = null;
  if (oldName && oldName !== newName) {
    oldFoundId = await client.findLeadIdByName(oldName);
  }

  const foundId = newFoundId || oldFoundId;
  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete records."
      );
    }

    if (foundId) {
      await client.closeio.lead.delete(foundId);
    }

    return { success: true };
  }

  const payload = await makePayload(
    client,
    "lead",
    cacheData,
    oldRecordProperties,
    newRecordProperties,
    oldGroups,
    newGroups
  );

  if (foundId) {
    // Update existing Lead
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing records."
      );
    }

    await client.closeio.lead.update(foundId, payload);
  } else {
    if (!syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new records."
      );
    }
    // Create new Lead
    await client.closeio.lead.create(payload);
  }

  return { success: true };
};
