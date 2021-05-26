import { CLSTask } from "../../classes/tasks/clsTask";
import { Property } from "../../models/Property";
import { ProfileProperty } from "../../models/ProfileProperty";

export class PropertyDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "property:updateProfileProperties";
    this.description =
      "update related information on profile properties when a property changes";
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

    await ProfileProperty.update(
      { unique: property.unique },
      { where: { propertyId: property.id } }
    );
  }
}
