import { config, ParamsFrom } from "actionhero";
import { Destination } from "../../models/Destination";
import { Run } from "../../models/Run";
import { Export } from "../../models/Export";
import { CLSTask } from "../../classes/tasks/clsTask";

export class DestinationDestroy extends CLSTask {
  name = "destination:destroy";
  description =
    "untrack the group, wait for the exports, and then delete the destination";
  frequency = 0;
  queue = "destinations";
  inputs = {
    destinationId: { required: true },
  };

  async runWithinTransaction({
    destinationId,
  }: ParamsFrom<DestinationDestroy>) {
    const destination = await Destination.scope(null).findOne({
      where: { id: destinationId, state: "deleted" },
    });

    // the destination may have been force-deleted
    if (!destination) return;

    // Are there any running runs for this destination in progress?  We should let them finish.
    const run = await Run.scope(null).findOne({
      where: { destinationId: destination.id },
      order: [["updatedAt", "desc"]],
      limit: 1,
    });

    // the run is not yet complete
    if (run && (run.state === "running" || run.state === "draft")) {
      return;
    }

    // ensure that all the exports are complete
    try {
      await Destination.waitForPendingExports(destination);
    } catch (error) {
      if (error.message.match(/cannot delete destination/)) {
        return;
      } else throw error;
    }

    // wait an appropriate amount of time to ensure that there are no more exports being created in another thread
    const wait = config.tasks.timeout * 5;

    const latestExport = await Export.findOne({
      where: { destinationId: destination.id },
      order: [["updatedAt", "desc"]],
      limit: 1,
    });

    if (run) {
      if (run.updatedAt.getTime() + wait > new Date().getTime()) {
        return;
      }
    }

    if (latestExport) {
      if (latestExport.updatedAt.getTime() + wait > new Date().getTime()) {
        return;
      }
    }

    // the run is done (complete or stopped) or there was nothing tracked for this destination
    await destination.destroy();
  }
}
