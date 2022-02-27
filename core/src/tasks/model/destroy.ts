import { ParamsFrom } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { GrouparooModel } from "../../models/GrouparooModel";

export class ModelDestroy extends CLSTask {
  name = "model:destroy";
  description =
    "wait for dependencies to finish being deleted, then delete the model";
  frequency = 0;
  queue = "models";
  inputs = {
    modelId: { required: true },
  } as const;

  async runWithinTransaction({ modelId }: ParamsFrom<ModelDestroy>) {
    const model = await GrouparooModel.scope(null).findOne({
      where: { id: modelId, state: "deleted" },
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
