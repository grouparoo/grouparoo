import { RetryableTask } from "../../classes/tasks/retryableTask";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { Property } from "../../models/Property";
import { RecordProperty } from "../../models/RecordProperty";
import { Mapping } from "../../models/Mapping";
import { Option } from "../../models/Option";
import { PropertyOps } from "../../modules/ops/property";
import { ImportOps } from "../../modules/ops/import";
import { ParamsFrom } from "actionhero";

export class ImportRecordProperty extends RetryableTask {
  name = "recordProperty:importRecordProperty";
  description = "Import the GrouparooRecord Property for a Property";
  frequency = 0;
  queue = "recordProperties";
  inputs = {
    recordId: { required: true },
    propertyId: { required: true },
  };

  async runWithinTransaction({
    recordId,
    propertyId,
  }: ParamsFrom<ImportRecordProperty>) {
    const record = await GrouparooRecord.findOne({ where: { id: recordId } });

    // has this record been removed since we enqueued the import task?
    if (!record) {
      return RecordProperty.destroy({
        where: { recordId, propertyId },
      });
    }

    const property = await Property.findOneWithCache(
      propertyId,
      record.modelId
    );
    if (!property) return;
    const recordProperties = await record.getProperties();
    const source = await property.$get("source", {
      scope: null,
      include: [Option, Mapping],
    });
    const dependencies = await PropertyOps.dependencies(property);

    let ok = true;
    dependencies.forEach((dep) => {
      if (recordProperties[dep.key].state !== "ready") ok = false;
    });

    if (!ok) {
      // there's a dependency we don't have yet, sleep a little and will be retried later
      return RecordProperty.update(
        { startedAt: ImportOps.retryStartedAt() },
        {
          where: {
            propertyId: property.id,
            recordId: record.id,
            state: "pending",
          },
        }
      );
    }

    const propertyValues = await source.importRecordProperty(record, property);

    if (propertyValues) {
      const hash: Record<string, (string | number | boolean | Date)[]> = {};
      hash[property.id] = Array.isArray(propertyValues)
        ? propertyValues
        : [propertyValues];

      await record.addOrUpdateProperties(hash);
    } else {
      // got no data back, clear value
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
            propertyId: property.id,
            recordId: record.id,
            state: "pending",
          },
        }
      );
    }
  }
}
