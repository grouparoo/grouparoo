import os from "os";
import { AuthenticatedAction } from "../classes/authenticatedAction";
import { api, task } from "actionhero";

// A helper class

abstract class ResqueAction extends AuthenticatedAction {
  constructor() {
    super();
    this.permission = { topic: "resque", mode: "write" };
    this.logLevel = "debug";
    this.toDocument = false;
  }
}

exports.ResqueRedisInfo = class ResqueRedisInfo extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:redisInfo";
    this.description = "I return the results of redis info";
    this.inputs = {};
  }

  async run({ response }) {
    const redisInfo = await api.resque.queue.connection.redis.info();
    if (redisInfo) {
      response.redisInfo = redisInfo.split(os.EOL);
    }
  }
};

exports.ResqueResqueDetails = class ResqueResqueDetails extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:resqueDetails";
    this.description = "I return the results of api.tasks.details";
    this.inputs = {};
  }

  async run({ response }) {
    response.resqueDetails = await task.details();
  }
};

exports.ResqueLoadWorkerQueues = class ResqueLoadWorkerQueues extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:loadWorkerQueues";
    this.description = "I return the results of api.tasks.workers";
    this.inputs = {};
  }

  async run({ response }) {
    response.workerQueues = await task.workers();
  }
};

exports.ResqueForceCleanWorker = class ResqueForceCleanWorker extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:forceCleanWorker";
    this.description = "I remove a worker from resque";
    this.inputs = {
      workerName: { required: true },
    };
  }

  async run({ params, response }) {
    response.generatedErrorPayload = await api.resque.queue.forceCleanWorker(
      params.workerName
    );
  }
};

exports.ResqueFailedCount = class ResqueFailedCount extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:resqueFailedCount";
    this.description = "I return a count of failed jobs";
    this.inputs = {};
  }

  async run({ response }) {
    response.failedCount = await task.failedCount();
  }
};

exports.ResqueQueued = class ResqueQueued extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:queued";
    this.description = "I list enqueued jobs";
    this.inputs = {
      queue: {
        required: true,
      },
      offset: {
        required: true,
        formatter: parseInt,
        default: 0,
      },
      limit: {
        required: true,
        formatter: parseInt,
        default: 100,
      },
    };
  }

  async run({ params, response }) {
    response.queueLength = await api.resque.queue.length(params.queue);
    response.jobs = await task.queued(
      params.queue,
      params.offset,
      params.offset + params.limit - 1
    );
  }
};

exports.ResqueDelQueue = class ResqueDelQueue extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:delQueue";
    this.description = "I delete a queue";
    this.inputs = {
      queue: { required: true },
    };
  }

  async run({ response, params }) {
    response.deleted = await task.delQueue(params.queue);
  }
};

exports.ResqueResqueFailed = class ResqueResqueFailed extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:resqueFailed";
    this.description = "I return failed jobs";
    this.inputs = {
      offset: {
        required: true,
        formatter: parseInt,
        default: 0,
      },
      limit: {
        required: true,
        formatter: parseInt,
        default: 100,
      },
    };
  }

  async run({ response, params }) {
    response.failed = await task.failed(
      params.offset,
      params.offset + params.limit - 1
    );
    response.total = await task.failedCount();
  }
};

exports.ResqueRemoveFailed = class ResqueRemoveFailed extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:removeFailed";
    this.description = "I remove a failed job";
    this.inputs = {
      id: {
        required: true,
        formatter: parseInt,
      },
    };
  }

  async run({ params }) {
    const failed = await task.failed(params.id, params.id);
    if (!failed) throw Error("failed job not found");
    await task.removeFailed(failed[0]);
  }
};

exports.ResqueRemoveAllFailed = class ResqueRemoveAllFailed extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:removeAllFailed";
    this.description = "I remove all failed jobs";
    this.inputs = {};
  }

  async run() {
    const failed = await task.failed(0, 0);
    if (failed && failed.length > 0) {
      const failedJob = failed[0];
      await task.removeFailed(failedJob);
      return this.run();
    }
  }
};

exports.ResqueRetryAndRemoveFailed = class ResqueRetryAndRemoveFailed extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:retryAndRemoveFailed";
    this.description = "I retry a failed job";
    this.inputs = {
      id: {
        required: true,
        formatter: parseInt,
      },
    };
  }

  async run({ params }) {
    const failed = await task.failed(params.id, params.id);
    if (!failed) throw new Error("failed job not found");
    await task.retryAndRemoveFailed(failed[0]);
  }
};

exports.ResqueRetryAndRemoveAllFailed = class ResqueRetryAndRemoveAllFailed extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:retryAndRemoveAllFailed";
    this.description = "I retry all failed jobs";
    this.inputs = {};
  }

  async run() {
    const failed = await task.failed(0, 0);
    if (failed && failed.length > 0) {
      const failedJob = failed[0];
      await task.retryAndRemoveFailed(failedJob);
      return this.run();
    }
  }
};

exports.ResqueLocks = class ResqueLocks extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:locks";
    this.description = "I return all locks";
    this.inputs = {};
  }

  async run({ response }) {
    response.locks = await task.locks();
  }
};

exports.ResqueDelLock = class ResqueDelLock extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:delLock";
    this.description = "I delete a lock";
    this.inputs = {
      lock: { required: true },
    };
  }

  async run({ response, params }) {
    response.count = await task.delLock(params.lock);
  }
};

exports.ResqueDelayedJobs = class ResqueDelayedJobs extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:delayedjobs";
    this.description = "I return paginated lists of delayedjobs";
    this.inputs = {
      offset: {
        required: true,
        formatter: parseInt,
        default: 0,
      },
      limit: {
        required: true,
        formatter: parseInt,
        default: 100,
      },
    };
  }

  async run({ response, params }) {
    const timestamps = [];
    const delayedjobs = {};

    response.timestampsCount = 0;
    const allTimestamps = await task.timestamps();
    if (allTimestamps.length === 0) {
      return;
    }

    response.total = allTimestamps.length;

    for (let i = 0; i < allTimestamps.length; i++) {
      if (i >= params.offset && i <= params.offset + params.limit - 1) {
        timestamps.push(allTimestamps[i]);
      }
    }

    for (const j in timestamps) {
      const timestamp = timestamps[j];
      delayedjobs[timestamp] = await task.delayedAt(timestamp);
    }

    response.delayedjobs = delayedjobs;
  }
};

exports.ResqueDelDelayed = class ResqueDelDelayed extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:delDelayed";
    this.description = "I delete a delayed job";
    this.inputs = {
      timestamp: {
        required: true,
        formatter: parseInt,
      },
      count: {
        required: true,
        formatter: parseInt,
      },
    };
  }

  async run({ params, response }) {
    const delayed = await task.delayedAt(params.timestamp);
    if (delayed.tasks.length === 0 || !delayed.tasks[params.count]) {
      throw new Error("delayed job not found");
    }

    const job = delayed.tasks[params.count];
    response.timestamps = await task.delDelayed(
      job.queue,
      job.class,
      job.args[0]
    );
  }
};

exports.ResqueRunDelayed = class ResqueRunDelayed extends ResqueAction {
  constructor() {
    super();
    this.name = "resque:runDelayed";
    this.description = "I run a delayed job now";
    this.inputs = {
      timestamp: {
        required: true,
        formatter: parseInt,
      },
      count: {
        required: true,
        formatter: parseInt,
      },
    };
  }

  async run({ params }) {
    const delayed = await task.delayedAt(params.timestamp);
    if (delayed.tasks.length === 0 || !delayed.tasks[params.count]) {
      throw new Error("delayed job not found");
    }

    const job = delayed.tasks[params.count];
    await task.delDelayed(job.queue, job.class, job.args[0]);
    await task.enqueue(job.class, job.args[0], job.queue);
  }
};
