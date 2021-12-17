import { cache as actionheroCache, api, task, config } from "actionhero";
import { Cluster } from "ioredis";

import { App } from "../models/App";
import { Destination } from "../models/Destination";
import { DestinationGroupMembership } from "../models/DestinationGroupMembership";
import { Export } from "../models/Export";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { GroupRule } from "../models/GroupRule";
import { Import } from "../models/Import";
import { Log } from "../models/Log";
import { Mapping } from "../models/Mapping";
import { Option } from "../models/Option";
import { GrouparooRecord } from "../models/GrouparooRecord";
import { RecordProperty } from "../models/RecordProperty";
import { Property } from "../models/Property";
import { Filter } from "../models/Filter";
import { Run } from "../models/Run";
import { Schedule } from "../models/Schedule";
import { SetupStep } from "../models/SetupStep";
import { Source } from "../models/Source";

/**
 * Utilities for deleting and resetting things
 */
export namespace Reset {
  /**
   * reset:cluster (most dangerous)
   * * truncates all tables except those regarding teams/members
   * * clears the redis cache
   * * clears resque
   */
  export async function cluster(callerId: string) {
    const counts: { [model: string]: number } = {};

    const models: any[] = [
      App,
      Destination,
      DestinationGroupMembership,
      Export,
      Group,
      GroupMember,
      GroupRule,
      Import,
      Mapping,
      Option,
      GrouparooRecord,
      RecordProperty,
      Property,
      Filter,
      Run,
      Schedule,
      Source,
    ];

    // truncate data tables
    for (const i in models) {
      const model: typeof App = models[i];
      const count = await model.count();
      await model.truncate();
      counts[model.name] = count;
    }

    // reset the SetupSteps
    await SetupStep.update({ complete: false }, { where: { complete: true } });

    await clearLocalCaches();
    await clearRedis();

    await logMethod(callerId, "cluster", { counts });

    return counts;
  }

  /**
   * reset:data
   * * truncates "data" tables (records, groups, etc) but leaves apps, sources, properties
   * * clears the redis cache
   * * clears resque
   */
  export async function data(callerId: string) {
    await GrouparooRecord.truncate();
    await RecordProperty.truncate();
    await GroupMember.truncate();
    await Import.truncate();
    await Export.truncate();
    await Run.truncate();
    await Log.truncate();

    await clearLocalCaches();
    await clearRedis();

    await logMethod(callerId, "data");
  }

  /**
   * reset:cache (least dangerous)
   * * clears the redis cache
   * * clears resque
   */
  export async function cache(callerId: string) {
    await clearLocalCaches();
    await clearRedis();

    await logMethod(callerId, "cache");
  }

  export async function resetHighWatermarks() {
    const schedules = await Schedule.findAll();
    for (const schedule of schedules) await schedule.resetHighWatermarks();
  }

  async function logMethod(callerId: string, topic: string, data = {}) {
    return Log.create({
      topic,
      verb: "reset",
      message: `Reset ${topic} by ${callerId}`,
      ownerId: callerId,
      data,
    });
  }

  export async function clearLocalCaches() {
    await Property.invalidateCache();
  }

  export async function clearRedis() {
    await actionheroCache.clear(); // clear redis cache

    // resque
    await deleteKeys("*resque:queue:*"); // clear resque queues
    await deleteKeys("*resque:delayed:*"); // clear resque delayed queues
    await deleteKeys("*resque:timestamps:*"); // clear resque timestamps
    await deleteKeys("*resque:*lock*:*"); // clear resque locks
    await deleteKeys("*resque:stat:*"); // clear resque stats

    // wait for any currently-running workers
    await new Promise((resolve) =>
      setTimeout(resolve, config.tasks.timeout * 2)
    );
    await clearFailedTasks();

    // re-start recurring tasks
    await task.enqueueAllRecurrentTasks();
  }

  async function deleteKeys(pattern: string) {
    let result = 0;
    const nodes =
      api.resque.queue.connection.redis instanceof Cluster
        ? api.resque.queue.connection.redis.nodes("master")
        : [api.resque.queue.connection.redis];

    await Promise.all(
      nodes.map((node) => {
        return new Promise((resolve, reject) => {
          const scanStream = node.scanStream({ match: pattern });
          scanStream.once("error", (error) => reject(error));
          scanStream.once("end", () => resolve(node));

          scanStream.on("data", async (keys: string[]) => {
            scanStream.pause();
            await Promise.all(keys.map((k) => node.del(k)));
            result += keys.length;
            scanStream.resume();
          });
        });
      })
    );

    return result;
  }

  async function clearFailedTasks() {
    const failed = await task.failed(0, 0);
    if (failed && failed.length > 0) {
      const failedJob = failed[0];
      await task.removeFailed(failedJob);
      return clearFailedTasks();
    }
  }
}
