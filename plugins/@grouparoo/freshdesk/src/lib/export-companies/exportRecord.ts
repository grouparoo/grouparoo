import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { getKnownFieldsMap } from "./destinationMappingOptions";
import { FreshdeskClient } from "../client";
import {
  exportRecordWithErrorHandling,
  makePayload,
} from "../common/exportRecord";

const handleCompanyChanges: ExportRecordPluginMethod<FreshdeskClient> = async ({
  syncOperations,
  connection,
  export: { newRecordProperties, oldRecordProperties, toDelete },
}) => {
  if (Object.keys(newRecordProperties).length === 0) {
    return { success: true };
  }

  if (!newRecordProperties["Name"]) {
    throw new Error(`newRecordProperties[Name] is a required mapping`);
  }

  const oldName = oldRecordProperties["Name"];
  const newName = newRecordProperties["Name"];

  const oldRecord = await connection.getCompanyByName(oldName);
  const newRecord = await connection.getCompanyByName(newName);

  const foundId = oldRecord?.id || newRecord?.id;

  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete records."
      );
    }

    if (foundId) {
      await connection.deleteCompany(foundId);
    }
    return { success: true };
  }

  const payload = makePayload(
    getKnownFieldsMap(),
    oldRecordProperties,
    newRecordProperties
  );

  if (foundId) {
    // Update existing Person
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing records."
      );
    }

    await connection.updateCompany(foundId, payload);
  } else {
    // Create new Person
    if (!syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new records."
      );
    }

    await connection.createCompany(payload);
  }

  return { success: true };
};

export const exportCompanyRecord: ExportRecordPluginMethod =
  exportRecordWithErrorHandling(handleCompanyChanges);
