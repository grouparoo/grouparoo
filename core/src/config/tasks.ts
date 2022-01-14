import { ActionheroLogLevel, api } from "actionhero";
import { MultiWorker, Queue, Scheduler } from "node-resque";

const namespace = "tasks";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
}

export const DEFAULT = {
  [namespace]: () => {
    return {
      _toExpand: false,

      // Should this node run a scheduler to promote delayed tasks?
      scheduler: (process.env.WORKERS ? parseInt(process.env.WORKERS) : 0) > 0,
      // what queues should the taskProcessors work?
      queues: async () => {
        return [].concat(
          ["system", "imports", "runs", "schedules", "groups", "exports"],
          api?.plugins?.plugins
            .filter((plugin) => plugin.apps?.length > 0)
            .flatMap((plugin) =>
              plugin.apps.map((app) => `exports:${app.name}`)
            ),
          [
            "records",
            "recordProperties",
            "destinations",
            "properties",
            "sources",
            "apps",
            "models",
            "default",
          ]
        );
      }, // Logging levels of task workers
      workerLogging: {
        failure: "error" as ActionheroLogLevel, // task failure
        success: "info" as ActionheroLogLevel, // task success
        start: "info" as ActionheroLogLevel,
        end: "info" as ActionheroLogLevel,
        cleaning_worker: "info" as ActionheroLogLevel,
        poll: "debug" as ActionheroLogLevel,
        job: "debug" as ActionheroLogLevel,
        pause: "debug" as ActionheroLogLevel,
        reEnqueue: "debug" as ActionheroLogLevel,
        internalError: "error" as ActionheroLogLevel,
        multiWorkerAction: "debug" as ActionheroLogLevel,
      },
      // Logging levels of the task scheduler
      schedulerLogging: {
        start: "info" as ActionheroLogLevel,
        end: "info" as ActionheroLogLevel,
        poll: "debug" as ActionheroLogLevel,
        enqueue: "debug" as ActionheroLogLevel,
        working_timestamp: "debug" as ActionheroLogLevel,
        reEnqueue: "debug" as ActionheroLogLevel,
        transferred_job: "debug" as ActionheroLogLevel,
      },
      // how long to sleep between jobs / scheduler checks
      timeout: 2500,
      // at minimum, how many parallel taskProcessors should this node spawn?
      // (have number > 0 to enable, and < 1 to disable)
      minTaskProcessors: process.env.WORKERS
        ? parseInt(process.env.WORKERS)
        : 0,
      // at maximum, how many parallel taskProcessors should this node spawn?
      maxTaskProcessors: process.env.WORKERS
        ? parseInt(process.env.WORKERS)
        : 0,
      // how often should we check the event loop to spawn more taskProcessors?
      checkTimeout: 500,
      // how many ms would constitute an event loop delay to halt taskProcessors spawning?
      maxEventLoopDelay: 5,
      // how long before we mark a resque worker / task processor as stuck/dead?
      stuckWorkerTimeout: 1000 * 60 * 10,
      // should the scheduler automatically try to retry failed tasks which were failed due to being 'stuck'?
      retryStuckJobs: true,
      // Customize Resque primitives, replace null with required replacement.
      resque_overrides: {
        queue: null as Queue,
        multiWorker: null as MultiWorker,
        scheduler: null as Scheduler,
      },
      connectionOptions: {
        tasks: {},
      },
    };
  },
};

export const test = {
  [namespace]: () => {
    return {
      queues: [
        "imports",
        "records",
        "exports",
        "runs",
        "groups",
        "schedules",
        "destinations",
        "properties",
        "sources",
        "apps",
        "default",
      ],
      timeout: 100,
      checkTimeout: 50,
    };
  },
};
