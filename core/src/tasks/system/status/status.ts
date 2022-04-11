import { api, log, task, env, ParamsFrom } from "actionhero";
import { GrouparooCLI } from "../../../modules/cli";
import { APM } from "../../../modules/apm";
import { Status, FinalSummary } from "../../../modules/status";
import { plugin } from "../../../modules/plugin";
import { CLSTask } from "../../../classes/tasks/clsTask";
import { Worker } from "node-resque";
import { APIData } from "../../../modules/apiData";
import { getGrouparooRunMode } from "../../../modules/runMode";

export class StatusTask extends CLSTask {
  name = "status";
  description =
    "Calculate and store status.  If we are running via the CLI, log it there too";
  frequency = 1000 * 5; // every 5 seconds by default, but will be modified by `updateTaskFrequency` after the first run
  queue = "system";
  inputs = {
    toStop: { required: false, formatter: APIData.ensureBoolean },
  } as const;

  async runWithinTransaction(
    { toStop }: ParamsFrom<StatusTask>,
    worker: Worker
  ) {
    return APM.wrap(this.name, "task", worker, async () => {
      if (getGrouparooRunMode() === "cli:run") {
        // calculate stats inline
        await Status.setAll();
      } else {
        // distribute stats calculation
        Status.statusSampleReporters.forEach(async (_, idx) => {
          await task.enqueue("status:sample", { index: idx });
        });
      }

      const samples = await this.getSamples();
      if (getGrouparooRunMode() === "cli:run") this.logSamples(samples);

      const complete = await this.checkForComplete(samples);

      if (getGrouparooRunMode() === "cli:run" && complete) {
        await this.logFinalSummary();
        await this.stopServer(toStop);
      }

      await this.updateTaskFrequency();
    });
  }

  async logFinalSummary() {
    if (env === "test") return;

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
        if (
          metric.collection === "pending" ||
          metric.collection === "deleted"
        ) {
          pendingItems += metric.count;
          pendingCollections++;
        }
      }
    }

    if (pendingCollections < 4) return false; // not every required model has been checked yet (PENDING: record, runs, import, export)
    return pendingItems > 0 ? false : true;
  }

  async stopServer(toStop = true) {
    log("All Tasks Complete!", "notice");
    if (!toStop) return false;

    // do not await so the promise can end so the server can shut down
    // eslint-disable-next-line no-async-promise-executor
    new Promise(async () => {
      await api.process.stop();

      process.nextTick(() => process.exit(0));
    });
  }

  async getSamples() {
    const samples = await Status.get();
    return samples;
  }

  logSamples(samples: Status.StatusGetResponse) {
    if (env === "test") return;

    const totalItems: Record<string, number[]>[] = [];
    const pendingItems: Record<string, number[]>[] = [];
    const pendingRuns: Record<string, string[]>[] = [];
    const pendingDeletions = [];

    const pendingCollection = samples["Run"]
      ? samples["Run"]["pending"]
      : undefined;
    const activeRunIds: string[] = pendingCollection
      ? JSON.parse(
          pendingCollection[pendingCollection.length - 1]?.metric?.value
        ) ?? []
      : [];

    for (const topic in samples) {
      for (const collection in samples[topic]) {
        const metrics = samples[topic][collection];
        const { metric: latestMetric, timestamp: latestTimestamp } =
          metrics[metrics.length - 1];

        if (latestMetric.collection === "totals") {
          totalItems.push({
            [latestMetric.topic]: [latestMetric.count],
          });
        }

        if (latestMetric.collection === "pending") {
          pendingItems.push({
            [latestMetric.topic]: [latestMetric.count],
          });
        }

        if (latestMetric.collection === "deleted" && latestMetric.count > 0) {
          pendingDeletions.push({
            [latestMetric.topic]: [latestMetric.count],
          });
        }

        if (
          latestMetric.topic === "Run" &&
          latestMetric.collection === "percentComplete"
        ) {
          metrics.forEach(({ metric, timestamp }) => {
            if (
              activeRunIds.includes(metric.key) &&
              latestTimestamp === timestamp
            ) {
              pendingRuns.push({
                [metric.value]: [
                  `${metric.count}%${
                    metric.metadata ? ` (${metric.metadata})` : ""
                  }`,
                ],
              });
            }
          });
        }
      }
    }

    const logItems = [];
    if (totalItems.length > 0) {
      logItems.push({
        header: "Total Items",
        status: totalItems.reduce((s, arr) => Object.assign(s, arr), {}),
      });
    }
    if (pendingItems.length > 0) {
      logItems.push({
        header: "Pending Items",
        status: pendingItems.reduce((s, arr) => Object.assign(s, arr), {}),
      });
    }
    if (pendingRuns.length > 0) {
      logItems.push({
        header: "Active Runs",
        status: pendingRuns.reduce((s, arr) => Object.assign(s, arr), {}),
      });
    }
    if (pendingDeletions.length > 0) {
      logItems.push({
        header: "Pending Deletions",
        status: pendingDeletions.reduce((s, arr) => Object.assign(s, arr), {}),
      });
    }

    if (logItems.length > 0) GrouparooCLI.logger.status("Status", logItems);
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
