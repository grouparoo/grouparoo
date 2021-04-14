import { GrouparooCLI } from "../modules/cli";
import { CLI, Task, api, config } from "actionhero";
import { Schedule, Run } from "..";
import { CLS } from "../modules/cls";
import { Reset } from "../modules/reset";

const CHECK_TIMEOUT = 1000 * 10;

export class RunCLI extends CLI {
  constructor() {
    super();
    this.name = "run";
    this.description =
      "Run all Schedules, Runs, Imports and Exports pending in this cluster.  Use GROUPAROO_LOG_LEVEL env to set log level.";
    this.inputs = {
      reset: {
        default: false,
        description:
          "[DANGER] Empty the cluster of all Profile data before starting the run? Equivalent to `grouparoo reset data`",
        letter: "r",
        flag: true,
      },
      "reset-high-watermarks": {
        default: false,
        description: "Should we run all Schedules from the beginning?",
        letter: "m",
        flag: true,
      },
      "run-all-schedules": {
        default: false,
        description:
          "Should we run all Schedules, even those that do not have a recurring time set?",
        letter: "s",
        flag: true,
      },
      "no-export": {
        default: false,
        description: "Skip exporting the profiles",
        letter: "n",
        flag: true,
      },
      web: {
        default: false,
        description: "Enable the web server during this run?",
        letter: "w",
        flag: true,
      },
    };

    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
  };

  async run({ params }) {
    GrouparooCLI.logCLI(this.name, false);
    this.checkWorkers();

    if (!params.web) GrouparooCLI.disableWebServer();
    if (params.reset) await Reset.data(process.env.GROUPAROO_RUN_MODE);
    if (params.resetHighWatermarks) await Reset.resetHighWatermarks();
    process.env.GROUPAROO_DISABLE_EXPORTS = String(
      params.export.toString().toLowerCase() !== "true"
    );

    await import("../grouparoo"); // run the server

    await this.waitForReady();
    await this.runPausedTasks(params);

    if (params.runAllSchedules) await this.runNonRecurringSchedules();

    return false;
  }

  checkWorkers() {
    if (!config.tasks.scheduler)
      throw new Error(`The Task Scheduler is not enabled`);
    if (config.tasks.minTaskProcessors < 1)
      throw new Error(`No Task Workers are enabled`);
  }

  async waitForReady() {
    return new Promise(async (resolve) => {
      async function check() {
        if (api.process.started) return resolve(null);
        setTimeout(() => check(), CHECK_TIMEOUT / 2);
      }

      await check();
    });
  }

  async runPausedTasks(params) {
    let checkDeltas = !params.resetHighWatermarks;

    const tasks = {
      "schedule:updateSchedules": { checkDeltas },
      "run:recurringInternalRun": {},
      "group:updateCalculatedGroups": {},
    };

    for (const name in tasks) {
      const args = tasks[name];
      const task: Task = api.tasks.tasks[name];
      await task.run(args, {});
    }
  }

  async runNonRecurringSchedules() {
    const schedules = await Schedule.findAll({ where: { recurring: false } });
    for (const i in schedules) {
      const run = await Run.create({
        creatorId: schedules[i].id,
        creatorType: "schedule",
        state: "running",
      });

      await CLS.enqueueTask("schedule:run", {
        scheduleId: schedules[i].id,
        runId: run.id,
      });
    }
  }
}
