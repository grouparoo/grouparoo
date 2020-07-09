// const fetch = require("isomorphic-fetch");
import { Initializer, api } from "actionhero";
import { plugin } from "../modules/plugin";
import { Setting } from "../models/Setting";
import * as UUID from "uuid";
import os from "os";
import PluginDetails from "./../utils/pluginDetails";
const pluginManifest = PluginDetails.getPluginManifest();

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
  ProfilePropertyRule,
  Run,
  Team,
  TeamMember,
} from "../index";

interface TelemetryMetric {
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
declare module "actionhero" {
  export interface Api {
    telemetry: {
      build: () => Promise<{
        guid: string;
        name: string;
        license: string;
        metrics: TelemetryMetric[];
      }>;
    };
  }
}

export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = "telemetry";
  }

  async initialize() {
    api.telemetry = {
      build: async () => {
        const metrics: TelemetryMetric[] = [];

        // load settings
        const clusterNameSetting = await Setting.findOne({
          where: { pluginName: "core", key: "cluster-name" },
        });
        const clusterGuidSetting = await Setting.findOne({
          where: { pluginName: "telemetry", key: "customer-guid" },
        });
        const clusterLicenseSetting = await Setting.findOne({
          where: { pluginName: "telemetry", key: "customer-license" },
        });

        // information about how Grouparoo is being operated
        metrics.push({
          collection: "cluster",
          topic: "workers",
          aggregation: "count",
          count: Object.keys(await api.resque.queue.workers()).length,
        });
        metrics.push({
          collection: "cluster",
          topic: "os",
          aggregation: "exact",
          value: `${process.platform}/${os.release()}`,
        });

        // versions of the plugins installed
        pluginManifest.plugins.forEach((plugin) => {
          metrics.push({
            collection: "cluster",
            topic: plugin.name,
            aggregation: "exact",
            key: "version",
            value: plugin.version,
          });
        });

        // usage counts
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
          ProfilePropertyRule,
          Run,
          Team,
          TeamMember,
        ];
        for (const i in Models) {
          metrics.push({
            collection: "totals",
            topic: Models[i].name,
            aggregation: "count",
            count: await Models[i].count(),
          });
        }

        // usage by source
        const sources = await Source.findAll();
        for (const i in sources) {
          const source = sources[i];
          const schedule = await source.$get("schedule");
          const { plugin } = await source.getPlugin();
          metrics.push({
            collection: "sourceTotals",
            topic: plugin.name,
            aggregation: "count",
            // imports: 0, // TODO?
            // exports: 0,
            runs: schedule
              ? await Run.count({ where: { creatorGuid: schedule.guid } })
              : 0,
          });
        }

        // usage by destination
        const destinations = await Destination.findAll();
        for (const i in destinations) {
          const destination = destinations[i];
          const { plugin } = await destination.getPlugin();
          metrics.push({
            collection: "destinationTotals",
            topic: plugin.name,
            aggregation: "count",
            // imports: 0, // TODO?
            exports: await Export.count({
              where: { destinationGuid: destination.guid },
            }),
            runs: await Run.count({ where: { creatorGuid: destination.guid } }), // TODO: the group is actually the run owner
          });
        }

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

        return {
          name: clusterNameSetting.value,
          guid: clusterGuidSetting.value,
          license: clusterLicenseSetting.value,
          metrics: mergedMetrics,
        };
      },
    };
  }

  async start() {
    await plugin.registerSetting(
      "telemetry",
      "customer-guid",
      `tcs_${UUID.v4()}`,
      "A unique, anonymous ID for this Grouparoo cluster."
    );

    await plugin.registerSetting(
      "telemetry",
      "customer-license",
      "",
      "Your Grouparoo License Key (for paid features)."
    );
  }
}
