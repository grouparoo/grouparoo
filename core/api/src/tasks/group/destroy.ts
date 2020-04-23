import { Task, task, log, config } from "actionhero";
import { Group } from "../../models/Group";
import { Run } from "../../models/Run";
import { plugin } from "../../modules/plugin";

export class RunGroup extends Task {
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
    } else {
      run = await Run.create({
        creatorGuid: group.guid,
        creatorType: "group",
        state: "running",
      });
      await group.update({ state: "deleted" });

      if (group.type === "calculated") {
        await group.setRules([]);
      }

      log(
        `[ run ] starting run ${run.guid} for group ${group.guid}, ${group.name}`,
        "notice"
      );
    }

    const importsCounts = await group.runRemoveGroupMembers(run, limit, offset);
    const remainingMembers = await group.$count("groupMembers");

    if (importsCounts > 0 || remainingMembers > 0) {
      await task.enqueueIn(config.tasks.timeout + 1, "group:destroy", {
        runGuid: run.guid,
        groupGuid: group.guid,
        offset: offset + limit,
        limit,
      });
    } else {
      await group.destroy();
      await task.enqueueIn(config.tasks.timeout + 1, "run:determineState", {
        runGuid: run.guid,
      });
    }
  }
}
