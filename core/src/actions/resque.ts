import os from "os";
import { ErrorPayload } from "node-resque";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import {
  api,
  task,
  chatRoom,
  ActionheroLogLevel,
  ParamsFrom,
} from "actionhero";
import { CLS } from "../modules/cls";
import { StatusReporters } from "../modules/statusReporters";
import { Status } from "../modules/status";
import { APIData } from "../modules/apiData";
import { ActionPermission } from "../models/Permission";

// Helper Classes for Permissions

abstract class ResqueActionWrite extends AuthenticatedAction {
  permission: ActionPermission = { topic: "resque", mode: "write" };
  logLevel: ActionheroLogLevel = "debug";
  toDocument = false;

  isWriteTransaction() {
    // because it doesn't use the database
    return false;
  }

  async calculateResqueMetrics() {
    const resqueStatusReporters = [
      async () => await StatusReporters.Cluster.Workers.countWorkers(),
      async () => await StatusReporters.Cluster.Workers.countErrors(),
      async () => await StatusReporters.Cluster.Workers.details(),
    ];

    for (const method of resqueStatusReporters) {
      const response = await method();
      const metrics = await Status.set(response);
      await chatRoom.broadcast({}, "system:status", {
        metrics,
      });
    }
  }
}

abstract class ResqueActionRead extends AuthenticatedAction {
  permission: ActionPermission = { topic: "resque", mode: "read" };
  logLevel: ActionheroLogLevel = "debug";
  toDocument = false;
}

export class ResqueRedisInfo extends ResqueActionRead {
  name = "resque:redisInfo";
  description = "I return the results of redis info";

  async runWithinTransaction() {
    const redisInfo = await api.resque.queue.connection.redis.info();
    if (redisInfo) {
      return { redisInfo: redisInfo.split(os.EOL) };
    }
  }
}

export class ResqueResqueDetails extends ResqueActionRead {
  name = "resque:resqueDetails";
  description = "I return the results of api.tasks.details";

  async runWithinTransaction() {
    const resqueDetails = await task.details();
    const failedCount = await task.failedCount();

    return { resqueDetails, failedCount };
  }
}

export class ResqueLoadWorkerQueues extends ResqueActionRead {
  name = "resque:loadWorkerQueues";
  description = "I return the results of api.tasks.workers";

  async runWithinTransaction() {
    return { workerQueues: await task.workers() };
  }
}

export class ResqueForceCleanWorker extends ResqueActionWrite {
  name = "resque:forceCleanWorker";
  description = "I remove a worker from resque";
  inputs = {
    workerName: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ResqueForceCleanWorker>;
  }) {
    const generatedErrorPayload: ErrorPayload =
      await api.resque.queue.forceCleanWorker(params.workerName);
    await this.calculateResqueMetrics();
    return { generatedErrorPayload };
  }
}

export class ResqueFailedCount extends ResqueActionRead {
  name = "resque:resqueFailedCount";
  description = "I return a count of failed jobs";

  async runWithinTransaction() {
    return { failedCount: await task.failedCount() };
  }
}

export class ResqueQueued extends ResqueActionRead {
  name = "resque:queued";
  description = "I list enqueued jobs";
  inputs = {
    queue: {
      required: true,
    },
    offset: {
      required: true,
      formatter: APIData.ensureNumber,
      default: 0,
    },
    limit: {
      required: true,
      formatter: APIData.ensureNumber,
      default: 100,
    },
  } as const;

  async runWithinTransaction({ params }: { params: ParamsFrom<ResqueQueued> }) {
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
  name = "resque:delQueue";
  description = "I delete a queue";
  inputs = {
    queue: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ResqueDelQueue>;
  }) {
    return { deleted: await task.delQueue(params.queue) };
  }
}

export class ResqueResqueFailed extends ResqueActionRead {
  name = "resque:resqueFailed";
  description = "I return failed jobs";
  inputs = {
    offset: {
      required: true,
      formatter: APIData.ensureNumber,
      default: 0,
    },
    limit: {
      required: true,
      formatter: APIData.ensureNumber,
      default: 100,
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ResqueResqueFailed>;
  }) {
    const failed = await task.failed(
      params.offset,
      params.offset + params.limit - 1
    );

    const total = await task.failedCount();

    return { total, failed };
  }
}

export class ResqueRemoveFailed extends ResqueActionWrite {
  name = "resque:removeFailed";
  description = "I remove a failed job";
  inputs = {
    id: {
      required: true,
      formatter: APIData.ensureNumber,
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ResqueRemoveFailed>;
  }) {
    const failed = await task.failed(params.id, params.id);
    if (!failed) throw Error("failed job not found");
    await task.removeFailed(failed[0]);
    await this.calculateResqueMetrics();
  }
}

export class ResqueRemoveAllFailed extends ResqueActionWrite {
  name = "resque:removeAllFailed";
  description = "I remove all failed jobs";

  async runWithinTransaction(): Promise<void> {
    const failed = await task.failed(0, 0);
    if (failed && failed.length > 0) {
      const failedJob = failed[0];
      await task.removeFailed(failedJob);
      return this.runWithinTransaction();
    }
    await this.calculateResqueMetrics();
  }
}

export class ResqueRetryAndRemoveFailed extends ResqueActionWrite {
  name = "resque:retryAndRemoveFailed";
  description = "I retry a failed job";
  inputs = {
    id: {
      required: true,
      formatter: APIData.ensureNumber,
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ResqueRetryAndRemoveFailed>;
  }) {
    const failed = await task.failed(params.id, params.id);
    if (!failed) throw new Error("failed job not found");
    await task.retryAndRemoveFailed(failed[0]);
    await this.calculateResqueMetrics();
  }
}

export class ResqueRetryAndRemoveAllFailed extends ResqueActionWrite {
  name = "resque:retryAndRemoveAllFailed";
  description = "I retry all failed jobs";

  async runWithinTransaction(): Promise<void> {
    const failed = await task.failed(0, 0);
    if (failed && failed.length > 0) {
      const failedJob = failed[0];
      await task.retryAndRemoveFailed(failedJob);
      return this.runWithinTransaction();
    }
    await this.calculateResqueMetrics();
  }
}

export class ResqueLocks extends ResqueActionRead {
  name = "resque:locks";
  description = "I return all locks";

  async runWithinTransaction() {
    return { locks: await task.locks() };
  }
}

export class ResqueDelLock extends ResqueActionWrite {
  name = "resque:delLock";
  description = "I delete a lock";
  inputs = {
    lock: { required: true },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ResqueDelLock>;
  }) {
    return { count: await task.delLock(params.lock) };
  }
}

export class ResqueDelayedJobs extends ResqueActionRead {
  name = "resque:delayedjobs";
  description = "I return paginated lists of delayedjobs";
  inputs = {
    offset: {
      required: true,
      formatter: APIData.ensureNumber,
      default: 0,
    },
    limit: {
      required: true,
      formatter: APIData.ensureNumber,
      default: 100,
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ResqueDelayedJobs>;
  }) {
    const timestamps = [];
    const delayedjobs: Record<number, any> = {};

    const allTimestamps = await task.timestamps();
    if (allTimestamps.length === 0) {
      return;
    }

    for (let i = 0; i < allTimestamps.length; i++) {
      if (i >= params.offset && i <= params.offset + params.limit - 1) {
        timestamps.push(allTimestamps[i]);
      }
    }

    for (const timestamp of timestamps) {
      delayedjobs[timestamp] = await task.delayedAt(timestamp);
    }

    return { delayedjobs, timestampsCount: 0, total: allTimestamps.length };
  }
}

export class ResqueDelDelayed extends ResqueActionWrite {
  name = "resque:delDelayed";
  description = "I delete a delayed job";
  inputs = {
    timestamp: {
      required: true,
      formatter: APIData.ensureNumber,
    },
    count: {
      required: true,
      formatter: APIData.ensureNumber,
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ResqueDelDelayed>;
  }) {
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
  name = "resque:runDelayed";
  description = "I run a delayed job now";
  inputs = {
    timestamp: {
      required: true,
      formatter: APIData.ensureNumber,
    },
    count: {
      required: true,
      formatter: APIData.ensureNumber,
    },
  } as const;

  async runWithinTransaction({
    params,
  }: {
    params: ParamsFrom<ResqueRunDelayed>;
  }) {
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
