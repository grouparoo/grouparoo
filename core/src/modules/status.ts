import { api, config, chatRoom } from "actionhero";
import { Group } from "../models/Group";
import { Profile } from "../models/Profile";
import {
  StatusReporters,
  StatusMetric,
  FinalSummaryReporters,
} from "./statusReporters";

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
    metrics.push(await StatusReporters.Cluster.Workers.details());
    metrics.push(await StatusReporters.Cluster.OS.exact());
    metrics.push(await StatusReporters.Cluster.NODE_ENV.exact());
    metrics.push(await StatusReporters.Cluster.NOTIFICATIONS.unread());

    // usage counts (we only care about some of the models)
    metrics.push(...(await StatusReporters.Totals.Models([Profile, Group])));

    // thing in progress
    metrics.push(await StatusReporters.Pending.pendingImports());
    metrics.push(...(await StatusReporters.Pending.pendingImportsBySource()));
    metrics.push(await StatusReporters.Pending.pendingExports());
    metrics.push(
      ...(await StatusReporters.Pending.pendingExportsByDestination())
    );
    metrics.push(await StatusReporters.Pending.pendingProfiles());
    metrics.push(...(await StatusReporters.Pending.pendingRuns()));

    // additional things
    metrics.push(...(await StatusReporters.Groups.byNewestMember()));
    metrics.push(...(await StatusReporters.Sources.nextRuns()));

    const { timestamp } = await set(metrics);

    await chatRoom.broadcast({}, "system:status", {
      timestamp,
      metrics,
    });

    return metrics;
  }

  export async function get(limit = maxSamples) {
    const redis = getRedis();
    const keyMatch = `${cachePrefix}*`;
    const keys = await redis.keys(keyMatch);
    if (keys.length === 0) return [];

    const values = (await redis.mget(keys))
      .slice(0, limit)
      .map((v) => {
        let parsed: StatusObject;
        try {
          parsed = JSON.parse(v);
        } catch {}
        return parsed;
      })
      .filter((v) => v && v.timestamp)
      .sort((a, b) => {
        return b.timestamp - a.timestamp;
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

    return status;
  }

  function getRedis() {
    return api.redis.clients.client;
  }
}

export namespace FinalSummary {
  export type FinalSummaryLogArray = Array<
    | FinalSummaryReporters.Sources.SourceData[]
    | FinalSummaryReporters.Profiles.ProfileData[]
    | FinalSummaryReporters.Destinations.DestinationData[]
  >;

  export async function getFinalSummary() {
    const finalSummaryLogs: FinalSummaryLogArray = [];

    finalSummaryLogs.push(await FinalSummaryReporters.Profiles.getData());
    finalSummaryLogs.push(await FinalSummaryReporters.Sources.getData());
    finalSummaryLogs.push(await FinalSummaryReporters.Destinations.getData());

    return finalSummaryLogs;
  }
}
