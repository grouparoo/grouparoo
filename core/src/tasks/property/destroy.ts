import { config } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { CLS } from "../../modules/cls";
import { Property } from "../../models/Property";

export class PropertyDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "property:destroy";
    this.description =
      "wait for dependencies to finish being deleted, then delete the property";
    this.frequency = 0;
    this.queue = "properties";
    this.inputs = {
      propertyId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const property = await Property.scope(null).findOne({
      where: { id: params.propertyId },
    });

    // the property may have been force-deleted
    if (!property) return;

    // check if we're still being used by something
    try {
      await Property.ensureNotInUse(property);
    } catch (error) {
      if (error.message.match(/cannot delete property/)) {
        if (property.state !== "deleted") {
          await property.update({ state: "deleted" });
        }
        return CLS.enqueueTaskIn(config.tasks.timeout + 1, this.name, {
          propertyId: property.id,
        });
      }

      throw error;
    }

    // all things that depend on this property have been cleaned up
    await property.destroy();
  }
}
