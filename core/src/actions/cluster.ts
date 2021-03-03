import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { cache, api, task, config } from "actionhero";

import {
  App,
  Destination,
  DestinationGroupMembership,
  Export,
  Event,
  EventData,
  Group,
  GroupMember,
  GroupRule,
  Import,
  Log,
  Mapping,
  Option,
  Profile,
  ProfileProperty,
  Property,
  PropertyFilter,
  Run,
  Schedule,
  SetupStep,
  Source,
} from "..";

const models = [
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

export class ClusterReset extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "cluster:destroy";
    this.description = "erase most all of the data in this grouparoo cluster";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" }; // TODO: do we need more elaborate checks?
    this.inputs = {};
  }

  async runWithinTransaction({ session: { teamMember } }) {
    const counts: { [model: string]: number } = {};

    for (const i in models) {
      //@ts-ignore
      const model: typeof App = models[i]; // pick one of the Models so that the types are the same.  TODO: make this better
      const modelName = model.name;
      const count = await model.count();
      await model.truncate();
      counts[modelName] = count;

      await Log.create({
        topic: "cluster",
        verb: "reset",
        message: `erased ${count} instances of ${modelName}`,
        ownerId: teamMember.id,
        data: { count },
      });
    }

    await SetupStep.update({ complete: false }, { where: { complete: true } });

    await api.resque.queue.connection.redis.flushdb();

    await Log.create({
      topic: "cluster",
      verb: "reset",
      message: "Grouparoo Cluster Reset",
      ownerId: teamMember.id,
      data: { counts },
    });

    // wait for any currently-running workers
    await new Promise((resolve) =>
      setTimeout(resolve, config.tasks.timeout * 2)
    );
    await clearFailedTasks();

    return { success: true, counts };
  }
}

export class ClusterClearCache extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "cluster:clearCache";
    this.description = "clear the cache";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" }; // TODO: do we need more elaborate checks?
    this.inputs = {};
  }

  async runWithinTransaction() {
    await cache.clear();
    return { success: true };
  }
}

async function clearFailedTasks() {
  const failed = await task.failed(0, 0);
  if (failed && failed.length > 0) {
    const failedJob = failed[0];
    await task.removeFailed(failedJob);
    return clearFailedTasks();
  }
}
