import os from "os";
import { api, config, task } from "actionhero";
import Moment from "moment";
import { getCoreVersion, getPluginManifest } from "../modules/pluginDetails";
import { Op } from "sequelize";
import { App } from "../models/App";
import { ApiKey } from "../models/ApiKey";
import { Source } from "../models/Source";
import { Schedule } from "../models/Schedule";
import { Destination } from "../models/Destination";
import { Import } from "../models/Import";
import { Group } from "../models/Group";
import { GroupRule } from "../models/GroupRule";
import { Export } from "../models/Export";
import { GrouparooRecord } from "../models/GrouparooRecord";
import { RecordProperty } from "../models/RecordProperty";
import { Property } from "../models/Property";
import { Run } from "../models/Run";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import { Notification } from "../models/Notification";
import { GroupOps } from "../modules/ops/group";
import { SourceOps } from "../modules/ops/source";
import { RecordOps } from "./ops/record";
import { GrouparooModel } from "../models/GrouparooModel";

export interface StatusMetric {
  // the possible attributes for a metric are:
  // { collection, topic, aggregation, key, value, count, min, max, avg, imports, exports, runs, errors }
  collection: string;
  topic: string;
  aggregation: "count" | "exact";
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
  metadata?: string;
}

export namespace StatusReporters {
  export namespace Cluster {
    export namespace Workers {
      export async function countWorkers(): Promise<StatusMetric> {
        return {
          collection: "cluster",
          topic: "workers",
          aggregation: "count",
          count: Object.keys(await api.resque.queue.workers()).length,
        };
      }

      export async function countErrors(): Promise<StatusMetric> {
        return {
          collection: "cluster",
          topic: "resqueErrors",
          aggregation: "count",
          count: await api.resque.queue.failedCount(),
        };
      }

      export async function details(): Promise<StatusMetric> {
        const resqueDetails = await task.details();

        return {
          collection: "cluster",
          topic: "resqueDetails",
          aggregation: "exact",
          value: resqueDetails.leader || "None",
          metadata: JSON.stringify(resqueDetails),
        };
      }
    }

    export namespace Process {
      export async function platform(): Promise<StatusMetric> {
        return {
          collection: "cluster",
          topic: "os",
          aggregation: "exact",
          value: `${process.platform}/${os.release()}`,
        };
      }

      export async function env(): Promise<StatusMetric[]> {
        const metrics: StatusMetric[] = [];
        const envVars = [
          ["NODE_ENV", "development"],
          ["GROUPAROO_CLOUD", "false"],
          ["GROUPAROO_DISTRIBUTION", "unknown"],
          ["GROUPAROO_RUN_MODE", "unknown"],
          ["GROUPAROO_UI_EDITION", "unknown"],
        ];

        for (const [k, defaultValue] of envVars) {
          metrics.push({
            collection: k,
            topic: "env",
            aggregation: "exact",
            value: process.env[k] ?? defaultValue,
          });
        }

        return metrics;
      }

      export async function sequelizeDialect(): Promise<StatusMetric> {
        return {
          collection: "sequelize",
          topic: "dialect",
          aggregation: "exact",
          value: config.sequelize.dialect,
        };
      }
    }

    export namespace Notifications {
      export async function unread(): Promise<StatusMetric> {
        return {
          collection: "cluster",
          topic: "unreadNotifications",
          aggregation: "count",
          count: await Notification.count({ where: { readAt: null } }),
        };
      }
    }
  }

  export namespace Plugins {
    export async function Versions() {
      const metrics: StatusMetric[] = [];

      metrics.push({
        collection: "cluster",
        topic: "@grouparoo/core",
        aggregation: "exact",
        key: "version",
        value: getCoreVersion(),
      });

      const pluginManifest = getPluginManifest();
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
    export async function Models(
      models = [
        App, // order of these matters!
        ApiKey,
        Source,
        Schedule,
        Destination,
        Import,
        Group,
        GroupRule,
        Export,
        GrouparooRecord,
        RecordProperty,
        Property,
        Run,
        Team,
        TeamMember,
        GrouparooModel,
      ]
    ) {
      const metrics: StatusMetric[] = [];

      for (const i in models) {
        //@ts-ignore
        const model: typeof App = models[i]; // pick one of the Models so that the types are the same.  TODO: make this better
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
      const metrics: StatusMetric[] = [];
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
      const metrics: StatusMetric[] = [];

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

    export async function UniqueRecordsExported(): Promise<StatusMetric[]> {
      const metrics: StatusMetric[] = [];
      const days = [1, 7, 30];

      for (const dayCount of days) {
        const count = await Export.count({
          distinct: true,
          col: "recordId",
          where: {
            state: "complete",
            createdAt: {
              [Op.gte]: Moment().subtract(dayCount, "days").toDate(),
              [Op.lt]: new Date(),
            },
          },
        });

        metrics.push({
          collection: `${dayCount}DayDistinct`,
          topic: "Export",
          aggregation: "count",
          count,
        });
      }

      return metrics;
    }
  }

  export namespace Pending {
    export async function pendingRuns() {
      const metrics: StatusMetric[] = [];

      const activeRuns = await Run.findAll({ where: { state: "running" } });

      metrics.push({
        collection: "pending",
        topic: "Run",
        aggregation: "count",
        count: activeRuns.length,
        value: JSON.stringify(activeRuns.map((r) => r.id)),
      });

      for (const i in activeRuns) {
        const run = activeRuns[i];
        const creatorName = await run.getCreatorName();
        const percentComplete = run.percentComplete;
        const highWaterMark = run.highWaterMark
          ? Object.values(run.highWaterMark)[0]
          : null;

        metrics.push({
          collection: "percentComplete",
          topic: "Run",
          aggregation: "exact",
          key: run.id,
          value: creatorName,
          count: percentComplete,
          metadata: highWaterMark?.toString(),
        });
      }

      return metrics;
    }

    export async function pendingRecords(): Promise<StatusMetric> {
      return {
        collection: "pending",
        topic: "GrouparooRecord",
        aggregation: "count",
        count: await GrouparooRecord.count({
          where: { state: { [Op.ne]: "ready" } },
        }),
      };
    }

    export async function pendingImports(): Promise<StatusMetric> {
      return {
        collection: "pending",
        topic: "Import",
        aggregation: "count",
        count: await Import.count({
          where: { state: { [Op.notIn]: ["complete", "failed"] } },
        }),
      };
    }

    export async function pendingImportsBySource() {
      const metrics: StatusMetric[] = [];
      const sources = await Source.findAll();
      const { counts } = await SourceOps.pendingImportsBySource();

      for (const source of sources) {
        metrics.push({
          collection: "pendingBySource",
          topic: "Import",
          aggregation: "count",
          key: source.id,
          value: source.name,
          count: counts[source.id] || 0,
        });
      }

      return metrics;
    }

    export async function pendingExports(): Promise<StatusMetric> {
      return {
        collection: "pending",
        topic: "Export",
        aggregation: "count",
        count: await Export.count({
          where: { state: "pending" },
        }),
      };
    }

    export async function pendingExportsByDestination() {
      const metrics: StatusMetric[] = [];
      const destinations = await Destination.findAll();

      for (const destination of destinations) {
        const apiData = await destination.apiData();
        metrics.push({
          collection: "pendingByDestination",
          topic: "Export",
          aggregation: "count",
          key: apiData.id,
          value: apiData.name,
          count: apiData.exportTotals.pending,
        });
      }

      return metrics;
    }
  }

  export namespace Deleted {
    export async function deletedGroups(): Promise<StatusMetric> {
      return {
        collection: "deleted",
        topic: "Group",
        aggregation: "count",
        count: await Group.count({
          where: { state: "deleted" },
        }),
      };
    }

    export async function deletedDestinations(): Promise<StatusMetric> {
      return {
        collection: "deleted",
        topic: "Destination",
        aggregation: "count",
        count: await Destination.count({
          where: { state: "deleted" },
        }),
      };
    }

    export async function deletedProperties(): Promise<StatusMetric> {
      return {
        collection: "deleted",
        topic: "Property",
        aggregation: "count",
        count: await Property.count({ where: { state: "deleted" } }),
      };
    }

    export async function deletedSources(): Promise<StatusMetric> {
      return {
        collection: "deleted",
        topic: "Source",
        aggregation: "count",
        count: await Source.count({ where: { state: "deleted" } }),
      };
    }

    export async function deletedRecords(): Promise<StatusMetric> {
      const recordsToDestroy = await RecordOps.getRecordsToDestroy();

      return {
        collection: "deleted",
        topic: "GrouparooRecord",
        aggregation: "count",
        count: recordsToDestroy.length,
      };
    }

    export async function deletedModels(): Promise<StatusMetric> {
      return {
        collection: "deleted",
        topic: "Model",
        aggregation: "count",
        count: await GrouparooModel.count({ where: { state: "deleted" } }),
      };
    }

    export async function deletedApps(): Promise<StatusMetric> {
      return {
        collection: "deleted",
        topic: "App",
        aggregation: "count",
        count: await App.count({ where: { state: "deleted" } }),
      };
    }
  }

  export namespace Groups {
    export async function byNewestMember() {
      const metrics: StatusMetric[] = [];
      const { groups, newestMembersAdded } = await GroupOps.newestGroupMembers(
        25
      );

      for (const group of groups) {
        const apiData = await group.apiData();

        metrics.push({
          collection: "byNewestMember",
          topic: "Group",
          aggregation: "exact",
          key: apiData.id,
          value: apiData.name,
          count: apiData.recordsCount,
          metadata: newestMembersAdded[apiData.id]
            ? newestMembersAdded[apiData.id].toString()
            : "No Group Members",
        });
      }

      return metrics;
    }
  }

  export namespace Sources {
    export async function nextRuns() {
      const metrics: StatusMetric[] = [];
      const sources = await Source.findAll();

      for (const source of sources) {
        const schedule = await source.$get("schedule");
        const latestRun = schedule
          ? await Run.findOne({
              where: { creatorId: schedule.id },
              order: [["updatedAt", "desc"]],
            })
          : null;
        const nextRunAt = latestRun
          ? latestRun.updatedAt.getTime() + schedule.recurringFrequency
          : -1;

        metrics.push({
          collection: "nextRun",
          topic: "Source",
          aggregation: "exact",
          key: source.id,
          value: source.name,
          count: schedule?.recurring ? 1 : 0,
          metadata: nextRunAt.toString(),
        });
      }

      return metrics;
    }
  }
}

/*
 * Merge the counts from metrics with matching collections, topics, and aggregations.
 * This is useful for when you have 2 sources using the same app, and you want to report on the app's totals
 */
function mergeMetrics(metrics: StatusMetric[]) {
  const mergedMetrics: StatusMetric[] = [];
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
        if (Object.prototype.hasOwnProperty.call(item, k)) {
          mergedMetrics[idx].count = +item.count;
        }
      }
    }
  });

  return mergedMetrics;
}

export namespace FinalSummaryReporters {
  const lastRunStart = new Date(api.bootTime);
  export namespace Sources {
    export interface SourceData {
      name: string;
      recordsCreated: number;
      recordsImported: number;
      importsCreated: number;
      error: string;
    }
    export async function getData(): Promise<SourceData[]> {
      const runs = await Run.findAll({
        where: {
          updatedAt: { [Op.gte]: lastRunStart },
          creatorType: "schedule",
        },
      });

      const sources: { [id: string]: SourceData } = {};
      for (const run of runs) {
        let source = null;
        await run.updateTotals();
        const schedule = await Schedule.findByPk(run.creatorId);

        if (schedule) source = await schedule.$get("source", { scope: null });

        const currentSource = sources[source.id] || {
          name: source.name,
          recordsCreated: 0,
          recordsImported: 0,
          importsCreated: 0,
          error: null,
        };
        currentSource.recordsCreated += run.recordsCreated;
        currentSource.recordsImported += run.recordsImported;
        currentSource.importsCreated += run.importsCreated;
        currentSource.error = currentSource.error || run.error;
        sources[source.id] = currentSource;
      }

      return Object.values(sources);
    }
  }

  export namespace GrouparooRecords {
    export interface RecordData {
      name?: string;
      recordsUpdated: number;
      recordsCreated: number;
      allRecords: number;
    }

    export async function getData() {
      const out: RecordData[] = [];
      const recordsUpdated = await GrouparooRecord.count({
        where: { updatedAt: { [Op.gte]: lastRunStart } },
      });

      const recordsCreated = await GrouparooRecord.count({
        where: { createdAt: { [Op.gte]: lastRunStart } },
      });
      const allRecords = await GrouparooRecord.count();

      const recordData: RecordData = {
        name: null,
        recordsUpdated,
        recordsCreated,
        allRecords,
      };
      out.push(recordData);
      return out;
    }
  }

  export namespace Destinations {
    export interface DestinationData {
      name: string;
      exportsCreated: number;
      exportsFailed: number;
      exportsComplete: number;
    }

    export async function getData() {
      const out: DestinationData[] = [];

      const destinations = await Destination.scope(null).findAll();
      for (const destination of destinations) {
        const exportsCreated = await Export.count({
          where: {
            createdAt: { [Op.gte]: lastRunStart },
            destinationId: destination.id,
          },
        });

        const exportsFailed = await Export.count({
          where: {
            state: "failed",
            updatedAt: { [Op.gte]: lastRunStart },
            destinationId: destination.id,
          },
        });

        const exportsComplete = await Export.count({
          where: {
            state: "complete",
            completedAt: { [Op.gte]: lastRunStart },
            destinationId: destination.id,
          },
        });

        if (exportsCreated > 0 || exportsFailed > 0 || exportsComplete > 0) {
          out.push({
            name: destination.name,
            exportsCreated,
            exportsFailed,
            exportsComplete,
          });
        }
      }

      return out;
    }
  }

  export namespace Warnings {
    export interface WarningData {
      name: string;
      message: string;
      link: string;
    }

    export async function getWarnings() {
      const out: WarningData[] = [];

      const schedules = await Schedule.findAll();
      if (schedules.length === 0) {
        out.push({
          name: "Schedules",
          message: `No schedules found.  The run command uses schedules to know what records to import.`,
          link: `See this link for more info: https://www.grouparoo.com/docs/getting-started/product-concepts#schedule`,
        });
      }

      return out;
    }
  }
}
