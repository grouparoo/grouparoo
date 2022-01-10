import { ParamsFrom } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Property } from "../../models/Property";

export class PropertyDestroy extends CLSTask {
  name = "property:destroy";
  description =
    "wait for dependencies to finish being deleted, then delete the property";
  frequency = 0;
  queue = "properties";
  inputs = {
    propertyId: { required: true },
  };

  async runWithinTransaction({ propertyId }: ParamsFrom<PropertyDestroy>) {
    const property = await Property.scope(null).findOne({
      where: { id: propertyId, state: "deleted" },
    });

    // the property may have been force-deleted
    if (!property) return;

    // check if we're still being used by something
    try {
      await Property.ensureNotInUse(property);
    } catch (error) {
      if (error.message.match(/cannot delete property/)) {
        return; // check back later
      }

      throw error;
    }

    // all things that depend on this property have been cleaned up
    await property.destroy();
  }
}
