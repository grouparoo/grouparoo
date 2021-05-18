import { cache as actionheroCache, api, task, config } from "actionhero";
import { Op } from "sequelize";

import { App } from "../models/App";
import { Destination } from "../models/Destination";
import { DestinationGroupMembership } from "../models/DestinationGroupMembership";
import { Export } from "../models/Export";
import { Event } from "../models/Event";
import { EventData } from "../models/EventData";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { GroupRule } from "../models/GroupRule";
import { Import } from "../models/Import";
import { Log } from "../models/Log";
import { Mapping } from "../models/Mapping";
import { Option } from "../models/Option";
import { Profile } from "../models/Profile";
import { ProfileProperty } from "../models/ProfileProperty";
import { Property } from "../models/Property";
import { PropertyFilter } from "../models/PropertyFilter";
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
      Event,
      EventData,
      Export,
      Group,
      GroupMember,
      GroupRule,
      Import,
      Mapping,
      Option,
      Profile,
      ProfileProperty,
      Property,
      PropertyFilter,
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
   * * truncates "data" tables (profiles, groups, etc) but leaves apps, sources, properties
   * * clears the redis cache
   * * clears resque
   */
  export async function data(callerId: string) {
    await Profile.truncate();
    await ProfileProperty.truncate();
    await GroupMember.truncate();
    await Import.truncate();
    await Export.truncate();
    await Run.truncate();
    await Log.truncate();
    await Event.update(
      { profileId: null, userId: null, profileAssociatedAt: null },
      { where: { profileId: { [Op.ne]: null } } }
    );

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
    for (const i in schedules) {
      const runs = await Run.findAll({
        where: {
          creatorId: schedules[i].id,
          highWaterMark: { [Op.ne]: null },
        },
      });

      for (const j in runs) {
        const run = runs[j];
        if (run.state === "running") await run.stop();
        await run.update({ highWaterMark: {} });
      }
    }
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
    const keys = await api.resque.queue.connection.redis.keys(pattern);
    return Promise.all(
      keys.map((k) => api.resque.queue.connection.redis.del(k))
    );
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
