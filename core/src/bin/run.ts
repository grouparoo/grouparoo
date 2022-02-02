import { CLI, Task, api, config, ParamsFrom, log } from "actionhero";
import { Worker } from "node-resque";
import { GrouparooCLI } from "../modules/cli";
import { Reset } from "../modules/reset";
import { getGrouparooRunMode } from "../modules/runMode";
import { Schedule } from "../models/Schedule";
import { Run } from "../models/Run";

export class RunCLI extends CLI {
  name = "run";
  description =
    "Run all Schedules, Runs, Imports and Exports pending in this cluster.  Use GROUPAROO_LOG_LEVEL env to set log level.";
  inputs = {
    reset: {
      default: false,
      description:
        "[DANGER] Empty the cluster of all GrouparooRecord data before starting the run? Equivalent to `grouparoo reset data`",
      letter: "r",
      flag: true,
    },
    "reset-high-watermarks": {
      default: false,
      description: "Should we run all Schedules from the beginning?",
      letter: "m",
      flag: true,
    },
    "no-export": {
      description: "Skip exporting the records",
      letter: "n",
      flag: true,
    },
    web: {
      default: false,
      description: "Enable the web server during this run?",
      letter: "w",
      flag: true,
    },
    scheduleIds: {
      description: "Only run specific Schedules by id",
      required: false,
      requiredValue: true,
      variadic: true,
      letter: "s",
      placeholder: "schedule ids",
    },
  } as const;

  constructor() {
    super();
    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  async run({
    params,
  }: {
    params: Partial<
      ParamsFrom<RunCLI> & {
        export?: string;
        resetHighWatermarks?: string;
      }
    >;
  }) {
    GrouparooCLI.logCLI(this.name, false);

    this.checkWorkers();

    if (!params.web) GrouparooCLI.disableWebServer();
    if (params.reset) await Reset.data(getGrouparooRunMode());
    if (params.resetHighWatermarks) await Reset.resetHighWatermarks();
    process.env.GROUPAROO_DISABLE_EXPORTS = String(
      params.export?.toString()?.toLowerCase() !== "true"
    );

    const { main } = await import("../grouparoo");
    await main();

    await this.checkSchedules(params.scheduleIds);
    await this.stopScheduleRuns();

    const scheduleIds = Array.isArray(params.scheduleIds)
      ? params.scheduleIds
      : undefined;
    await this.runTasks(scheduleIds);

    return false;
  }

  checkWorkers() {
    if (config.tasks.minTaskProcessors < 1) {
      return GrouparooCLI.logger.fatal(
        `No Task Workers are enabled. Modify your environment to add Workers`
      );
    }
  }

  async checkSchedules(scheduleIds?: string[]) {
    if (typeof scheduleIds === "undefined") return;

    const schedules = await Schedule.findAll({ where: { id: scheduleIds } });
    const foundScheduleIds = schedules.map((s) => s.id);
    scheduleIds.forEach((id) => {
      if (!foundScheduleIds.includes(id))
        return GrouparooCLI.logger.fatal(
          `Schedule with id "${id}" was not found`
        );
    });
  }

  async stopScheduleRuns() {
    const runningRuns = await Run.findAll({
      where: {
        state: "running",
        creatorType: "schedule",
      },
    });

    for (const run of runningRuns) {
      await run.stop();
    }

    if (runningRuns.length) {
      log(
        `Stopped ${runningRuns.length} previously running Schedules`,
        "notice"
      );
    }
  }

  async runTasks(scheduleIds?: string[]) {
    const tasks = {
      "appRefreshQueries:check": {},
      "schedules:enqueueRuns": {
        ignoreDeltas: true,
        runIfNotRecurring: true,
        scheduleIds,
      },
      "run:recurringInternalRun": {},
      "group:updateCalculatedGroups": {},
    };

    for (const [name, args] of Object.entries(tasks)) {
      const task: Task = api.tasks.tasks[name];
      await task.run(args, {} as Worker);
    }
  }
}
