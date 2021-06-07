import { api, config, chatRoom } from "actionhero";
import { Group } from "../models/Group";
import { Profile } from "../models/Profile";
import {
  StatusReporters,
  StatusMetric,
  FinalSummaryReporters,
} from "./statusReporters";

export namespace Status {
  export const maxSamples = 1000;
  export const sampleFrequencyMS = 1000 * 5;
  export const cachePrefix = `${config.general.cachePrefix}status:samples:`;

  export interface StatusObject {
    timestamp: number;
    metrics: StatusMetric[];
  }

  export const statusSampleReporters = [
    // information about how Grouparoo is being operated
    async () => StatusReporters.Cluster.Workers.countWorkers(),
    async () => StatusReporters.Cluster.Workers.countErrors(),
    async () => StatusReporters.Cluster.Workers.details(),
    async () => StatusReporters.Cluster.OS.exact(),
    async () => StatusReporters.Cluster.NODE_ENV.exact(),
    async () => StatusReporters.Cluster.NOTIFICATIONS.unread(),

    // usage counts (we only care about some of the models)
    async () => StatusReporters.Totals.Models([Profile, Group]),

    // thing in progress
    async () => StatusReporters.Pending.pendingImports(),
    async () => StatusReporters.Pending.pendingImportsBySource(),
    async () => StatusReporters.Pending.pendingExports(),
    async () => StatusReporters.Pending.pendingExportsByDestination(),
    async () => StatusReporters.Pending.pendingProfiles(),
    async () => StatusReporters.Pending.pendingRuns(),

    // additional things
    async () => StatusReporters.Groups.byNewestMember(),
    async () => StatusReporters.Sources.nextRuns(),
  ];

  export type StatusGetResponse = {
    [topic: string]: {
      [collection: string]: { timestamp: number; metrics: StatusMetric[] }[];
    };
  };

  export async function get(limit = maxSamples) {
    const redis = getRedis();
    const keyMatch = `${cachePrefix}*`;
    const keys = await redis.keys(keyMatch);
    if (keys.length === 0) return {};

    const samples = (await redis.mget(keys))
      .slice(0, limit)
      .map((v) => {
        let parsed: StatusObject;
        try {
          parsed = JSON.parse(v);
        } catch {}
        return parsed;
      })
      .filter((v) => v && v.timestamp);

    const response: StatusGetResponse = {};

    samples.forEach((sample) => {
      sample.metrics.forEach((metric) => {
        if (!response[metric.topic]) response[metric.topic] = {};
        if (!response[metric.topic][metric.collection])
          response[metric.topic][metric.collection] = [];

        const existingSample = response[metric.topic][metric.collection].find(
          (s) => s.timestamp === sample.timestamp
        );

        if (existingSample) {
          existingSample.metrics.push(metric);
        } else {
          response[metric.topic][metric.collection].push({
            timestamp: sample.timestamp,
            metrics: [metric],
          });
        }

        response[metric.topic][metric.collection].sort(
          (a, b) => a.timestamp - b.timestamp
        );
      });
    });

    return response;
  }

  export async function set(
    metrics: StatusMetric | StatusMetric[],
    ttl = Math.ceil((sampleFrequencyMS / 1000) * maxSamples * 2)
  ) {
    if (!Array.isArray(metrics)) metrics = [metrics];
    const now = new Date();
    const status: StatusObject = {
      timestamp: now.getTime(),
      metrics,
    };

    const redis = getRedis();
    const key = `${cachePrefix}${now.getTime()}:${metrics
      .map((m) => `${m.collection}-${m.aggregation}`)
      .join(":")}`;
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
