import { BatchExport } from "@grouparoo/app-templates/dist/destination/batch";
import {
  Errors,
  ErrorWithRecordId,
  ExportRecordsPluginMethod,
} from "@grouparoo/core";
import EloquaClient from "../client/client";
import util from "util";
import { getAllContactFields } from "./destinationMappingOptions";
import { connect } from "../connect";
import { log } from "actionhero";
import { ErrorCheckExport } from "@grouparoo/app-templates/dist/destination/shared/batch";
import { invalidate } from "./cachedMethods";

let client: EloquaClient;
let exportedProfileFields = new Set<String>();

const findAndSetDestinationIds = async ({ exports: _exports }) => {
  const batchEmails = _exports.map((p) => p.foreignKeyValue);
  const allResults = await client.contacts.getContactsByEmail(batchEmails);
  for (const profile of _exports) {
    const filteredContacts = allResults.filter(
      (c) => c.emailAddress === profile.foreignKeyValue
    );
    if (filteredContacts.length > 0) {
      profile.destinationId = filteredContacts[0].id;
    }
  }
  return _exports;
};

const buildImportDefinition = async ({ appId }) => {
  const allFields = await getAllContactFields(client);
  const fields = {};
  for (const field of allFields) {
    if (exportedProfileFields.has(field.key)) {
      fields[field.key] = field.statement;
    }
  }
  const importName = `grouparoo-import-${appId}`;
  return await client.bulk.createImport(importName, "emailAddress", fields);
};

const buildBatches = (addOrUpdateImportDefinitionsData) => {
  const payloads = addOrUpdateImportDefinitionsData.map((p) => {
    const cleanData = Object.assign({}, p);
    delete cleanData.profileId;
    return cleanData;
  });

  const size = new util.TextEncoder().encode(JSON.stringify(payloads)).length;
  const sizeInMegaBytes = size / 1024 / 1024;

  // the limit is 32MB, keeping 20MB to mitigate eventual size divergences.
  if (sizeInMegaBytes < 20) {
    return [payloads];
  }
  const chunkSize = Math.ceil(
    payloads.length / Math.ceil(sizeInMegaBytes / 20)
  );
  return payloads.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
};

const execImportDefinitionRequests = async (
  importDefinitionUri: string,
  batches: BatchExport[][]
) => {
  for (const batch of batches) {
    await client.bulk.importData(importDefinitionUri, batch);
  }
};

const buildImportDefinitionData = ({ recordToExport, syncOperations }) => {
  const {
    destinationId,
    recordId,
    oldRecordProperties,
    newRecordProperties,
    foreignKeyValue,
  } = recordToExport;

  const payload: any = {};

  payload.emailAddress = foreignKeyValue; // email
  if (destinationId) {
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update contacts."
      );
    }
    payload.id = destinationId;
  } else {
    if (!syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create contacts."
      );
    }
  }
  if (recordId) {
    payload.recordId = recordId;
  }
  // set profile properties, including old ones
  const newKeys = Object.keys(newRecordProperties);
  const oldKeys = Object.keys(oldRecordProperties);
  const allKeys = new Set([...oldKeys, ...newKeys]);

  for (const key of allKeys) {
    exportedProfileFields.add(key);
    const value = newRecordProperties[key]; // includes clearing out removed ones (by setting to null)
    payload[key] = formatVar(value);
  }
  return payload;
};

export async function deleteContacts({
  appId,
  syncOperations,
  exports: _exports,
}) {
  for (const profile of _exports) {
    if (profile.processed || profile.error) {
      continue;
    }
    if (!profile.toDelete) {
      continue;
    }
    try {
      if (!syncOperations.delete) {
        throw new Errors.InfoError(
          "Destination sync mode does not delete contacts."
        );
      }
      let contactIdToDelete = profile.destinationId;
      if (profile.oldForeignKeyValue) {
        const user = await client.contacts.getByEmail(
          profile.oldForeignKeyValue
        );
        if (user) {
          contactIdToDelete = user["id"];
        }
      }
      if (!contactIdToDelete) {
        throw new Errors.InfoError(
          `destinationId not found to delete: ${
            profile.oldForeignKeyValue
              ? profile.oldForeignKeyValue
              : profile.foreignKeyValue
          }`
        );
      }
      await client.contacts.delete(contactIdToDelete);
      await invalidate(appId);
      profile.processed = true;
    } catch (error) {
      profile.error = error;
    }
  }
  return _exports;
}

async function assignForeignKeys({ appId, exportedProfile }) {
  const { oldRecordProperties, newRecordProperties } = exportedProfile;

  let newValue = newRecordProperties.emailAddress;
  let oldValue = oldRecordProperties.emailAddress;
  if (!newValue) {
    throw new Error(`newRecordProperties[emailAddress] is a required mapping`);
  }
  newValue = newValue.toString().toLowerCase().trim();
  if (oldValue) {
    oldValue = oldValue.toString().toLowerCase().trim();
  }
  if (!newValue || newValue.toString().length === 0) {
    throw new Error(`emailAddress normalized to no value`);
  }
  newValue = newValue.toString();
  exportedProfile.foreignKeyValue = newValue;

  // record other one if applicable
  if (oldValue) {
    oldValue = oldValue.toString();
    if (newValue !== oldValue && oldValue.length > 0) {
      exportedProfile.oldForeignKeyValue = oldValue;
      await invalidate(appId);
    }
  }
  return exportedProfile;
}

export async function exportBatch({
  client: currentClient,
  appId,
  appOptions,
  syncOperations,
  exports: _exports,
}) {
  if (currentClient) {
    client = currentClient;
  }
  _exports = await buildBatchExports({ appId, exports: _exports });
  _exports = await findAndSetDestinationIds({ exports: _exports });
  _exports = await deleteContacts({ appId, syncOperations, exports: _exports });
  const addOrUpdateImportDefinitionData = processAddAndUpdatedExports({
    syncOperations,
    exports: _exports,
  });

  const errors = checkErrors(_exports);
  if (addOrUpdateImportDefinitionData.length > 0) {
    const importDefinition = await buildImportDefinition({ appId });
    const exportsBatches = buildBatches(addOrUpdateImportDefinitionData);
    await execImportDefinitionRequests(importDefinition.uri, exportsBatches);
    const sync = await client.bulk.createSync(importDefinition.uri);

    return {
      success: true,
      processExports: {
        recordIds: addOrUpdateImportDefinitionData.map((e) => e.recordId),
        remoteKey: sync.uri,
        processDelay: 10000,
      },
      errors,
    };
  }
  return { success: errors.length === 0, errors };
}

async function buildBatchExports({ appId, exports: _exports }) {
  const batchExports: BatchExport[] = [];
  for (const exportedProfile of _exports) {
    let info: BatchExport = Object.assign({}, exportedProfile);
    try {
      info = await assignForeignKeys({ appId, exportedProfile: info });
    } catch (error) {
      info.error = error;
    }
    batchExports.push(info);
  }
  return batchExports;
}

export const exportRecords: ExportRecordsPluginMethod = async ({
  appId,
  appOptions,
  syncOperations,
  exports: recordsToExport,
}) => {
  client = await connect(appOptions);
  return exportBatch({
    client,
    appId,
    appOptions,
    syncOperations,
    exports: recordsToExport,
  });
};

export function checkErrors(
  exportedProfiles: ErrorCheckExport[]
): ErrorWithRecordId[] {
  let errors: ErrorWithRecordId[] = []; // for ones that go wrong
  for (const exportedProfile of exportedProfiles) {
    let { error, skippedMessage } = exportedProfile;
    if (error) {
      if (typeof error === "string") {
        error = new Error(error);
      }
      error.recordId = exportedProfile.recordId;
      errors.push(error);
      log(error?.stack || error, "error");
    } else if (skippedMessage) {
      errors = errors || [];
      const skip = <ErrorWithRecordId>new Error(skippedMessage);
      skip.recordId = exportedProfile.recordId;
      skip.errorLevel = "info";
      errors.push(skip);
    }
  }
  return errors;
}

function formatVar(value) {
  if (value === null || value === undefined) {
    return ""; // empty string clears the value
  }

  if (value instanceof Date) {
    return value.getTime();
  }
  return value;
}

function processAddAndUpdatedExports({ syncOperations, exports: _exports }) {
  const addOrUpdateImportDefinitionData = [];
  for (const record of _exports) {
    if (record.processed || record.error) {
      continue;
    }
    try {
      addOrUpdateImportDefinitionData.push(
        buildImportDefinitionData({ recordToExport: record, syncOperations })
      );
    } catch (error) {
      record.error = error;
    }
  }
  return addOrUpdateImportDefinitionData;
}
