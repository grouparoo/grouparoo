import { api, config, chatRoom } from "actionhero";
import { StatusReporters, StatusMetric } from "./statusReporters";

export namespace Status {
  export const maxSamples = 100;
  export const sampleFrequencyMS = 1000 * 5;
  export const cachePrefix = `${config.general.cachePrefix}status:samples:`;

  export interface StatusObject {
    timestamp: number;
    metrics: StatusMetric[];
  }

  export async function sample() {
    const metrics: StatusMetric[] = [];

    // information about how Grouparoo is being operated
    metrics.push(await StatusReporters.Cluster.Workers.countWorkers());
    metrics.push(await StatusReporters.Cluster.Workers.countErrors());
    metrics.push(await StatusReporters.Cluster.Workers.leader());
    metrics.push(await StatusReporters.Cluster.OS.exact());
    metrics.push(await StatusReporters.Cluster.NODE_ENV.exact());

    // usage counts
    metrics.push(...(await StatusReporters.Totals.Models()));

    // thing in progress
    metrics.push(await StatusReporters.Pending.pendingImports());
    metrics.push(await StatusReporters.Pending.pendingExports());
    metrics.push(await StatusReporters.Pending.pendingProfiles());
    metrics.push(...(await StatusReporters.Pending.pendingRuns()));

    await set(metrics);
    await chatRoom.broadcast({}, "system:status", { metrics });

    return metrics;
  }

  export async function get(limit = maxSamples) {
    const redis = getRedis();
    const keyMatch = `${cachePrefix}*`;
    const keys = await redis.keys(keyMatch);
    const values = (await redis.mget(keys))
      .slice(0, limit)
      .map((v) => JSON.parse(v) as StatusObject)
      .sort((a, b) => {
        return a.timestamp - b.timestamp;
      });

    return values;
  }

  export async function set(
    metrics: StatusMetric[],
    ttl = Math.ceil((sampleFrequencyMS / 1000) * maxSamples * 2)
  ) {
    const now = new Date();
    const status: StatusObject = {
      timestamp: now.getTime(),
      metrics,
    };

    const redis = getRedis();
    const key = `${cachePrefix}${now.getTime()}`;
    await redis.set(key, JSON.stringify(status));
    await redis.expire(key, ttl);
  }

  function getRedis() {
    return api.redis.clients.client;
  }
}
