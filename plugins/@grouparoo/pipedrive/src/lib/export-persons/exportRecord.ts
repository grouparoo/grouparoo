import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { PipedriveCacheData } from "../common/destinationMappingOptions";
import {
  getExportRecordWithErrorHandling,
  makePayload,
} from "../common/exportRecord";

export const exportPersonRecord: ExportRecordPluginMethod = (arg) => {
  return getExportRecordWithErrorHandling(handlePersonChanges)(arg);
};

const handlePersonChanges: ExportRecordPluginMethod = async ({
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

  const newEmail = newRecordProperties["Email"];
  const oldEmail = oldRecordProperties["Email"];

  const newFoundId = await client.findPersonIdByEmail(newEmail);

  let oldFoundId = null;
  if (oldEmail && oldEmail !== newEmail) {
    oldFoundId = await client.findPersonIdByEmail(oldEmail);
  }

  const foundId = newFoundId || oldFoundId;
  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete records."
      );
    }

    if (foundId) {
      await client.persons.delete(foundId);
    }

    return { success: true };
  }

  if (!newRecordProperties["Email"]) {
    throw new Error(`newRecordProperties[Email] is a required mapping`);
  }

  if (!newRecordProperties["Name"]) {
    throw new Error(`newRecordProperties[Name] is a required mapping`);
  }

  const payload = await makePayload(
    client,
    "person",
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

    await client.persons.update(foundId, payload);
  } else {
    if (!syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new records."
      );
    }
    // Create new Person
    await client.persons.create(payload);
  }

  return { success: true };
};
