import os from "os";
import { api, env } from "actionhero";
import PluginDetails from "./../utils/pluginDetails";
import {
  App,
  ApiKey,
  Source,
  Schedule,
  Destination,
  Import,
  File,
  Group,
  GroupRule,
  Export,
  Event,
  Profile,
  ProfileProperty,
  Property,
  Run,
  Team,
  TeamMember,
} from "../index";

export interface TelemetryMetric {
  // the possible attributes for a metric are:
  // { collection, topic, aggregation, key, value, count, min, max, avg, imports, exports, runs, errors }
  collection: string;
  topic: string;
  aggregation: string;
  key?: string;
  value?: string;
  count?: number;
  min?: number;
  max?: number;
  avg?: number;
  imports?: number;
  exports?: number;
  runs?: number;
  errors?: number;
}

export namespace TelemetryReporters {
  export namespace Cluster {
    export namespace Workers {
      export async function countWorkers() {
        return {
          collection: "cluster",
          topic: "workers",
          aggregation: "count",
          count: Object.keys(await api.resque.queue.workers()).length,
        };
      }
    }

    export namespace OS {
      export async function exact() {
        return {
          collection: "cluster",
          topic: "os",
          aggregation: "exact",
          value: `${process.platform}/${os.release()}`,
        };
      }
    }

    export namespace NODE_ENV {
      export async function exact() {
        return {
          collection: "cluster",
          topic: "node_env",
          aggregation: "exact",
          value: env,
        };
      }
    }
  }

  export namespace Plugins {
    export async function Versions() {
      const metrics: TelemetryMetric[] = [];
      const pluginManifest = PluginDetails.getPluginManifest();
      pluginManifest.plugins.forEach((plugin) => {
        metrics.push({
          collection: "cluster",
          topic: plugin.name,
          aggregation: "exact",
          key: "version",
          value: plugin.version,
        });
      });

      return mergeMetrics(metrics);
    }
  }

  export namespace Totals {
    export async function Models() {
      const metrics: TelemetryMetric[] = [];

      const Models = [
        App,
        ApiKey,
        Source,
        Schedule,
        Destination,
        Import,
        File,
        Group,
        GroupRule,
        Export,
        Event,
        Profile,
        ProfileProperty,
        Property,
        Run,
        Team,
        TeamMember,
      ];
      for (const i in Models) {
        //@ts-ignore
        const model: typeof App = Models[i]; // pick one of the Models so that the types are the same.  TODO: make this better
        metrics.push({
          collection: "totals",
          topic: model.name,
          aggregation: "count",
          count: await model.count(),
        });
      }

      return mergeMetrics(metrics);
    }

    export async function SourceTotals() {
      const metrics: TelemetryMetric[] = [];
      const sources = await Source.findAll();
      for (const i in sources) {
        const source = sources[i];
        const schedule = await source.$get("schedule");
        const { plugin } = await source.getPlugin();
        metrics.push({
          collection: "sourceTotals",
          topic: plugin.name,
          aggregation: "count",
          imports: schedule
            ? await Import.count({
                include: [{ model: Run, where: { creatorId: schedule.id } }],
              })
            : 0,
          runs: schedule
            ? await Run.count({ where: { creatorId: schedule.id } })
            : 0,
        });
      }

      return mergeMetrics(metrics);
    }

    export async function DestinationTotals() {
      const metrics: TelemetryMetric[] = [];

      const destinations = await Destination.findAll();
      for (const i in destinations) {
        const destination = destinations[i];
        const { plugin } = await destination.getPlugin();
        metrics.push({
          collection: "destinationTotals",
          topic: plugin.name,
          aggregation: "count",
          exports: await Export.count({
            where: { destinationId: destination.id },
          }),
        });
      }

      return mergeMetrics(metrics);
    }
  }
}

/*
 * Merge the counts from metrics with matching collections, topics, and aggregations.
 * This is useful for when you have 2 sources using the same app, and you want to report on the app's totals
 */
function mergeMetrics(metrics: TelemetryMetric[]) {
  var mergedMetrics = [];
  metrics.forEach((item, idx) => {
    const found = mergedMetrics.some((el, i) => {
      if (i === idx) return false;
      return (
        el.collection === item.collection &&
        el.topic === item.topic &&
        el.aggregation === item.aggregation
      );
    });
    if (!found) {
      mergedMetrics.push(item);
    } else if (idx !== null) {
      for (const k in Object.keys(item)) {
        if (item.hasOwnProperty(k)) {
          mergedMetrics[idx].count = +item.count;
        }
      }
    }
  });

  return mergedMetrics;
}
