import { Task, task, log, config } from "actionhero";
import { Group } from "../../models/Group";
import { Run } from "../../models/Run";
import { plugin } from "../../modules/plugin";

export class RunGroup extends Task {
  constructor() {
    super();
    this.name = "group:updateMembers";
    this.description =
      "create imports to sync all profiles in this group.  Useful when the group is added to a new destination";
    this.frequency = 0;
    this.queue = "groups";
    this.inputs = {
      groupGuid: { required: true },
      runGuid: { required: false },
      destinationGuid: { required: false },
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
    const destinationGuid = params.destinationGuid;

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
      await group.update({ state: "updating" });
      log(`starting run ${run.guid} for group ${group.guid}, ${group.name}`);
    }

    const importCount = await group.runUpdateMembers(
      run,
      limit,
      offset,
      destinationGuid
    );

    if (importCount > 0) {
      await task.enqueueIn(config.tasks.timeout + 1, this.name, {
        runGuid: run.guid,
        groupGuid: group.guid,
        destinationGuid,
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
