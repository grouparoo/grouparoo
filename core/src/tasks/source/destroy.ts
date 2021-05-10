import { config } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { CLS } from "../../modules/cls";
import { Source } from "../../models/Source";

export class SourceDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "source:destroy";
    this.description =
      "wait for dependencies to finish being deleted, then delete the source";
    this.frequency = 0;
    this.queue = "sources";
    this.inputs = {
      sourceId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const source = await Source.scope(null).findOne({
      where: { id: params.sourceId },
    });

    // the source may have been force-deleted
    if (!source) return;

    // check if we still have properties
    try {
      await Source.ensureNoProperties(source);
    } catch (error) {
      if (error.message.match(/cannot delete a source that has a property/)) {
        if (source.state !== "deleted") {
          await source.update({ state: "deleted" });
        }
        return CLS.enqueueTaskIn(config.tasks.timeout + 1, this.name, {
          sourceId: source.id,
        });
      }

      throw error;
    }

    // no properties, let's delete it
    await source.destroy();
  }
}
