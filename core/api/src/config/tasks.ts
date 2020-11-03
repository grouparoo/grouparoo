export const DEFAULT = {
  tasks: (config) => {
    return {
      _toExpand: false,

      // Should this node run a scheduler to promote delayed tasks?
      scheduler: process.env.SCHEDULER === "true",
      // what queues should the taskProcessors work?
      queues: async () => {
        const { api } = await import("actionhero"); // this needs to be async loaded as we are within the config system, to avoid circular dependencies

        return [].concat(
          ["imports", "events", "runs", "schedules", "groups", "exports"],
          api?.plugins?.plugins
            .filter((plugin) => plugin.apps?.length > 0)
            .map((plugin) => plugin.apps.map((app) => `exports:${app.name}`)),
          ["profiles", "profileProperties", "destinations", "default"]
        );
      },
      // Logging levels of task workers
      workerLogging: {
        failure: "error", // task failure
        success: "info", // task success
        start: "info",
        end: "info",
        cleaning_worker: "info",
        poll: "debug",
        job: "debug",
        pause: "debug",
        internalError: "error",
        multiWorkerAction: "debug",
      },
      // Logging levels of the task scheduler
      schedulerLogging: {
        start: "info",
        end: "info",
        poll: "debug",
        enqueue: "debug",
        reEnqueue: "debug",
        working_timestamp: "debug",
        transferred_job: "debug",
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
        queue: null,
        multiWorker: null,
        scheduler: null,
      },
      connectionOptions: {
        tasks: {},
      },
    };
  },
};

export const test = {
  tasks: (config) => {
    return {
      queues: [
        "imports",
        "events",
        "profiles",
        "exports",
        "runs",
        "groups",
        "schedules",
        "destinations",
        "default",
      ],
      timeout: 100,
      checkTimeout: 50,
    };
  },
};
