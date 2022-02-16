import { CLSTask } from "../../classes/tasks/clsTask";
import { Group } from "../../models/Group";
import { Run } from "../../models/Run";
import { config, ParamsFrom } from "actionhero";

export class GroupDestroy extends CLSTask {
  name = "group:destroy";
  description =
    "kick off a run to remove all group members, and then delete the group when empty";
  frequency = 0;
  queue = "groups";
  inputs = {
    groupId: { required: true },
  } as const;

  async runWithinTransaction({ groupId }: ParamsFrom<GroupDestroy>) {
    const limit: number = config.batchSize.imports;

    const group = await Group.scope(null).findOne({
      where: { id: groupId, state: "deleted" },
    });
    if (!group) return; // the group may have been force-deleted

    try {
      await Group.ensureNotInUse(group);
    } catch (error) {
      if (error.message.match(/group still in use by/)) {
        return null;
      }

      throw error;
    }

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
        memberOffset: 0,
        memberLimit: limit,
        method: "runRemoveGroupMembers",
      });
    }

    // we're done here, the group can be destroyed
    await group.destroy();
    return null;
  }
}
