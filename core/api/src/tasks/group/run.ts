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
    const limit: number =
      params.limit ||
      parseInt(
        (await plugin.readSetting("core", "runs-profile-batch-size")).value
      );

    const group = await Group.findByGuid(params.groupGuid);

    let run: Run;
    if (params.runGuid) {
      run = await Run.findByGuid(params.runGuid);
      if (run.state === "stopped") {
        return;
      }
    } else {
      run = await Run.create({
        creatorGuid: group.guid,
        creatorType: "group",
        state: "running",
      });
      await group.update({ state: "updating" });
      log(
        `[ run ] starting run ${run.guid} for group ${group.guid}, ${group.name}`,
        "notice"
      );
    }

    // we still have exports from the previous batch that need to be processed
    if (run.exportsCreated > 0 && run.exportsCreated > run.profilesExported) {
      return task.enqueueIn(
        config.tasks.timeout + 1,
        this.name,
        params,
        this.queue
      );
    }

    await run.update({
      groupMemberLimit: limit,
      groupMemberOffset: offset,
      groupMethod: method,
    });

    let memberCount = 0;
    if (method === "runAddGroupMembers") {
      memberCount = await group.runAddGroupMembers(
        run,
        limit,
        offset,
        force,
        destinationGuid
      );
    } else if (method === "runRemoveGroupMembers") {
      memberCount = await group.runRemoveGroupMembers(
        run,
        limit,
        offset,
        force,
        destinationGuid
      );
    } else if (method === "removePreviousRunGroupMembers") {
      memberCount = await group.removePreviousRunGroupMembers(run, limit);
    } else {
      throw new Error(`${method} is not now a known method`);
    }

    if (memberCount === 0 && method === "runAddGroupMembers") {
      await task.enqueueIn(config.tasks.timeout + 1, "group:run", {
        runGuid: run.guid,
        groupGuid: group.guid,
        method: "runRemoveGroupMembers",
        offset: 0,
        limit,
        force,
      });
    } else if (memberCount === 0 && method === "runRemoveGroupMembers") {
      await task.enqueueIn(config.tasks.timeout + 1, "group:run", {
        runGuid: run.guid,
        groupGuid: group.guid,
        method: "removePreviousRunGroupMembers",
        offset: 0,
        limit,
        force,
      });
    } else if (memberCount > 0) {
      await task.enqueueIn(config.tasks.timeout + 1, "group:run", {
        runGuid: run.guid,
        groupGuid: group.guid,
        method,
        offset: offset + limit,
        limit,
        force,
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
