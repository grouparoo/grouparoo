import { api, config } from "actionhero";
import { Destination } from "../../models/Destination";
import { Run } from "../../models/Run";
import { Export } from "../../models/Export";
import { CLSTask } from "../../classes/tasks/clsTask";

export class DestinationDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "destination:destroy";
    this.description =
      "untrack the group, wait for the exports, and then delete the destination";
    this.frequency = 0;
    this.queue = "destinations";
    this.inputs = {
      destinationGuid: { required: true },
      runGuid: { required: false },
    };
  }

  async reEnqueue(destination: Destination, run: Run) {
    return api.cls.enqueueTaskIn(config.tasks.timeout * 2, this.name, {
      destinationGuid: destination.guid,
      runGuid: run.guid,
    });
  }

  async runWithinTransaction(params) {
    const destination = await Destination.scope(null).findOne({
      where: { guid: params.destinationGuid, state: "deleted" },
    });

    // the destination may have been force-deleted
    if (!destination) return;

    let run: Run;
    // untrack the group, if we are still tracking one
    // this will trigger a run to export all group members one last time
    if (destination.groupGuid) {
      run = await destination.unTrackGroup();
    } else if (params.runGuid) {
      run = await Run.scope(null).findOne({ where: { guid: params.runGuid } });
    }

    // the run is not yet complete
    if (run) {
      if (run.state === "running" || run.state === "draft") {
        return this.reEnqueue(destination, run);
      }
    }

    // ensure that all the exports are complete
    try {
      await Destination.waitForPendingExports(destination);
    } catch (error) {
      if (error.message.match(/cannot delete destination until/)) {
        return this.reEnqueue(destination, run);
      } else throw error;
    }

    // wait an appropriate amount of time to ensure that there are no more exports being created in another thread
    const latestExport = await Export.findOne({
      where: { destinationGuid: destination.guid },
      order: [["updatedAt", "desc"]],
      limit: 1,
    });

    if (run) {
      if (
        run.updatedAt.getTime() + config.tasks.timeout * 5 >
        new Date().getTime()
      ) {
        return this.reEnqueue(destination, run);
      }
    }

    if (latestExport) {
      if (
        latestExport.updatedAt.getTime() + config.tasks.timeout * 5 >
        new Date().getTime()
      ) {
        return this.reEnqueue(destination, run);
      }
    }

    // the run is done (complete or stopped) or there was not a tracked group for this destination
    await destination.destroy();
  }
}
