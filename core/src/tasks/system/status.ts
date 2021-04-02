import { Task, api, log } from "actionhero";
import { GrouparooCLI } from "../../modules/cli";
import { CLS } from "../../modules/cls";
import { Status } from "../../modules/status";
import { StatusMetric } from "../../modules/statusReporters";

export class StatusTask extends Task {
  constructor() {
    super();
    this.name = "status";
    this.description =
      "Calculate and store status.  If we are running via the CLI, log it there too";
    this.frequency = 1000 * 5; // every 5 seconds
    this.queue = "system";
  }

  async run() {
    const runMode = process.env.GROUPAROO_RUN_MODE;
    const samples = await this.getSamples();
    if (runMode === "cli:run") this.logSamples(samples);
    const complete = await this.checkForComplete(samples);
    if (runMode === "cli:run" && complete) await this.stopServer();
  }

  async checkForComplete(samples: StatusMetric[]) {
    let pendingItems = 0;
    for (const sample of samples) {
      if (sample.collection === "pending") pendingItems += sample.count;
    }

    if (pendingItems > 0) return false;
    return true;
  }

  async stopServer() {
    log("All Tasks Complete!", "notice");

    // do not await so the promise can end so the server can shut down
    new Promise(async () => {
      await api.process.stop();
      GrouparooCLI.logger.log(
        `All Grouparoo tasks complete - exiting with code 0`
      );
      process.nextTick(() => process.exit(0));
    });
  }

  async getSamples() {
    let samples: StatusMetric[];
    await CLS.wrap(async () => {
      samples = await Status.sample();
    });

    return samples;
  }

  logSamples(samples: StatusMetric[]) {
    if (process.env.NODE_ENV === "test") return;

    const pendingItems = samples
      .filter((s) => s.collection === "pending")
      .map((s) => {
        return { [s.topic]: [s.count] };
      })
      .reduce((s, arr) => Object.assign(s, arr), {});

    const pendingRuns = samples
      .filter((s) => s.topic === "Run" && s.collection === "percentComplete")
      .map((s) => {
        return {
          [s.value]: [`${s.count}%${s.metadata ? ` (${s.metadata})` : ""}`],
        };
      })
      .reduce((s, arr) => Object.assign(s, arr), {});

    GrouparooCLI.logger.status("Status", [
      { header: "Pending Items", status: pendingItems },
      { header: "Active Runs", status: pendingRuns },
    ]);
  }
}
