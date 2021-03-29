import os from "os";
import { ErrorPayload } from "node-resque";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { api, task } from "actionhero";
import { CLS } from "../modules/cls";

// Helper Classes for Permissions

abstract class ResqueActionWrite extends AuthenticatedAction {
  constructor() {
    super();
    this.permission = { topic: "resque", mode: "write" };
    this.logLevel = "debug";
    this.toDocument = false;
  }

  isWriteTransaction() {
    // because it doesn't use the database
    return false;
  }
}

abstract class ResqueActionRead extends AuthenticatedAction {
  constructor() {
    super();
    this.permission = { topic: "resque", mode: "read" };
    this.logLevel = "debug";
    this.toDocument = false;
  }
}

export class ResqueRedisInfo extends ResqueActionRead {
  constructor() {
    super();
    this.name = "resque:redisInfo";
    this.description = "I return the results of redis info";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const redisInfo = await api.resque.queue.connection.redis.info();
    if (redisInfo) {
      return { redisInfo: redisInfo.split(os.EOL) };
    }
  }
}

export class ResqueResqueDetails extends ResqueActionRead {
  constructor() {
    super();
    this.name = "resque:resqueDetails";
    this.description = "I return the results of api.tasks.details";
    this.inputs = {};
  }

  async runWithinTransaction() {
    return { resqueDetails: await task.details() };
  }
}

export class ResqueLoadWorkerQueues extends ResqueActionRead {
  constructor() {
    super();
    this.name = "resque:loadWorkerQueues";
    this.description = "I return the results of api.tasks.workers";
    this.inputs = {};
  }

  async runWithinTransaction() {
    return { workerQueues: await task.workers() };
  }
}

export class ResqueForceCleanWorker extends ResqueActionWrite {
  constructor() {
    super();
    this.name = "resque:forceCleanWorker";
    this.description = "I remove a worker from resque";
    this.inputs = {
      workerName: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const generatedErrorPayload: ErrorPayload = await api.resque.queue.forceCleanWorker(
      params.workerName
    );
    return { generatedErrorPayload };
  }
}

export class ResqueFailedCount extends ResqueActionRead {
  constructor() {
    super();
    this.name = "resque:resqueFailedCount";
    this.description = "I return a count of failed jobs";
    this.inputs = {};
  }

  async runWithinTransaction() {
    return { failedCount: await task.failedCount() };
  }
}

export class ResqueQueued extends ResqueActionRead {
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

  async runWithinTransaction({ params }) {
    const queueLength = await api.resque.queue.length(params.queue);
    const jobs = await task.queued(
      params.queue,
      params.offset,
      params.offset + params.limit - 1
    );

    return { queueLength, jobs };
  }
}

export class ResqueDelQueue extends ResqueActionWrite {
  constructor() {
    super();
    this.name = "resque:delQueue";
    this.description = "I delete a queue";
    this.inputs = {
      queue: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    return { deleted: await task.delQueue(params.queue) };
  }
}

export class ResqueResqueFailed extends ResqueActionRead {
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

  async runWithinTransaction({ params }) {
    const failed = await task.failed(
      params.offset,
      params.offset + params.limit - 1
    );

    const total = await task.failedCount();

    return { total, failed };
  }
}

export class ResqueRemoveFailed extends ResqueActionWrite {
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

  async runWithinTransaction({ params }) {
    const failed = await task.failed(params.id, params.id);
    if (!failed) throw Error("failed job not found");
    await task.removeFailed(failed[0]);
  }
}

export class ResqueRemoveAllFailed extends ResqueActionWrite {
  constructor() {
    super();
    this.name = "resque:removeAllFailed";
    this.description = "I remove all failed jobs";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const failed = await task.failed(0, 0);
    if (failed && failed.length > 0) {
      const failedJob = failed[0];
      await task.removeFailed(failedJob);
      return this.runWithinTransaction();
    }
  }
}

export class ResqueRetryAndRemoveFailed extends ResqueActionWrite {
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

  async runWithinTransaction({ params }) {
    const failed = await task.failed(params.id, params.id);
    if (!failed) throw new Error("failed job not found");
    await task.retryAndRemoveFailed(failed[0]);
  }
}

export class ResqueRetryAndRemoveAllFailed extends ResqueActionWrite {
  constructor() {
    super();
    this.name = "resque:retryAndRemoveAllFailed";
    this.description = "I retry all failed jobs";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const failed = await task.failed(0, 0);
    if (failed && failed.length > 0) {
      const failedJob = failed[0];
      await task.retryAndRemoveFailed(failedJob);
      return this.runWithinTransaction();
    }
  }
}

export class ResqueLocks extends ResqueActionRead {
  constructor() {
    super();
    this.name = "resque:locks";
    this.description = "I return all locks";
    this.inputs = {};
  }

  async runWithinTransaction() {
    return { locks: await task.locks() };
  }
}

export class ResqueDelLock extends ResqueActionWrite {
  constructor() {
    super();
    this.name = "resque:delLock";
    this.description = "I delete a lock";
    this.inputs = {
      lock: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    return { count: await task.delLock(params.lock) };
  }
}

export class ResqueDelayedJobs extends ResqueActionRead {
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

  async runWithinTransaction({ params }) {
    const timestamps = [];
    const delayedjobs = {};

    const allTimestamps = await task.timestamps();
    if (allTimestamps.length === 0) {
      return;
    }

    for (let i = 0; i < allTimestamps.length; i++) {
      if (i >= params.offset && i <= params.offset + params.limit - 1) {
        timestamps.push(allTimestamps[i]);
      }
    }

    for (const j in timestamps) {
      const timestamp = timestamps[j];
      delayedjobs[timestamp] = await task.delayedAt(timestamp);
    }

    return { delayedjobs, timestampsCount: 0, total: allTimestamps.length };
  }
}

export class ResqueDelDelayed extends ResqueActionWrite {
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

  async runWithinTransaction({ params }) {
    const delayed = await task.delayedAt(params.timestamp);
    if (delayed.tasks.length === 0 || !delayed.tasks[params.count]) {
      throw new Error("delayed job not found");
    }

    const job = delayed.tasks[params.count];
    return {
      timestamps: await task.delDelayed(job.queue, job.class, job.args[0]),
    };
  }
}

export class ResqueRunDelayed extends ResqueActionWrite {
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

  async runWithinTransaction({ params }) {
    const delayed = await task.delayedAt(params.timestamp);
    if (delayed.tasks.length === 0 || !delayed.tasks[params.count]) {
      throw new Error("delayed job not found");
    }

    const job = delayed.tasks[params.count];
    await task.delDelayed(job.queue, job.class, job.args[0]);
    await CLS.enqueueTask(job.class, job.args[0], job.queue);

    return { success: true };
  }
}
