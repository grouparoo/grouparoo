import { cache as actionheroCache, api, task, config } from "actionhero";
import { App } from "../models/App";
import { Destination } from "../models/Destination";
import { DestinationGroupMembership } from "../models/DestinationGroupMembership";
import { Export } from "../models/Export";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { GroupRule } from "../models/GroupRule";
import { Import } from "../models/Import";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    return counts;
  }

  /**
   * reset:data
   * * truncates "data" tables (records, groups, etc) but leaves apps, sources, properties
   * * clears the redis cache
   * * clears resque
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export async function data(callerId: string) {
    await GrouparooRecord.truncate();
    await RecordProperty.truncate();
    await GroupMember.truncate();
    await Import.truncate();
    await Export.truncate();
    await Run.truncate();

    await clearLocalCaches();
    await clearRedis();
  }

  /**
   * reset:cache (least dangerous)
   * * clears the redis cache
   * * clears resque
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export async function cache(callerId: string) {
    await clearLocalCaches();
    await clearRedis();
  }

  export async function resetHighWatermarks() {
    const schedules = await Schedule.findAll();
    for (const schedule of schedules) await schedule.resetHighWatermarks();
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
    const client = api.resque.queue.connection.redis;

    const result: number = await new Promise((resolve, reject) => {
      let count = 0;
      const scanStream = client.scanStream({ match: pattern });
      scanStream.once("error", (error) => reject(error));
      scanStream.once("end", () => resolve(count));

      scanStream.on("data", async (keys: string[]) => {
        scanStream.pause();
        await Promise.all(keys.map((k) => client.del(k)));
        count += keys.length;
        scanStream.resume();
      });
    });

    return result;
  }

  async function clearFailedTasks(): Promise<void> {
    const failed = await task.failed(0, 0);
    if (failed && failed.length > 0) {
      const failedJob = failed[0];
      await task.removeFailed(failedJob);
      return clearFailedTasks();
    }
  }
}
