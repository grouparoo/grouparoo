import { Task, api, log, task } from "actionhero";
import { GrouparooCLI } from "../../../modules/cli";
import { CLS } from "../../../modules/cls";
import { APM } from "../../../modules/apm";
import { Status, FinalSummary } from "../../../modules/status";
import { plugin } from "../../../modules/plugin";

export class StatusTask extends Task {
  constructor() {
    super();
    this.name = "status";
    this.description =
      "Calculate and store status.  If we are running via the CLI, log it there too";
    this.frequency = 1000 * 5; // every 5 seconds by default, but will be modified by `updateTaskFrequency` after the first run
    this.queue = "system";
    this.inputs = {
      toStop: { required: false },
    };
  }

  async run({ toStop }: { toStop: boolean }, worker) {
    return APM.wrap(this.name, "task", worker, async () => {
      const runMode = process.env.GROUPAROO_RUN_MODE;

      Status.statusSampleReporters.forEach(async (_, idx) => {
        await task.enqueue("status:sample", { index: idx });
      });

      const samples = await this.getSamples();
      if (runMode === "cli:run") this.logSamples(samples);

      const complete = await this.checkForComplete(samples);
      if (runMode === "cli:run" && complete) {
        await this.logFinalSummary();
        await this.stopServer(toStop);
      }

      await this.updateTaskFrequency();
    });
  }

  async logFinalSummary() {
    const finalSummaryLog = await FinalSummary.getFinalSummary();
    GrouparooCLI.logger.finalSummary(finalSummaryLog);
  }

  async checkForComplete(samples: Status.StatusGetResponse) {
    let pendingItems = 0;
    let pendingCollections = 0;

    for (const topic in samples) {
      for (const collection in samples[topic]) {
        const metrics = samples[topic][collection];
        const { metric } = metrics[metrics.length - 1];
        if (metric.collection === "pending") {
          pendingItems += metric.count;
          pendingCollections++;
        }
      }
    }

    if (pendingCollections < 4) return false; // not every model has been checked yet (profile, runs, import, export)
    return pendingItems > 0 ? false : true;
  }

  async stopServer(toStop = true) {
    log("All Tasks Complete!", "notice");
    if (!toStop) return false;

    // do not await so the promise can end so the server can shut down
    new Promise(async () => {
      await api.process.stop();

      process.nextTick(() => process.exit(0));
    });
  }

  async getSamples() {
    let samples: Status.StatusGetResponse;
    await CLS.wrap(async () => {
      samples = await Status.get();
    });

    return samples;
  }

  logSamples(samples: Status.StatusGetResponse) {
    if (process.env.NODE_ENV === "test") return;

    const pendingItems = [];
    const pendingRuns = [];

    for (const topic in samples) {
      for (const collection in samples[topic]) {
        const metrics = samples[topic][collection];
        const { metric } = metrics[metrics.length - 1];
        if (metric.collection === "pending") {
          pendingItems.push({
            [metric.topic]: [metric.count],
          });
        }

        if (metric.topic === "Run" && metric.collection === "percentComplete") {
          pendingRuns.push({
            [metric.value]: [
              `${metric.count}%${
                metric.metadata ? ` (${metric.metadata})` : ""
              }`,
            ],
          });
        }
      }
    }

    GrouparooCLI.logger.status("Status", [
      {
        header: "Pending Items",
        status: pendingItems.reduce((s, arr) => Object.assign(s, arr), {}),
      },
      {
        header: "Active Runs",
        status: pendingRuns.reduce((s, arr) => Object.assign(s, arr), {}),
      },
    ]);
  }

  async updateTaskFrequency() {
    const frequency =
      parseInt(
        (
          await plugin.readSetting(
            "interface",
            "status-calculation-frequency-seconds"
          )
        ).value
      ) * 1000;

    api.tasks.tasks["status"].frequency = frequency;
  }
}
