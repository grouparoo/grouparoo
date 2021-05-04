import { GrouparooCLI } from "../modules/cli";
import { CLI, Task, api, config, log } from "actionhero";
import { Schedule, Run } from "..";
import { CLS } from "../modules/cls";
import { Reset } from "../modules/reset";

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

    const scheduleCount = await Schedule.count();
    if (scheduleCount === 0) {
      log(
        `No schedules found. The run command uses schedules to know what profiles to import.\nSee this link for more info: https://www.grouparoo.com/docs/getting-started/product-concepts#schedule\nIf you have a schedule and are seeing this message, try \`grouparoo apply\` first.`,
        "error"
      );
      process.exit(1);
    }

    if (!params.web) GrouparooCLI.disableWebServer();
    if (params.reset) await Reset.data(process.env.GROUPAROO_RUN_MODE);
    if (params.resetHighWatermarks) await Reset.resetHighWatermarks();
    process.env.GROUPAROO_DISABLE_EXPORTS = String(
      params.export.toString().toLowerCase() !== "true"
    );

    const { main } = await import("../grouparoo");
    await main();

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
