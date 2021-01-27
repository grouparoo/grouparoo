import { log, config } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Group } from "../../models/Group";
import { Run } from "../../models/Run";
import { plugin } from "../../modules/plugin";
import { CLS } from "../../modules/cls";

export class GroupDestroy extends CLSTask {
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

  async runWithinTransaction(params) {
    const offset: number = params.offset || 0;
    const limit: number =
      params.limit ||
      parseInt(
        (await plugin.readSetting("core", "runs-profile-batch-size")).value,
        10
      );

    const group = await Group.scope(null).findOne({
      where: { guid: params.groupGuid },
    });
    if (!group) return; // the group may have been force-deleted

    let run: Run;
    if (params.runGuid) {
      run = await Run.findByGuid(params.runGuid);
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

    if (run.state === "stopped") return;

    await run.update({
      groupMemberLimit: limit,
      groupMemberOffset: offset,
      groupMethod: "runRemoveGroupMembers",
    });

    const importsCounts = await group.runRemoveGroupMembers(run, limit);
    const previousRunMembers = await group.removePreviousRunGroupMembers(
      run,
      limit
    );
    const remainingMembers = await group.$count("groupMembers");

    await run.afterBatch();

    if (importsCounts > 0 || previousRunMembers > 0 || remainingMembers > 0) {
      await CLS.enqueueTaskIn(config.tasks.timeout + 1, this.name, {
        runGuid: run.guid,
        groupGuid: group.guid,
        offset: offset + limit,
        limit,
      });
    } else {
      log(
        `[ run ] completed run ${run.guid} for group ${group.name} (${group.guid})`,
        "notice"
      );
      await run.afterBatch("complete");
      await group.destroy();
    }
  }
}
