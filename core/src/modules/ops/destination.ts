import Moment from "moment";
import { config, cache, log } from "actionhero";
import { CreationAttributes } from "sequelize";
import { deepStrictEqual } from "assert";
import {
  Destination,
  DestinationSyncModeData,
  DestinationSyncOperations,
  SimpleDestinationOptions,
} from "../../models/Destination";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { Export, ExportRecordPropertiesWithType } from "../../models/Export";
import { Group } from "../../models/Group";
import { Property } from "../../models/Property";
import {
  ExportedRecord,
  ExportRecordsPluginMethod,
  ErrorWithRecordId,
  DestinationMappingOptionsResponseType,
  DestinationMappingOptionsMethodResponse,
  ProcessExportsForRecordIds,
  ExportRecordsPluginMethodResponse,
} from "../../classes/plugin";
import { destinationTypeConversions } from "../destinationTypeConversions";
import { GroupMember } from "../../models/GroupMember";
import { ExportProcessor } from "../../models/ExportProcessor";
import { Run } from "../../models/Run";
import { MappingHelper } from "../mappingHelper";
import { RecordPropertyOps } from "./recordProperty";
import { Option } from "../../models/Option";
import { getLock } from "../locks";
import { ExportOps } from "./export";
import { PropertiesCache } from "../caches/propertiesCache";
import { DestinationsCache } from "../caches/destinationsCache";
import { AppsCache } from "../../modules/caches/appsCache";

function deepStrictEqualBoolean(a: any, b: any): boolean {
  try {
    deepStrictEqual(a, b);
    return true;
  } catch (error) {
    return false;
  }
}

export namespace DestinationOps {
  /**
   * Export all the Group Members of the Groups that this Destination is Tracking
   */
  export async function exportMembers(destination: Destination) {
    if (destination.collection === "none") {
      // nothing to do
    } else if (destination.collection === "group") {
      const group = await destination.$get("group");
      if (group) return group.run(destination.id);
    } else if (destination.collection === "model") {
      const model = await destination.$get("model");
      if (model) return model.run(destination.id);
    } else {
      throw new Error(`cannot export members for a ${destination.collection}`);
    }
  }

  export async function updateTracking(
    destination: Destination,
    collection: Destination["collection"],
    collectionId?: string
  ) {
    let oldRun: Run;
    let newRun: Run;

    if (
      destination.collection === collection &&
      destination.groupId === collectionId
    ) {
      return { oldRun, newRun }; // no changes
    }

    // validations
    if (collectionId && collection !== "group") {
      throw new Error(
        `cannot track ${collectionId} without destination collection being "group"`
      );
    }

    if (collection === "none") {
      // nothing to check
    } else if (collection === "group") {
      if (!collectionId) {
        throw new Error(`${collectionId} is required to track a group`);
      }
      const group = await Group.findById(collectionId);
      if (group.state === "deleted") {
        throw new Error(`cannot track deleted Group "${group.name}"`);
      }
      if (destination.modelId !== group.modelId) {
        throw new Error(
          `destination ${destination.id} and group ${group.id} do not share the same modelId`
        );
      }
    } else if (collection === "model") {
      if (collectionId && collectionId !== destination.modelId) {
        throw new Error(
          `a destination for model ${destination.modelId} cannot track another model`
        );
      }
    }

    oldRun = await exportMembers(destination); // old collection
    await destination.update({
      collection,
      groupId: collection !== "group" ? null : collectionId,
    });
    newRun = await exportMembers(destination); // new collection

    return { oldRun, newRun };
  }

  /**
   * Get a preview of a GrouparooRecord for this Destination
   * It is assumed that the record provided is already in a Group tracked by this Destination
   */
  export async function recordPreview(
    destination: Destination,
    record: GrouparooRecord,
    mapping: MappingHelper.Mappings,
    destinationGroupMemberships: {
      [groupId: string]: string;
    }
  ) {
    const recordProperties = await record.getProperties();
    const mappingKeys = Object.keys(mapping);
    const mappedRecordProperties: Record<string, any> = {};
    const destinationMappingOptions =
      await destination.destinationMappingOptions();
    for (const k of mappingKeys) {
      const collection = recordProperties[mapping[k]];
      if (!collection) continue; // we may have an optional property that hasn't yet been set

      mappedRecordProperties[k] = collection;

      let destinationType: DestinationMappingOptionsResponseType = "any";
      for (const j in destinationMappingOptions.properties.required) {
        const destinationProperty =
          destinationMappingOptions.properties.required[j];
        if (destinationProperty.key === k) {
          destinationType = destinationProperty.type;
        }
      }
      for (const j in destinationMappingOptions.properties.known) {
        const destinationProperty =
          destinationMappingOptions.properties.known[j];
        if (destinationProperty.key === k) {
          destinationType = destinationProperty.type;
        }
      }

      mappedRecordProperties[k].values = collection.values.map((value) =>
        formatOutgoingRecordProperties(value, collection.type, destinationType)
      );
      mappedRecordProperties[k].type = destinationType;
    }

    const groups = await record.$get("groups");
    const mappedGroupNames = groups
      .filter((group) =>
        Object.keys(destinationGroupMemberships).includes(group.id)
      )
      .map((group) => destinationGroupMemberships[group.id])
      .sort();

    const apiData = await record.apiData();

    return Object.assign(apiData, {
      properties: mappedRecordProperties,
      groupNames: mappedGroupNames,
    });
  }

  /**
   * Get the Destination Connection's supported Sync Modes
   */
  export async function getSupportedSyncModes(destination: Destination) {
    const { pluginConnection } = await destination.getPlugin();
    return {
      supportedModes: pluginConnection.syncModes || [],
      defaultMode: pluginConnection.defaultSyncMode,
    };
  }

  /**
   * Get the Destination Connection Options from the plugin
   */
  export async function destinationConnectionOptions(
    destination: Destination,
    destinationOptions: SimpleDestinationOptions = {}
  ) {
    const { pluginConnection } = await destination.getPlugin();
    const app = await destination.$get("app", {
      scope: null,
      include: [Option],
    });
    const connection = await app.getConnection();
    const appOptions = await app.getOptions(true);

    if (!pluginConnection.methods.destinationOptions) {
      throw new Error(
        `cannot return destination options for ${destination.type}`
      );
    }

    return pluginConnection.methods.destinationOptions({
      connection,
      app,
      appId: app.id,
      appOptions,
      destinationOptions,
    });
  }

  /**
   * Get the Destination Mapping Options from the Plugin
   */
  export async function destinationMappingOptions(
    destination: Destination,
    cached = true,
    saveCache = true
  ) {
    const cacheKey = `destination:${destination.id}:mappingOptions`;
    const cacheDuration = 1000 * 60 * 10; // 10 minutes

    if (cached) {
      try {
        const {
          value,
        }: {
          value: DestinationMappingOptionsMethodResponse;
        } = await cache.load(cacheKey);
        return value;
      } catch (error) {
        if (
          error.message.toString() !== "Object not found" &&
          error.message.toString() !== "Object expired"
        ) {
          throw error;
        }
      }
    }

    const { pluginConnection } = await destination.getPlugin();
    const app = await destination.$get("app", {
      scope: null,
      include: [Option],
    });
    const connection = await app.getConnection();
    const appOptions = await app.getOptions(true);
    const destinationOptions = await destination.getOptions(true);

    if (!pluginConnection.methods.destinationMappingOptions) {
      throw new Error(
        `cannot return destination mapping options for ${destination.type}`
      );
    }

    const mappingOptions =
      await pluginConnection.methods.destinationMappingOptions({
        connection,
        app,
        appId: app.id,
        appOptions,
        destination,
        destinationId: destination.id,
        destinationOptions,
      });

    if (saveCache) await cache.save(cacheKey, mappingOptions, cacheDuration);

    return mappingOptions;
  }

  export async function getExportArrayProperties(destination: Destination) {
    const { pluginConnection } = await destination.getPlugin();
    const app = await AppsCache.findOneWithCache(destination.appId);
    const connection = await app.getConnection();
    const appOptions = await app.getOptions(true);
    const destinationOptions = await destination.getOptions(true);

    if (!pluginConnection.methods.exportArrayProperties) {
      throw new Error(
        `cannot determine export array properties for ${destination.type}`
      );
    }

    return pluginConnection.methods.exportArrayProperties({
      connection,
      app,
      appId: app.id,
      appOptions,
      destination,
      destinationId: destination.id,
      destinationOptions,
    });
  }

  /**
   * Given a Destination and GrouparooRecords (and lots of related data), create all the exports that should be sent
   */
  export async function exportRecords(
    destination: Destination,
    records: GrouparooRecord[],
    synchronous = false,
    force = false,
    saveExports = true,
    toDelete?: boolean
  ) {
    const bulkCreates: CreationAttributes<Export>[] = [];

    if (records.length === 0) return [];
    if (destination.modelId !== records[0].modelId) {
      throw new Error(
        `destination ${destination.id} and record ${records[0].id} do not share the same modelId`
      );
    }

    const app = await AppsCache.findOneWithCache(destination.appId);
    const appOptions = await app.getOptions();
    await app.validateOptions(appOptions);
    const properties = await PropertiesCache.findAllWithCache(
      destination.modelId
    );
    const destinationGroupMemberships =
      await destination.getDestinationGroupMemberships();
    const mapping = await destination.getMapping();
    const syncMode = await destination.getSyncMode();

    const newGroupMembers = await GroupMember.findAll({
      where: { recordId: records.map((r) => r.id) },
      include: [Group],
    });

    // New and old properties and groups are in the context of this destination and what it has currently been sent
    // If there is not a mostRecentExport, both old groups and old record properties are an empty collection
    const mostRecentExportIds = await getMostRecentExportIds(
      destination,
      records.map((r) => r.id),
      "complete",
      "completedAt"
    );
    const mostRecentExports = await Export.findAll({
      where: { id: mostRecentExportIds },
    });

    // Send only the properties from the array that should be sent to the Destination, otherwise send the first entry in the array of record properties
    const exportArrayProperties = await getExportArrayProperties(destination);

    for (const record of records) {
      let mappedOldRecordProperties: ExportRecordPropertiesWithType = {};
      let mappedNewRecordProperties: ExportRecordPropertiesWithType = {};
      let oldGroupNames: string[] = [];
      let newGroupNames: string[] = [];

      const newRecordProperties = await record.getProperties();
      const newGroups = newGroupMembers
        .filter((gm) => gm.recordId === record.id)
        .map((gm) => gm.group);
      const mostRecentExport = mostRecentExports.find(
        (e) => e.recordId === record.id
      );

      // Do we need to delete this record from the destination?
      // If toDelete was not provided explicitly, determine what to do
      if (typeof toDelete !== "boolean") {
        toDelete = false;
        if (destination.collection === "none") {
          toDelete = true;
        } else if (destination.collection === "group") {
          if (!destination.groupId) {
            toDelete = true;
          } else if (
            !newGroups.map((g) => g.id).includes(destination.groupId)
          ) {
            toDelete = true;
          }
        }
      }

      if (mostRecentExport && mostRecentExport.toDelete !== true) {
        mappedOldRecordProperties = JSON.parse(
          mostRecentExport.getDataValue("newRecordProperties")
        );
        oldGroupNames = mostRecentExport.newGroups;
      }

      // We want to be able to delete records that have been removed from their source
      // (new properties would be set to null, so we need the old values to reference them)
      const primaryKeyRecordProperties = Object.values(
        newRecordProperties
      ).find((p) => p.isPrimaryKey);
      const forceOldPropertyValues =
        toDelete &&
        primaryKeyRecordProperties &&
        primaryKeyRecordProperties.values[0] === null;

      for (const k in mapping) {
        const property = properties.find((r) => r.key === mapping[k]);
        if (!property) throw new Error(`cannot find rule for ${mapping[k]}`);
        const { type } = property;

        if (forceOldPropertyValues) {
          mappedNewRecordProperties[k] =
            mappedOldRecordProperties[k] !== undefined
              ? mappedOldRecordProperties[k]
              : { type, rawValue: null };
        } else {
          mappedNewRecordProperties[k] = {
            type,
            rawValue: newRecordProperties[mapping[k]]
              ? await Promise.all(
                  newRecordProperties[mapping[k]].values.map(async (v) => {
                    const response = await RecordPropertyOps.buildRawValue(
                      v,
                      type
                    );
                    return response.rawValue;
                  })
                )
              : null,
          };
        }
      }

      for (const k in mappedNewRecordProperties) {
        if (
          mappedNewRecordProperties[k] &&
          !exportArrayProperties.includes(k) &&
          !exportArrayProperties.includes("*")
        ) {
          mappedNewRecordProperties[k].rawValue
            ? (mappedNewRecordProperties[k].rawValue = Array.isArray(
                mappedNewRecordProperties[k].rawValue
              )
                ? mappedNewRecordProperties[k].rawValue[0]
                : mappedNewRecordProperties[k].rawValue)
            : delete mappedNewRecordProperties[k];
        }
      }

      newGroupNames = newGroups
        .filter((group) =>
          destinationGroupMemberships
            .map((dgm) => dgm.groupId)
            .includes(group.id)
        )
        .map(
          (group) =>
            destinationGroupMemberships.filter(
              (dgm) => dgm.groupId === group.id
            )[0].remoteKey
        );

      const canDelete = syncMode
        ? DestinationSyncModeData[syncMode].operations.delete
        : true;
      if (toDelete && !canDelete) {
        // If sync mode does not allow deleting, don't delete and just clear groups
        newGroupNames = [];
        toDelete = false;
      }

      // determine if there are changes between this export and the previous one
      let hasChanges = true;
      if (
        !force &&
        mostRecentExport &&
        deepStrictEqualBoolean(
          mappedOldRecordProperties,
          mappedNewRecordProperties
        ) &&
        deepStrictEqualBoolean(oldGroupNames.sort(), newGroupNames.sort()) &&
        !toDelete &&
        (!mostRecentExport || !mostRecentExport.toDelete)
      ) {
        hasChanges = false;
      }

      bulkCreates.push({
        destinationId: destination.id,
        recordId: record.id,
        startedAt: synchronous ? new Date() : undefined,
        oldRecordProperties: mappedOldRecordProperties,
        newRecordProperties: mappedNewRecordProperties,
        oldGroups: oldGroupNames.sort(),
        newGroups: newGroupNames.sort(),
        state: "pending",
        sendAt: new Date(),
        hasChanges,
        toDelete,
        force,
      });
    }

    const exports = saveExports
      ? await Export.bulkCreate(bulkCreates)
      : Export.bulkBuild(bulkCreates);

    if (synchronous && saveExports) {
      await destination.sendExports(exports, synchronous);
    }

    return exports;
  }

  function transformError(error: Error, recordId: string): ErrorWithRecordId {
    if (typeof error === "string") {
      error = new Error(error);
    }
    if (!error) {
      error = new Error(`unknown export error with record ${recordId}`);
    }
    const myError: ErrorWithRecordId = <ErrorWithRecordId>error;
    myError.recordId = recordId;
    // also can have error.errorLevel on it already
    return myError;
  }

  async function getBatchFunction(
    destination: Destination
  ): Promise<ExportRecordsPluginMethod> {
    const { pluginConnection } = await destination.getPlugin();
    if (pluginConnection.methods.exportRecords) {
      return pluginConnection.methods.exportRecords;
    }

    const method = pluginConnection.methods.exportRecord;
    if (!method) {
      throw new Error(
        `destination ${destination.name} (${destination.id}) has no exportRecord or exportRecords method`
      );
    }

    // loop through each one
    const singleAsBatch: ExportRecordsPluginMethod = async function ({
      connection,
      app,
      appId,
      appOptions,
      destination,
      destinationId,
      destinationOptions,
      syncOperations,
      exports: _exports,
    }) {
      const outErrors: ErrorWithRecordId[] = [];
      let outRetryDelay: number = undefined;
      let outSuccess = true;

      for (const _export of _exports) {
        const { recordId } = _export;
        try {
          let { success, retryDelay, error } = await method({
            connection,
            app,
            appId,
            appOptions,
            destination,
            destinationId,
            destinationOptions,
            syncOperations,
            export: _export,
          });

          if (!success || error) {
            outSuccess = false;
            outErrors.push(transformError(error, recordId));
          }
          if (retryDelay) {
            if (!outRetryDelay || outRetryDelay < retryDelay) {
              outRetryDelay = retryDelay;
            }
          }
        } catch (err) {
          outSuccess = false;
          outErrors.push(transformError(err, recordId));
        }
      }

      return {
        errors: outErrors.length === 0 ? undefined : outErrors,
        retryDelay: outRetryDelay,
        success: outSuccess,
      };
    };
    return singleAsBatch;
  }

  async function buildExportedRecords(
    destination: Destination,
    _exports: Export[]
  ): Promise<ExportedRecord[]> {
    const exportedRecords: ExportedRecord[] = [];
    const destinationMappingOptions =
      await destination.destinationMappingOptions();
    const records = await GrouparooRecord.findAll({
      where: { id: _exports.map((e) => e.recordId) },
    });

    for (const _export of _exports) {
      const record = records.find((r) => (r.id = _export.recordId));
      exportedRecords.push({
        record,
        recordId: record?.id,
        oldRecordProperties: formatRecordPropertiesForDestination(
          _export,
          destination,
          destinationMappingOptions,
          "oldRecordProperties"
        ),
        newRecordProperties: formatRecordPropertiesForDestination(
          _export,
          destination,
          destinationMappingOptions,
          "newRecordProperties"
        ),
        oldGroups: _export.oldGroups,
        newGroups: _export.newGroups,
        toDelete: _export.toDelete,
      });
    }

    return exportedRecords;
  }

  export interface CombinedError extends Error {
    errors?: ErrorWithRecordId[];
  }

  async function handleProcessExports(
    destination: Destination,
    givenExports: Export[],
    { processDelay, recordIds, remoteKey }: ProcessExportsForRecordIds,
    exportProcessor?: ExportProcessor
  ) {
    const _exports = givenExports.filter((e) => recordIds.includes(e.recordId));

    if (_exports.length === 0) {
      if (exportProcessor) await exportProcessor.complete();
      return;
    }

    if (!exportProcessor) {
      exportProcessor = await ExportProcessor.create({
        destinationId: destination.id,
        remoteKey,
        state: "pending",
        processAt: Moment().add(processDelay, "ms").toDate(),
      });

      await Export.update(
        { exportProcessorId: exportProcessor.id, state: "processing" },
        { where: { id: _exports.map((e) => e.id) } }
      );
    } else {
      await exportProcessor.retry(processDelay);
    }
  }

  function logExportError(
    destination: Destination,
    error: Error & { recordId?: string }
  ) {
    const recordId = error["recordId"]; // it might have one of these
    log(
      `ExportError  Destination: ${destination.id} - ${
        destination.name
      } - Record: ${recordId ?? "Unknown"}`,
      "warning",
      { error }
    );
  }

  async function updateExports(
    destination: Destination,
    _exports: Export[],
    exportResult?: ExportRecordsPluginMethodResponse,
    combinedError?: CombinedError,
    synchronous = false,
    exportProcessor?: ExportProcessor
  ) {
    if (combinedError) {
      logExportError(destination, combinedError);
      if (combinedError.errors) {
        for (const error of combinedError.errors) {
          logExportError(destination, error);
        }
      }
    }
    if (exportResult?.errors) {
      for (const error of exportResult?.errors) {
        logExportError(destination, error);
      }
    }

    if (!combinedError) {
      const errors = exportResult?.errors;
      combinedError = new Error(
        `error exporting ${
          errors ? errors.length : "?"
        } records to destination ${destination.name} (${destination.id}): ${
          errors ? errors.map((e) => e.message).join(", ") : ""
        }`
      );
      combinedError.errors = errors || [];
    }

    // problem!
    if (
      !exportResult?.success &&
      (!combinedError.errors || combinedError.errors.length === 0)
    ) {
      // unspecified error, so don't know specific record with issue.
      const retryexportIds: string[] = [];
      for (const _export of _exports) {
        await _export.setError(combinedError, exportResult?.retryDelay);
        retryexportIds.push(_export.id);
      }
      if (synchronous) {
        // caller wants to raise
        throw combinedError;
      }
      return {
        success: false,
        error: combinedError,
        retryexportIds,
        retryDelay: exportResult?.retryDelay,
      };
    }

    // they were all correct!
    if (exportResult?.success) {
      const processExports = exportResult?.processExports;
      await ExportOps.completeBatch(
        _exports.filter(
          (e) =>
            !processExports || !processExports.recordIds.includes(e.recordId)
        )
      );

      if (processExports) {
        await handleProcessExports(
          destination,
          _exports,
          processExports,
          exportProcessor
        );
      }

      return {
        success: true,
        error: undefined,
        retryexportIds: undefined,
        retryDelay: undefined,
      };
    }

    // known specific records where there were errors
    const recordsWithErrors: { [id: string]: ErrorWithRecordId } = {};
    for (const errorWithId of combinedError.errors) {
      const recordId = errorWithId.recordId;
      if (!recordId) {
        throw new Error(
          `Errors returned without recordId - throw if unknown (${destination.id})`
        );
      }
      recordsWithErrors[recordId] = errorWithId;
    }

    const remainingRecordsWithErrors = Object.assign({}, recordsWithErrors);

    const retryexportIds: string[] = [];
    for (const _export of _exports.filter(
      (e) => recordsWithErrors[e.recordId]
    )) {
      const { recordId } = _export;
      const errorWithId = recordsWithErrors[recordId];
      await _export.setError(errorWithId, exportResult?.retryDelay);
      delete remainingRecordsWithErrors[recordId]; // used

      // "info" means that it's actually ok. for example, skipped.
      // we don't need to retry it.
      if (_export.errorLevel != "info") {
        retryexportIds.push(_export.id);
      }
    }

    await ExportOps.completeBatch(
      _exports.filter((e) => !recordsWithErrors[e.recordId])
    );

    const recordsNotUsed = Object.keys(remainingRecordsWithErrors);
    if (recordsNotUsed.length > 0) {
      throw new Error(
        `Invalid ErrorWithRecordId given but not used (${
          destination.id
        }): ${recordsNotUsed.join(",")}`
      );
    }

    // because of the "info" errorLevel, it's actually possible that everything is ok again
    if (retryexportIds.length === 0) {
      return {
        success: true,
        error: undefined,
        retryexportIds: undefined,
        retryDelay: undefined,
      };
    }

    if (synchronous) {
      // caller wants to raise
      throw combinedError;
    }
    return {
      success: false,
      error: combinedError,
      retryexportIds,
      retryDelay: exportResult?.retryDelay,
    };
  }

  export async function runExportProcessor(
    destination: Destination,
    exportProcessor: ExportProcessor
  ) {
    const _exports = await exportProcessor.getExportsToProcess();

    const { pluginConnection } = await destination.getPlugin();
    const processExportedRecords =
      pluginConnection.methods.processExportedRecords;
    if (!processExportedRecords) {
      throw new Error(
        `destination ${destination.name} (${destination.id}) has no \`processExportedRecords\` method`
      );
    }

    const syncMode = await destination.getSyncMode();
    const syncOperations: DestinationSyncOperations = syncMode
      ? DestinationSyncModeData[syncMode].operations
      : DestinationSyncModeData.sync.operations; // if destination does not support sync modes, allow all

    const options = await destination.getOptions();
    const app = await destination.$get("app", {
      scope: null,
      include: [Option],
    });
    const appOptions = await app.getOptions();
    const connection = await app.getConnection();

    // check if parallelism ok
    const parallelismOk = await app.checkAndUpdateParallelism("incr");
    if (!parallelismOk) {
      const error = new Error(`parallelism limit reached for ${app.type}`);

      const outRetryDelay = config.tasks.timeout + 1;
      await exportProcessor.retry(outRetryDelay, true);

      return {
        success: false,
        error,
        retryDelay: outRetryDelay,
        retryexportIds: _exports.map((e) => e.id),
      };
    }

    let combinedError: CombinedError = null;
    let exportResult: ExportRecordsPluginMethodResponse;

    try {
      const exportedRecords = await buildExportedRecords(destination, _exports);

      exportResult = await processExportedRecords({
        connection,
        app,
        appId: app.id,
        appOptions,
        destination,
        destinationId: destination.id,
        destinationOptions: options,
        exports: exportedRecords,
        remoteKey: exportProcessor.remoteKey,
        syncOperations,
      });
    } catch (error) {
      combinedError = error;
    } finally {
      await app.checkAndUpdateParallelism("decr");
    }

    if (combinedError) {
      // error wasn't with a specific record, set it on the ExportProcessor
      await exportProcessor.setError(combinedError);

      return {
        success: false,
        error: combinedError,
      };
    }

    const { success, error, retryexportIds, retryDelay } = await updateExports(
      destination,
      _exports,
      exportResult,
      null,
      false,
      exportProcessor
    );

    if (!combinedError && !exportResult.processExports) {
      await exportProcessor.complete();
    }

    return { success, error, retryexportIds, retryDelay };
  }

  async function cancelOldExport(oldExport: Export) {
    await oldExport.update({
      state: "canceled",
      sendAt: null,
      errorMessage: `Replaced by more recent export`,
      errorLevel: null,
      completedAt: new Date(),
    });
  }

  async function getMostRecentExportIds(
    destination: Destination,
    recordIds: string[],
    state?: Export["state"],
    sortColumn: "createdAt" | "completedAt" = "createdAt"
  ) {
    const values: (string | string[])[] = [destination.id];
    if (state) values.push(state);
    values.push(recordIds);

    const mostRecentExportIds = await Export.sequelize
      .query(
        {
          query: `
SELECT
  "id"
FROM (
  SELECT
    "id",
    ROW_NUMBER() OVER (PARTITION BY "exports"."recordId" ORDER BY "exports"."${sortColumn}" DESC) AS __rownum
  FROM
    "exports"
  WHERE
    "exports"."destinationId" = ?
    ${state ? `AND state = ?` : ""}
    AND "exports"."recordId" IN (?)) AS __ranked
WHERE
  "__ranked"."__rownum" = 1;`,
          values,
        },
        {
          type: "SELECT",
          model: Export,
        }
      )
      .then((exports) => exports.map((e) => e.id));

    return mostRecentExportIds;
  }

  export async function sendExports(
    destination: Destination,
    givenExports: Export[],
    synchronous = false
  ): Promise<{
    retryDelay: number;
    retryexportIds: string[];
    success: boolean;
    error: Error;
  }> {
    const _exports: Export[] = []; // those exports with changes + locks acquired
    const exportsWithChanges: Export[] = [];
    const exportsWithoutChanges: Export[] = [];
    const locks: Awaited<ReturnType<typeof getLock>>[] = [];

    for (const givenExport of givenExports) {
      if (givenExport.hasChanges) {
        exportsWithChanges.push(givenExport);
      } else {
        exportsWithoutChanges.push(givenExport);
      }
    }

    await ExportOps.completeBatch(exportsWithoutChanges);
    if (exportsWithChanges.length === 0) return;

    const mostRecentExportIds = await getMostRecentExportIds(
      destination,
      exportsWithChanges.map(({ recordId }) => recordId)
    );

    try {
      for (const consideredExport of exportsWithChanges) {
        if (!mostRecentExportIds.includes(consideredExport.id)) {
          await cancelOldExport(consideredExport);
          continue;
        }

        const lock = await getLock(
          `export:${consideredExport.recordId}:${consideredExport.destinationId}`
        );

        const gotLock = typeof lock === "function";

        if (gotLock) {
          locks.push(lock);
          _exports.push(consideredExport);
        }
      }

      if (_exports.length === 0) return;

      const exportRecords: ExportRecordsPluginMethod = await getBatchFunction(
        destination
      );

      const syncMode = await destination.getSyncMode();
      const syncOperations: DestinationSyncOperations = syncMode
        ? DestinationSyncModeData[syncMode].operations
        : DestinationSyncModeData.sync.operations; // if destination does not support sync modes, allow all

      const options = await destination.getOptions();
      const app = await destination.$get("app", {
        scope: null,
        include: [Option],
      });
      const appOptions = await app.getOptions();
      const connection = await app.getConnection();

      // check if parallelism ok
      const parallelismOk = await app.checkAndUpdateParallelism("incr");
      if (!parallelismOk) {
        const error = new Error(`parallelism limit reached for ${app.type}`);
        if (synchronous) throw error;

        const outRetryDelay = config.tasks.timeout + 1;
        for (const _export of _exports) {
          await _export.retry(outRetryDelay, true);
        }

        return {
          success: false,
          error,
          retryDelay: outRetryDelay,
          retryexportIds: _exports.map((e) => e.id),
        };
      }

      let combinedError: CombinedError = null;
      let exportResult: ExportRecordsPluginMethodResponse;

      try {
        const exportedRecords = await buildExportedRecords(
          destination,
          _exports
        );

        exportResult = await exportRecords({
          connection,
          app,
          appId: app.id,
          appOptions,
          destination,
          destinationId: destination.id,
          destinationOptions: options,
          syncOperations,
          exports: exportedRecords,
        });
      } catch (error) {
        combinedError = error;
      } finally {
        await app.checkAndUpdateParallelism("decr");
      }
      return updateExports(
        destination,
        _exports,
        exportResult,
        combinedError,
        synchronous
      );
    } finally {
      Promise.all(locks.map((releaseLock) => releaseLock()));
    }
  }

  export async function sendExport(
    destination: Destination,
    _export: Export,
    synchronous = false
  ) {
    return sendExports(destination, [_export], synchronous);
  }

  function formatRecordPropertiesForDestination(
    _export: Export,
    destination: Destination,
    destinationMappingOptions: DestinationMappingOptionsMethodResponse,
    key: "oldRecordProperties" | "newRecordProperties"
  ) {
    const response: { [key: string]: any } = {};
    const rawProperties: Record<string, any> = JSON.parse(
      //@ts-ignore
      _export["dataValues"][key]
    );
    for (const k in rawProperties) {
      const type: Property["type"] = rawProperties[k].type;
      const value = _export[key][k];
      let destinationType: DestinationMappingOptionsResponseType = "any";

      for (const j in destinationMappingOptions.properties.required) {
        const destinationProperty =
          destinationMappingOptions.properties.required[j];
        if (destinationProperty.key === k) {
          destinationType = destinationProperty.type;
        }
      }
      for (const j in destinationMappingOptions.properties.known) {
        const destinationProperty =
          destinationMappingOptions.properties.known[j];
        if (destinationProperty.key === k) {
          destinationType = destinationProperty.type;
        }
      }

      if (Array.isArray(value)) {
        response[k] = value.map((v) =>
          formatOutgoingRecordProperties(v, type, destinationType)
        );
      } else {
        response[k] = formatOutgoingRecordProperties(
          value,
          type,
          destinationType
        );
      }
    }

    return response;
  }

  /**
   * Format Grouparoo's record properties to the type the destination wants.
   */
  export function formatOutgoingRecordProperties(
    value: unknown,
    grouparooType: Property["type"],
    destinationType: DestinationMappingOptionsResponseType
  ) {
    if (!grouparooType) return null;
    if (value === null || value === undefined) return value;

    const conversionBatch = destinationTypeConversions[grouparooType];
    const converter: (p: unknown) => DestinationMappingOptionsResponseType =
      //@ts-ignore
      conversionBatch?.[destinationType] ?? null;

    if (converter) {
      return converter(value);
    } else {
      throw new Error(
        `cannot export grouparoo type ${grouparooType} to destination type ${destinationType}`
      );
    }
  }

  /**
   * Determine which destinations are interested in this record due to the groups they are tracking
   */
  export async function relevantFor(
    record: GrouparooRecord,
    groups: Group[] = []
  ) {
    const destinations = await DestinationsCache.findAllWithCache(
      record.modelId,
      "ready"
    );
    const combinedGroupIds = groups.map((g) => g.id);
    const relevantDestinations = destinations.filter(
      (d) =>
        (d.collection === "model" && d.modelId === record.modelId) ||
        (d.collection === "group" && combinedGroupIds.includes(d.groupId))
    );

    return relevantDestinations;
  }
}
