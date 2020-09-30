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
    this.plugins = ["QueueLock"];
    this.queue = "groups";
    this.inputs = {
      groupGuid: { required: true },
      runGuid: { required: false },
      method: { required: false },
      offset: { required: false },
      highWaterMark: { required: false },
      limit: { required: false },
      force: { required: false },
      destinationGuid: { required: false },
    };
  }

  async run(params) {
    // 1. Calculate the set of profiles that should be in this group, with a limit and offset (looping)
    // 2. Find or create GroupMembers, touch the updatedAt for those that already exist. (group#runAddGroupMembers)
    //    > Create imports for new profiles
    // 3. After the loop is done, loop thought those GroupMembers who have not had their updatedAt touched.  (group#runRemoveGroupMembers)
    //    > Create imports for those profiles whose last update is older than the run's start time to remove them
    // 4. Delete any group members still hanging around from a pervious run that this run may have canceled

    const force = params.force || false;
    const destinationGuid = params.destinationGuid;
    const method = params.method || "runAddGroupMembers";
    const offset: number = params.offset || 0;
    const highWaterMark: number = params.highWaterMark || 0;
    const limit: number =
      params.limit ||
      parseInt(
        (await plugin.readSetting("core", "runs-profile-batch-size")).value
      );

    const group = await Group.findByGuid(params.groupGuid);

    let run: Run;
    if (params.runGuid) {
      run = await Run.findByGuid(params.runGuid);
    } else {
      run = await Run.create({
        creatorGuid: group.guid,
        creatorType: "group",
        state: "running",
        force,
      });
      await group.update({ state: "updating" });
      log(
        `[ run ] starting run ${run.guid} for group ${group.name} (${group.guid})`,
        "notice"
      );
    }

    if (run.state === "stopped") return;

    await run.update({
      groupMemberLimit: limit,
      groupMemberOffset: offset,
      groupHighWaterMark: highWaterMark,
      groupMethod: method,
    });

    let groupMembersCount = 0;
    let nextHighWaterMark = 0;
    let nextOffset = 0;

    if (method === "runAddGroupMembers") {
      const response = await group.runAddGroupMembers(
        run,
        limit,
        offset,
        highWaterMark,
        force,
        destinationGuid
      );

      groupMembersCount = response.groupMembersCount;
      nextHighWaterMark = response.nextHighWaterMark;
      nextOffset = response.nextOffset;
    } else if (method === "runRemoveGroupMembers") {
      groupMembersCount = await group.runRemoveGroupMembers(
        run,
        limit,
        destinationGuid
      );
    } else if (method === "removePreviousRunGroupMembers") {
      groupMembersCount = await group.removePreviousRunGroupMembers(run, limit);
    } else {
      throw new Error(`${method} is not now a known method`);
    }

    await run.afterBatch();

    if (groupMembersCount === 0 && method === "runAddGroupMembers") {
      await task.enqueueIn(config.tasks.timeout + 1, this.name, {
        runGuid: run.guid,
        groupGuid: group.guid,
        method: "runRemoveGroupMembers",
        limit,
        offset: 0,
        highWaterMark: 0,
        force,
        destinationGuid,
      });
    } else if (groupMembersCount === 0 && method === "runRemoveGroupMembers") {
      await task.enqueueIn(config.tasks.timeout + 1, this.name, {
        runGuid: run.guid,
        groupGuid: group.guid,
        method: "removePreviousRunGroupMembers",
        limit,
        offset: 0,
        highWaterMark: 0,
        force,
        destinationGuid,
      });
    } else if (groupMembersCount > 0) {
      await task.enqueueIn(config.tasks.timeout + 1, this.name, {
        runGuid: run.guid,
        groupGuid: group.guid,
        method,
        limit,
        offset: nextOffset,
        highWaterMark: nextHighWaterMark,
        force,
        destinationGuid,
      });
    } else {
      await group.countComponentMembersFromRules(null);
      await group.update({ state: "ready" });
      await run.update({
        groupMemberLimit: 0,
        groupMemberOffset: 0,
        groupMethod: "exporting",
      });
      await task.enqueueIn(config.tasks.timeout + 1, "run:determineState", {
        runGuid: run.guid,
      });
    }

    return groupMembersCount;
  }
}
