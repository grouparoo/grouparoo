import { api, config, chatRoom } from "actionhero";
import { Group } from "../models/Group";
import { GrouparooRecord } from "../models/GrouparooRecord";
import {
  StatusReporters,
  StatusMetric,
  FinalSummaryReporters,
} from "./statusReporters";
import * as uuid from "uuid";

export namespace Status {
  export const maxSamples = 50;
  export const sampleFrequencyMS = 1000 * 5;
  export const cachePrefix = `${config.general.cachePrefix}status:samples:`;

  export interface StatusObject {
    timestamp: number;
    metric: StatusMetric;
  }

  export type StatusGetResponse = Record<
    string,
    Record<string, StatusObject[]>
  >;

  export const statusSampleReporters = [
    // information about how Grouparoo is being operated
    async () => StatusReporters.Cluster.Workers.countWorkers(),
    async () => StatusReporters.Cluster.Workers.countErrors(),
    async () => StatusReporters.Cluster.Workers.details(),
    async () => StatusReporters.Cluster.Process.platform(),
    async () => StatusReporters.Cluster.Process.env(),
    async () => StatusReporters.Cluster.Notifications.unread(),

    // usage counts (we only care about some of the models)
    async () => StatusReporters.Totals.Models([GrouparooRecord, Group]),
    async () => StatusReporters.Totals.UniqueRecordsExported(),

    // thing in progress
    async () => StatusReporters.Pending.pendingImports(),
    async () => StatusReporters.Pending.pendingImportsBySource(),
    async () => StatusReporters.Pending.pendingExports(),
    async () => StatusReporters.Pending.pendingExportsByDestination(),
    async () => StatusReporters.Pending.pendingRecords(),
    async () => StatusReporters.Pending.pendingRuns(),

    //things waiting to be deleted
    async () => StatusReporters.Deleted.deletedDestinations(),
    async () => StatusReporters.Deleted.deletedGroups(),
    async () => StatusReporters.Deleted.deletedProperties(),
    async () => StatusReporters.Deleted.deletedSources(),
    async () => StatusReporters.Deleted.deletedRecords(),
    async () => StatusReporters.Deleted.deletedModels(),

    // additional things
    async () => StatusReporters.Groups.byNewestMember(),
    async () => StatusReporters.Sources.nextRuns(),
  ];

  export async function get(limit = maxSamples) {
    const redis = getRedis();
    const keyMatch = `${cachePrefix}*`;
    const keys = await redis.keys(keyMatch);
    if (keys.length === 0) return {};

    const samples = (await redis.mget(keys))
      .map((v) => {
        let parsed: StatusObject;
        try {
          parsed = JSON.parse(v);
        } catch {
          // Ignore error
        }
        return parsed;
      })
      .filter(
        (sample) =>
          sample &&
          sample.timestamp &&
          sample.metric &&
          sample.metric.topic &&
          sample.metric.collection
      );

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
        .slice(0, limit)
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

  export async function setAll() {
    for (const method of statusSampleReporters) {
      const response = await method();
      const metrics = await Status.set(response);
      await chatRoom.broadcast({}, "system:status", { metrics });
    }
  }

  function getRedis() {
    return api.redis.clients.client;
  }

  export async function getCurrent() {
    return Status.get(1); // 1 => current sample
  }
}

export namespace FinalSummary {
  export type FinalSummaryLogArray = (
    | FinalSummaryReporters.Sources.SourceData[]
    | FinalSummaryReporters.GrouparooRecords.RecordData[]
    | FinalSummaryReporters.Destinations.DestinationData[]
    | FinalSummaryReporters.Warnings.WarningData[]
  )[];

  export async function getFinalSummary() {
    const finalSummaryLogs: FinalSummaryLogArray = [];

    finalSummaryLogs.push(
      await FinalSummaryReporters.GrouparooRecords.getData()
    );
    finalSummaryLogs.push(await FinalSummaryReporters.Sources.getData());
    finalSummaryLogs.push(await FinalSummaryReporters.Destinations.getData());
    finalSummaryLogs.push(await FinalSummaryReporters.Warnings.getWarnings());

    return finalSummaryLogs;
  }
}
