import { Task, api } from "actionhero";
import { GrouparooCLI } from "../../modules/cli";
import { CLS } from "../../modules/cls";

export class StatusTask extends Task {
  constructor() {
    super();
    this.name = "status";
    this.description = "log and display status";
    this.frequency = 1000 * 10; // every 10 seconds
    this.frequency =
      process.env.GROUPAROO_RUN_MODE === "cli:run" ? 1000 * 10 : 0; // every 10 seconds
    this.queue = "system";
  }

  async run() {
    // double check...
    if (process.env.GROUPAROO_RUN_MODE !== "cli:run") return;

    const toStop = await this.checkForComplete();
    if (toStop) await this.stopServer();
  }

  async checkForComplete() {
    const { pendingStatus } = await this.statusReport();
    let pendingItems = 0;
    for (const key in pendingStatus) {
      pendingItems += pendingStatus[key][0] as number;
    }

    if (pendingItems > 0) return false;
    return true;
  }

  async stopServer() {
    GrouparooCLI.logger.log("All Tasks Complete!");

    // do not await so the task can end so the server can shut down
    new Promise(async () => {
      await api.process.stop();
      GrouparooCLI.logger.log(
        `All Grouparoo tasks complete - exiting with code 0`
      );
      process.nextTick(() => process.exit(0));
    });
  }

  async statusReport(title = "Status") {
    let pendingStatus: GrouparooCLI.LogStatus;
    let runStatus: GrouparooCLI.LogStatus;

    await CLS.wrap(async () => {
      pendingStatus = await GrouparooCLI.getPendingStatus();
      runStatus = await GrouparooCLI.getRunsStatus();

      if (process.env.NODE_ENV !== "test") {
        GrouparooCLI.logger.status(title, [
          { header: "Pending Items", status: pendingStatus },
          { header: "Active Runs", status: runStatus },
        ]);
      }
    });

    return { pendingStatus, runStatus };
  }
}
