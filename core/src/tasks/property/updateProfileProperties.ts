import { ParamsFrom } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Property } from "../../models/Property";
import { RecordProperty } from "../../models/RecordProperty";

export class PropertyUpdateProfileProperties extends CLSTask {
  name = "property:updateRecordProperties";
  description =
    "update related information on record properties when a property changes";
  frequency = 0;
  queue = "properties";
  inputs = {
    propertyId: { required: true },
  };

  async runWithinTransaction({
    propertyId,
  }: ParamsFrom<PropertyUpdateProfileProperties>) {
    const property = await Property.findOne({ where: { id: propertyId } });
    if (!property) return;

    await RecordProperty.update(
      { unique: property.unique },
      { where: { propertyId: property.id } }
    );
  }
}
