import { Task, task, log, config } from "actionhero";
import { Group } from "../../models/Group";
import { Run } from "../../models/Run";
import { plugin } from "../../modules/plugin";

export class RunGroup extends Task {
  constructor() {
    super();
    this.name = "group:run";
    this.description =
      "calculate the groups members and create imports to update them all";
    this.frequency = 0;
    this.queue = "groups";
    this.inputs = {
      groupGuid: { required: true },
      runGuid: { required: false },
      method: { required: false },
      offset: { required: false },
      limit: { required: false },
    };
  }

  async run(params) {
    // 1. Calculate the set of profiles that should be in this group, with a limit and offset (looping)
    // 2. Find or create GroupMembers, touch the updatedAt for those that already exist. (group#runAddGroupMembers)
    //    > Create imports for new profiles
    // 3. After the loop is done, loop thought those GroupMembers who have not had their updatedAt touched.  (group#runRemoveGroupMembers)
    //    > Create imports for those profiles whose last update is older than the run's start time to remove them

    const method = params.method || "runAddGroupMembers";
    const offset: number = params.offset || 0;
    const limit: number =
      params.limit ||
      parseInt(
        (await plugin.readSetting("core", "runs-profile-batch-size")).value
      );

    const group = await Group.findOne({
      where: { guid: params.groupGuid },
    });
    if (!group) {
      throw new Error(`cannot find group ${params.groupGuid}`);
    }

    let run: Run;
    if (params.runGuid) {
      run = await Run.findOne({
        where: { guid: params.runGuid },
      });
      if (!run) {
        throw new Error(`cannot find run ${params.runGuid}`);
      }
    } else {
      run = await Run.create({
        creatorGuid: group.guid,
        creatorType: "group",
        state: "running",
      });
      await group.update({ state: "updating" });
      log(`starting run ${run.guid} for group ${group.guid}, ${group.name}`);
    }

    let importCount = 0;
    if (method === "runAddGroupMembers") {
      importCount = await group.runAddGroupMembers(run, limit, offset);
    } else if (method === "runRemoveGroupMembers") {
      importCount = await group.runRemoveGroupMembers(run, limit, offset);
    } else {
      throw new Error(`${method} is not now a known method`);
    }

    if (importCount === 0 && method === "runAddGroupMembers") {
      await task.enqueueIn(config.tasks.timeout + 1, "group:run", {
        runGuid: run.guid,
        groupGuid: group.guid,
        method: "runRemoveGroupMembers",
        offset: 0,
        limit,
      });
    } else if (importCount > 0) {
      await task.enqueueIn(config.tasks.timeout + 1, "group:run", {
        runGuid: run.guid,
        groupGuid: group.guid,
        method,
        offset: offset + limit,
        limit,
      });
    } else {
      await group.countComponentMembersFromRules(null);
      await group.update({ state: "ready" });
      await task.enqueueIn(config.tasks.timeout + 1, "run:determineState", {
        runGuid: run.guid,
      });
    }
  }
}
