import { BatchExport } from "@grouparoo/app-templates/dist/destination/batch";
import {
  Errors,
  ErrorWithProfileId,
  ExportProfilesPluginMethod,
} from "@grouparoo/core";
import EloquaClient from "../client/client";
import { getAllContactFields } from "./destinationMappingOptions";
import { connect } from "../connect";
import { getContact } from "./cachedMethods";
import { log } from "actionhero";
import { ErrorCheckExport } from "@grouparoo/app-templates/dist/destination/shared/batch";
import { GrouparooCLI } from "@grouparoo/core/dist/modules/cli";
import error = GrouparooCLI.logger.error;

let client: EloquaClient;
let exportedProfileFields = new Set<String>();

const findAndSetDestinationIds = async ({ appId, appOptions, exports }) => {
  for (const profile of exports) {
    try {
      const contact = await getContact(
        client,
        profile.foreignKeyValue,
        appId,
        appOptions
      );
      if (contact) {
        profile.destinationId = contact.id;
      }
    } catch (error) {
      profile.destinationId = null;
    }
  }
  return exports;
};

const buildImportDefinition = async ({ exports }) => {
  const allFields = await getAllContactFields(client);
  const fields = {};
  for (const field of allFields) {
    if (exportedProfileFields.has(field.key)) {
      fields[field.key] = field.statement;
    }
  }
  const importName = `grouparoo-import-${new Date().getTime()}`;
  return await client.bulk.createImport(importName, "emailAddress", fields);
};

const buildBatches = (addOrUpdateImportDefinitionsData) => {
  const size = new TextEncoder().encode(
    JSON.stringify(addOrUpdateImportDefinitionsData)
  ).length;
  const sizeInMegaBytes = size / 1024 / 1024;
  // the limit is 32MB, keeping 20MB to mitigate eventual size divergences.
  if (sizeInMegaBytes < 20) {
    return addOrUpdateImportDefinitionsData;
  }
  const chunkSize = Math.ceil(
    addOrUpdateImportDefinitionsData.length / Math.ceil(sizeInMegaBytes / 20)
  );
  return addOrUpdateImportDefinitionsData.reduce((resultArray, item, index) => {
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

const buildImportDefinitionData = ({ profileToExport, syncOperations }) => {
  const {
    destinationId,
    profileId,
    oldProfileProperties,
    newProfileProperties,
    foreignKeyValue,
  } = profileToExport;

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
  if (profileId) {
    payload.profileId = profileId;
  }
  // set profile properties, including old ones
  const newKeys = Object.keys(newProfileProperties);
  const oldKeys = Object.keys(oldProfileProperties);
  const allKeys = new Set([...oldKeys, ...newKeys]);

  for (const key of allKeys) {
    exportedProfileFields.add(key);
    const value = newProfileProperties[key]; // includes clearing out removed ones (by setting to null)
    payload[key] = formatVar(value);
  }
  return payload;
};

export async function deleteContacts({ syncOperations, exports }) {
  for (const profile of exports) {
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
      if (!profile.destinationId) {
        throw new Errors.InfoError(
          `destinationId not found to delete: ${profile.foreignKeyValue}`
        );
      }
      await client.contacts.delete(profile.destinationId);
      profile.processed = true;
    } catch (error) {
      profile.error = error;
    }
  }
  return exports;
}

function assignForeignKeys(exportedProfile: BatchExport) {
  const { oldProfileProperties, newProfileProperties } = exportedProfile;

  let newValue = newProfileProperties.emailAddress;
  let oldValue = oldProfileProperties.emailAddress;
  if (!newValue) {
    throw new Error(`newProfileProperties[emailAddress] is a required mapping`);
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
    }
  }
  return exportedProfile;
}

export async function exportBatch({
  client: currentClient,
  appId,
  appOptions,
  syncOperations,
  exports,
}) {
  if (currentClient) {
    client = currentClient;
  }
  exports = buildBatchExports({ exports });
  exports = await findAndSetDestinationIds({ appId, appOptions, exports });
  exports = await deleteContacts({ syncOperations, exports });
  const addOrUpdateImportDefinitionData = processAddAndUpdatedExports({
    syncOperations,
    exports,
  });

  const errors = checkErrors(exports);
  if (addOrUpdateImportDefinitionData.length > 0) {
    const importDefinition = await buildImportDefinition({ exports });
    const exportsBatches = buildBatches(addOrUpdateImportDefinitionData);
    await execImportDefinitionRequests(importDefinition.uri, exportsBatches);
    const sync = await client.bulk.createSync(importDefinition.uri);

    return {
      success: true,
      processExports: {
        profileIds: addOrUpdateImportDefinitionData.map((e) => e.profileId),
        remoteKey: sync.uri,
        processDelay: 10000,
      },
      errors,
    };
  }
  return { success: errors.length === 0, errors };
}

function buildBatchExports({ exports }) {
  const batchExports: BatchExport[] = [];
  for (const exportedProfile of exports) {
    let info: BatchExport = Object.assign({}, exportedProfile);
    try {
      info = assignForeignKeys(info);
    } catch (error) {
      info.error = error;
    }
    batchExports.push(info);
  }
  return batchExports;
}

export const exportProfiles: ExportProfilesPluginMethod = async ({
  appId,
  appOptions,
  syncOperations,
  exports: profilesToExport,
}) => {
  client = await connect(appOptions);
  return exportBatch({
    client,
    appId,
    appOptions,
    syncOperations,
    exports: profilesToExport,
  });
};

export function checkErrors(
  exportedProfiles: ErrorCheckExport[]
): ErrorWithProfileId[] {
  let errors: ErrorWithProfileId[] = []; // for ones that go wrong
  for (const exportedProfile of exportedProfiles) {
    let { error, skippedMessage } = exportedProfile;
    if (error) {
      if (typeof error === "string") {
        error = new Error(error);
      }
      error.profileId = exportedProfile.profileId;
      errors.push(error);
      log(error?.stack || error, "error");
    } else if (skippedMessage) {
      errors = errors || [];
      const skip = <ErrorWithProfileId>new Error(skippedMessage);
      skip.profileId = exportedProfile.profileId;
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

function processAddAndUpdatedExports({ syncOperations, exports }) {
  const addOrUpdateImportDefinitionData = [];
  for (const profile of exports) {
    if (profile.processed || profile.error) {
      continue;
    }
    try {
      addOrUpdateImportDefinitionData.push(
        buildImportDefinitionData({ profileToExport: profile, syncOperations })
      );
    } catch (error) {
      profile.error = error;
    }
  }
  return addOrUpdateImportDefinitionData;
}
