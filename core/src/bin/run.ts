import { GrouparooCLI } from "../modules/cli";
import { CLI, Task, api, config, ParamsFrom } from "actionhero";
import { Reset } from "../modules/reset";
import { Worker } from "node-resque";

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
      default: false,
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
  };

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
    if (params.reset) await Reset.data(config.general.runMode);
    if (params.resetHighWatermarks) await Reset.resetHighWatermarks();
    process.env.GROUPAROO_DISABLE_EXPORTS = String(
      params.export?.toString()?.toLowerCase() !== "true"
    );

    const { main } = await import("../grouparoo");
    await main();

    await this.runTasks();

    return false;
  }

  checkWorkers() {
    if (config.tasks.minTaskProcessors < 1) {
      return GrouparooCLI.logger.fatal(
        `No Task Workers are enabled. Modify your environment to add Workers`
      );
    }
  }

  async runTasks() {
    const tasks = {
      "appRefreshQueries:check": {},
      "schedules:enqueueRuns": {
        ignoreDeltas: true,
        runIfNotRecurring: true,
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
