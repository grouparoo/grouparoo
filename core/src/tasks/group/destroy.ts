import { CLSTask } from "../../classes/tasks/clsTask";
import { Group } from "../../models/Group";
import { Run } from "../../models/Run";
import { plugin } from "../../modules/plugin";

export class GroupDestroy extends CLSTask {
  constructor() {
    super();
    this.name = "group:destroy";
    this.description =
      "kick off a run to remove all group members, and then delete the group when empty";
    this.frequency = 0;
    this.queue = "groups";
    this.inputs = {
      groupId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const limit: number = parseInt(
      (await plugin.readSetting("core", "runs-profile-batch-size")).value
    );

    const group = await Group.scope(null).findOne({
      where: { id: params.groupId, state: "deleted" },
    });
    if (!group) return; // the group may have been force-deleted

    let run = await Run.findOne({
      where: { creatorId: group.id, creatorType: "group", state: "running" },
    });

    if (run) return null; // wait for runs to settle

    const remainingMembers = await group.$count("groupMembers");
    if (remainingMembers > 0) {
      // kick off a run in the `runRemoveGroupMembers` stage
      // this will be processed by run:tick -> group:run
      return Run.create({
        creatorId: group.id,
        creatorType: "group",
        state: "running",
        groupMemberOffset: 0,
        groupMemberLimit: limit,
        groupMethod: "runRemoveGroupMembers",
      });
    }

    // we're done here, the group can be destroyed
    await group.destroy();
    return null;
  }
}
