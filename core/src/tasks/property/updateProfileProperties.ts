import { CLSTask } from "../../classes/tasks/clsTask";
import { Property } from "../../models/Property";
import { RecordProperty } from "../../models/RecordProperty";

export class PropertyDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "property:updateRecordProperties";
    this.description =
      "update related information on record properties when a property changes";
    this.frequency = 0;
    this.queue = "properties";
    this.inputs = {
      propertyId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const property = await Property.findOne({
      where: { id: params.propertyId },
    });
    if (!property) return;

    await RecordProperty.update(
      { unique: property.unique },
      { where: { propertyId: property.id } }
    );
  }
}
