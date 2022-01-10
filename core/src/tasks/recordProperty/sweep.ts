import { config } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { RecordProperty } from "../../models/RecordProperty";
import { Property } from "../../models/Property";

export class RecordPropertySweep extends CLSTask {
  name = "recordProperties:sweep";
  description =
    "Double check that all record properties are removed that don't belong to a record or property";
  frequency = 1000 * 60 * 60;
  queue = "recordProperties";

  async runWithinTransaction() {
    let count = 0;
    const limit: number = config.batchSize.recordProperties;

    // delete those record properties who have no record
    const recordPropertiesMissingRecord = await RecordProperty.findAll({
      include: [{ model: GrouparooRecord, required: false }],
      where: { "$record.id$": null },
      limit,
    });

    // delete those record properties who have no property
    const recordPropertiesMissingRule = await RecordProperty.findAll({
      include: [{ model: Property, required: false }],
      where: { "$property.id$": null },
      limit,
    });

    count += recordPropertiesMissingRecord.length;
    count += recordPropertiesMissingRule.length;

    if (count > 0) {
      await RecordProperty.destroy({
        where: {
          id: [].concat(
            recordPropertiesMissingRecord.map((p) => p.id),
            recordPropertiesMissingRule.map((p) => p.id)
          ),
        },
      });
    }

    return count;
  }
}
