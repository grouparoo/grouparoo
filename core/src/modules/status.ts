import { api, config, chatRoom } from "actionhero";
import { Group } from "../models/Group";
import { Profile } from "../models/Profile";
import {
  StatusReporters,
  StatusMetric,
  FinalSummaryReporters,
} from "./statusReporters";
import * as uuid from "uuid";

export namespace Status {
  export const maxSamples = 500;
  export const sampleFrequencyMS = 1000 * 5;
  export const cachePrefix = `${config.general.cachePrefix}status:samples:`;

  export interface StatusObject {
    timestamp: number;
    metric: StatusMetric;
  }

  export type StatusGetResponse = {
    [topic: string]: {
      [collection: string]: StatusObject[];
    };
  };

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

  export async function get() {
    const redis = getRedis();
    const keyMatch = `${cachePrefix}*`;
    const keys = await redis.keys(keyMatch);
    if (keys.length === 0) return {};

    const samples = (await redis.mget(keys))
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
      if (!response[sample.metric.topic]) response[sample.metric.topic] = {};
      if (!response[sample.metric.topic][sample.metric.collection])
        response[sample.metric.topic][sample.metric.collection] = [];

      response[sample.metric.topic][sample.metric.collection].push(sample);

      response[sample.metric.topic][sample.metric.collection] = response[
        sample.metric.topic
      ][sample.metric.collection]
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, maxSamples)
        .sort((a, b) => a.timestamp - b.timestamp);
    });

    return response;
  }

  export async function set(
    metrics: StatusMetric | StatusMetric[],
    ttl = Math.ceil((sampleFrequencyMS / 1000) * maxSamples * 2)
  ) {
    if (!Array.isArray(metrics)) metrics = [metrics];

    const setMetrics: StatusObject[] = [];
    const now = new Date();
    const redis = getRedis();

    for (const metric of metrics) {
      const status: StatusObject = {
        timestamp: now.getTime(),
        metric,
      };
      const key = `${cachePrefix}${now.getTime()}:${metric.topic}:${
        metric.collection
      }:${uuid.v4()}`;
      await redis.set(key, JSON.stringify(status));
      await redis.expire(key, ttl);
      setMetrics.push(status);
    }

    return setMetrics;
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
