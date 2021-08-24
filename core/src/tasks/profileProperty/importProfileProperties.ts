import { RetryableTask } from "../../classes/tasks/retryableTask";
import { GrouparooRecord } from "../../models/Record";
import { RecordProperty } from "../../models/RecordProperty";
import { Property } from "../../models/Property";
import { Mapping } from "../../models/Mapping";
import { Option } from "../../models/Option";
import { Op } from "sequelize";
import { log } from "actionhero";
import { CLS } from "../../modules/cls";
import { RecordPropertiesPluginMethodResponse } from "../../classes/plugin";
import { PropertyOps } from "../../modules/ops/property";
import { ImportOps } from "../../modules/ops/import";
import { RecordOps } from "../../modules/ops/record";

export class ImportRecordProperties extends RetryableTask {
  constructor() {
    super();
    this.name = "recordProperty:importRecordProperties";
    this.description = "Import the GrouparooRecord Properties for a Property";
    this.frequency = 0;
    this.queue = "recordProperties";
    this.inputs = {
      recordIds: { required: true },
      propertyIds: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const records = await GrouparooRecord.findAll({
      where: { id: { [Op.in]: params.recordIds } },
      include: [RecordProperty],
    });
    if (records.length === 0) return;

    const allProperties = await Property.findAllWithCache();
    const properties = allProperties.filter((p) =>
      params.propertyIds.includes(p.id)
    );
    if (properties.length === 0) return;
    const sourceIds = properties
      .map((p) => p.sourceId)
      .filter((v, i, a) => a.indexOf(v) === i);
    if (sourceIds.length > 1) {
      throw new Error(
        `More than one source for properties ${params.propertyIds.join(", ")}`
      );
    }

    const source = await properties[0].$get("source", {
      include: [Option, Mapping],
      scope: null,
    });

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
          .filter((dep) => !params.propertyIds.includes(dep.id))
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

    let propertyValuesBatch: RecordPropertiesPluginMethodResponse = {};
    try {
      propertyValuesBatch = await source.importRecordProperties(
        recordsToImport,
        properties
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

      return log(error.stack, "error");
    }

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
  }
}
