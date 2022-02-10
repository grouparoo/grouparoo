import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { getKnownFieldsMap } from "./destinationMappingOptions";
import { FreshdeskClient } from "../client";
import {
  exportRecordWithErrorHandling,
  makePayload,
} from "../common/exportRecord";
import { getCompanyIdByName } from "./companyMethods";

const handleContactChanges: ExportRecordPluginMethod<FreshdeskClient> = async ({
  appId,
  appOptions,
  syncOperations,
  destinationOptions,
  connection,
  export: { newRecordProperties, oldRecordProperties, newGroups, toDelete },
}) => {
  if (Object.keys(newRecordProperties).length === 0) {
    return { success: true };
  }

  if (!newRecordProperties["Name"]) {
    throw new Error(`newRecordProperties[Name] is a required mapping`);
  }

  const primaryKey = destinationOptions.primaryKey?.toString();
  const knownFieldsMap = getKnownFieldsMap();
  const primaryKeyFieldKey = knownFieldsMap[primaryKey].freshdeskKey;

  if (!newRecordProperties[primaryKey]) {
    throw new Error(`newRecordProperties[${primaryKey}] is a required mapping`);
  }

  const oldPKValue = oldRecordProperties[primaryKey];
  const newPKValue = newRecordProperties[primaryKey];

  const oldRecord = await connection.getContactBy(
    primaryKeyFieldKey as any,
    oldPKValue
  );

  const newRecord = await connection.getContactBy(
    primaryKeyFieldKey as any,
    newPKValue
  );

  console.log(
    "@@@",
    primaryKeyFieldKey,
    oldPKValue,
    !!oldRecord,
    newPKValue,
    !!newRecord
  );

  const foundId = oldRecord?.id || newRecord?.id;

  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete records."
      );
    }

    if (foundId) {
      await connection.forceDeleteContact(foundId);
    }
    return { success: true };
  }

  const payload = makePayload(
    knownFieldsMap,
    oldRecordProperties,
    newRecordProperties,
    newGroups
  );

  if (payload.company_id?.trim()) {
    payload.company_id = await getCompanyIdByName({
      appId,
      appOptions,
      connection,
      companyName: payload.company_id?.trim(),
    });
  }

  if (foundId) {
    // Update existing Person
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing records."
      );
    }

    await connection.updateContact(foundId, payload);
  } else {
    // Create new Person
    if (!syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new records."
      );
    }

    await connection.createContact(payload);
  }

  return { success: true };
};

export const exportContactRecord: ExportRecordPluginMethod =
  exportRecordWithErrorHandling(handleContactChanges);
