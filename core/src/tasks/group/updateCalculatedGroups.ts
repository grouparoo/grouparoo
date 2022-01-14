import { Group } from "../../models/Group";
import { Run } from "../../models/Run";
import { plugin } from "../../modules/plugin";
import Moment from "moment";
import { CLSTask } from "../../classes/tasks/clsTask";
import { getGrouparooRunMode } from "../../modules/runMode";

export class GroupsUpdateCalculatedGroups extends CLSTask {
  name = "group:updateCalculatedGroups";
  description = "enqueue an update of groups that to be updated";
  frequency = getGrouparooRunMode() === "cli:run" ? 0 : 1000 * 60 * 5; // Run every 5 minutes
  queue = "groups";

  async runWithinTransaction() {
    const setting = await plugin.readSetting(
      "core",
      "groups-calculation-delay-minutes"
    );
    const delayMinutes = parseInt(setting.value);
    const lastCheckTime = Moment().subtract(delayMinutes, "minutes").toDate();

    const groupsToRun: Group[] = [];
    const calculatedGroups = await Group.scope(null).findAll();

    for (const group of calculatedGroups) {
      const calculatedAt = group.calculatedAt?.getTime() ?? 0;
      const nextCalculatedAt = await group.nextCalculatedAt();

      if (nextCalculatedAt && calculatedAt < lastCheckTime.getTime()) {
        if (group.state === "ready") {
          groupsToRun.push(group);
        } else if (group.state === "updating") {
          const runningRun = await Run.findOne({
            where: { creatorId: group.id, state: "running" },
          });
          // the group is stuck in "updating" and has no run working it
          if (!runningRun) groupsToRun.push(group);
        }
      }
    }

    for (const group of groupsToRun) {
      await group.run();
    }
  }
}
