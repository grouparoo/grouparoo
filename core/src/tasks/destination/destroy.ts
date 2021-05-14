import { config } from "actionhero";
import { Destination } from "../../models/Destination";
import { Run } from "../../models/Run";
import { Export } from "../../models/Export";
import { CLSTask } from "../../classes/tasks/clsTask";
import { CLS } from "../../modules/cls";

export class DestinationDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "destination:destroy";
    this.description =
      "untrack the group, wait for the exports, and then delete the destination";
    this.frequency = 0;
    this.queue = "destinations";
    this.inputs = {
      destinationId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const destination = await Destination.scope(null).findOne({
      where: { id: params.destinationId, state: "deleted" },
    });

    // the destination may have been force-deleted
    if (!destination) return;

    let run: Run;
    // untrack the group, if we are still tracking one
    // this will trigger a run to export all group members one last time
    if (destination.groupId) {
      run = await destination.unTrackGroup();
    } else {
      run = await Run.scope(null).findOne({
        where: { destinationId: params.destinationId },
        order: [["updatedAt", "desc"]],
        limit: 1,
      });
    }

    // the run is not yet complete
    if (run && (run.state === "running" || run.state === "draft")) {
      return;
    }

    // ensure that all the exports are complete
    try {
      await Destination.waitForPendingExports(destination);
    } catch (error) {
      if (error.message.match(/cannot delete destination until/)) {
        return;
      } else throw error;
    }

    // wait an appropriate amount of time to ensure that there are no more exports being created in another thread
    const latestExport = await Export.findOne({
      where: { destinationId: destination.id },
      order: [["updatedAt", "desc"]],
      limit: 1,
    });

    if (run) {
      if (
        run.updatedAt.getTime() + config.tasks.timeout * 5 >
        new Date().getTime()
      ) {
        return;
      }
    }

    if (latestExport) {
      if (
        latestExport.updatedAt.getTime() + config.tasks.timeout * 5 >
        new Date().getTime()
      ) {
        return;
      }
    }

    // the run is done (complete or stopped) or there was not a tracked group for this destination
    await destination.destroy();
  }
}
