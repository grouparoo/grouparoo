import { RetryableTask } from "../../classes/tasks/retryableTask";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { RecordProperty } from "../../models/RecordProperty";
import { Property } from "../../models/Property";
import { Op } from "sequelize";
import { log, ParamsFrom } from "actionhero";
import { CLS } from "../../modules/cls";
import { PropertyOps } from "../../modules/ops/property";
import { ImportOps } from "../../modules/ops/import";
import { RecordOps } from "../../modules/ops/record";
import { APIData } from "../../modules/apiData";
import { PropertiesCache } from "../../modules/caches/propertiesCache";
import { SourcesCache } from "../../modules/caches/sourcesCache";

export class ImportRecordProperties extends RetryableTask {
  name = "recordProperty:importRecordProperties";
  description = "Import the GrouparooRecord Properties for a Property";
  frequency = 0;
  queue = "recordProperties";
  inputs = {
    recordIds: { required: true, formatter: APIData.ensureArray },
    propertyIds: { required: true, formatter: APIData.ensureArray },
  } as const;

  async runWithinTransaction({
    recordIds,
    propertyIds,
  }: ParamsFrom<ImportRecordProperties>) {
    const records = await GrouparooRecord.findAll({
      where: { id: { [Op.in]: recordIds } },
      include: RecordProperty,
    });
    if (records.length === 0) return;

    const allProperties = await PropertiesCache.findAllWithCache(
      undefined,
      "ready"
    );
    const properties = allProperties.filter((p) => propertyIds.includes(p.id));
    if (properties.length === 0) return;
    const sourceIds = properties
      .map((p) => p.sourceId)
      .filter((v, i, a) => a.indexOf(v) === i);
    if (sourceIds.length > 1) {
      throw new Error(
        `More than one source for properties ${propertyIds.join(", ")}`
      );
    }

    const source = await SourcesCache.findOneWithCache(properties[0].sourceId);
    const recordsToImport: GrouparooRecord[] = [];
    const recordsNotReady: GrouparooRecord[] = [];
    const dependencies: { [key: string]: Property[] } = {};
    for (const property of properties) {
      dependencies[property.id] = await PropertyOps.dependencies(property);
    }

    for (const record of records) {
      let mode: "ready" | "notReady" = "ready";

      // all already (wrongly) ready?
      if (
        record.recordProperties.filter((p) => p.state === "ready").length ===
        record.recordProperties.length
      ) {
        mode = "notReady";
      }

      for (const property of properties) {
        // dependencies are not ready
        dependencies[property.id]
          .filter((dep) => !propertyIds.includes(dep.id))
          .forEach((dep) => {
            if (
              record.recordProperties.find((p) => p.propertyId === dep.id)
                ?.state !== "ready"
            ) {
              mode = "notReady";
            }
          });
      }

      switch (mode) {
        case "ready":
          recordsToImport.push(record);
          break;
        case "notReady":
          recordsNotReady.push(record);
          break;
      }
    }

    if (recordsNotReady.length > 0) {
      await RecordProperty.update(
        { startedAt: ImportOps.retryStartedAt() },
        {
          where: {
            propertyId: { [Op.in]: properties.map((p) => p.id) },
            recordId: {
              [Op.in]: recordsNotReady.map((p) => p.id),
            },
            state: "pending",
          },
        }
      );
    }

    if (recordsToImport.length === 0) return;

    try {
      const propertyValuesBatch = await source.importRecordProperties(
        recordsToImport,
        properties
      );

      const orderedRecords: GrouparooRecord[] = [];
      const orderedHashes: any[] = [];
      for (const recordId in propertyValuesBatch) {
        const record = recordsToImport.find((p) => p.id === recordId);
        orderedRecords.push(record);
        orderedHashes.push(propertyValuesBatch[recordId]);
      }

      if (orderedRecords.length > 0) {
        await RecordOps.addOrUpdateProperties(
          orderedRecords,
          orderedHashes,
          false // we are disabling the record lock here because the transaction will be saved out-of-band from the lock check
        );
      }

      // update the properties that got no data back
      await RecordProperty.update(
        {
          state: "ready",
          rawValue: null,
          stateChangedAt: new Date(),
          confirmedAt: new Date(),
          startedAt: null,
        },
        {
          where: {
            propertyId: { [Op.in]: properties.map((p) => p.id) },
            recordId: {
              [Op.in]: recordsToImport.map((p) => p.id),
            },
            state: "pending",
          },
        }
      );
    } catch (error) {
      // if something goes wrong with the batch import, fall-back to per-record/property imports
      for (const record of recordsToImport) {
        for (const property of properties) {
          await CLS.enqueueTask("recordProperty:importRecordProperty", {
            recordId: record.id,
            propertyId: property.id,
          });
        }
      }

      log(error.stack, "error");
    }
  }
}
