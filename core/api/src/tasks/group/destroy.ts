import { Task, task, log, config } from "actionhero";
import { Group } from "../../models/Group";
import { Run } from "../../models/Run";
import { plugin } from "../../modules/plugin";

export class GroupDestroy extends Task {
  constructor() {
    super();
    this.name = "group:destroy";
    this.description =
      "remove all group members though imports, and then delete the group";
    this.frequency = 0;
    this.queue = "groups";
    this.inputs = {
      groupGuid: { required: true },
      runGuid: { required: false },
      offset: { required: false },
      limit: { required: false },
    };
  }

  async run(params) {
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
      if (run.state === "stopped") return;
    } else {
      await group.stopPreviousRuns();
      run = await Run.create({
        creatorGuid: group.guid,
        creatorType: "group",
        state: "running",
      });
      await group.update({ state: "deleted" });

      log(
        `[ run ] starting run ${run.guid} for group ${group.name} (${group.guid})`,
        "notice"
      );
    }

    // we still have exports from the previous batch that need to be processed
    if (run.exportsCreated > 0 && run.exportsCreated > run.profilesExported) {
      await run.afterBatch();
      return task.enqueueIn(config.tasks.timeout + 1, this.name, params);
    }

    await run.update({
      groupMemberLimit: limit,
      groupMemberOffset: offset,
      groupMethod: "runRemoveGroupMembers",
    });

    const importsCounts = await group.runRemoveGroupMembers(run, limit, offset);
    const previousRunMembers = await group.removePreviousRunGroupMembers(
      run,
      limit
    );
    const remainingMembers = await group.$count("groupMembers");

    await run.determinePercentComplete();

    if (importsCounts > 0 || previousRunMembers > 0 || remainingMembers > 0) {
      await task.enqueueIn(config.tasks.timeout + 1, this.name, {
        runGuid: run.guid,
        groupGuid: group.guid,
        offset: offset + limit,
        limit,
      });
    } else {
      await group.destroy();

      // runs for this group will be deleted, so we don't need to check the state
      // await task.enqueueIn(config.tasks.timeout + 1, "run:determineState", {
      //   runGuid: run.guid,
      // });
    }
  }
}
