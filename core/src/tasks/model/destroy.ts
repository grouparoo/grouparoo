import { CLSTask } from "../../classes/tasks/clsTask";
import { GrouparooModel } from "../../models/GrouparooModel";

export class ModelDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "model:destroy";
    this.description =
      "wait for dependencies to finish being deleted, then delete the model";
    this.frequency = 0;
    this.queue = "models";
    this.inputs = {
      modelId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const model = await GrouparooModel.scope(null).findOne({
      where: { id: params.modelId, state: "deleted" },
    });

    // the model may have been force-deleted
    if (!model) {
      return;
    }

    // check if we're still being used by something
    try {
      await GrouparooModel.ensureNotInUse(model);
    } catch (error) {
      if (error.message.match(/cannot delete this model,/)) {
        return; // check back later
      }

      throw error;
    }

    // all things that depend on this model have been cleaned up
    await model.destroy();
  }
}
