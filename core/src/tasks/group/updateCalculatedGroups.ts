import { Group } from "../../models/Group";
import { Run } from "../../models/Run";
import { plugin } from "../../modules/plugin";
import Moment from "moment";
import { CLSTask } from "../../classes/tasks/clsTask";

export class GroupsUpdateCalculatedGroups extends CLSTask {
  constructor() {
    super();
    this.name = "group:updateCalculatedGroups";
    this.description =
      "enqueue an update of calculated groups that to be updated";
    this.frequency =
      process.env.GROUPAROO_RUN_MODE === "cli:run" ? 0 : 1000 * 60 * 5; // Run every 5 minutes
    this.queue = "groups";
  }

  async runWithinTransaction() {
    const setting = await plugin.readSetting(
      "core",
      "groups-calculation-delay-minutes"
    );
    const delayMinutes = parseInt(setting.value);
    const lastCheckTime = Moment().subtract(delayMinutes, "minutes").toDate();

    const groupsToRun: Group[] = [];
    const calculatedGroups = await Group.scope(null).findAll({
      where: { type: "calculated" },
    });

    for (const group of calculatedGroups) {
      if (group.state === "ready" && !group.calculatedAt) {
        // the group has never been calculated
        groupsToRun.push(group);
      } else if (
        // the group hasn't been calculated recently
        group.state === "ready" &&
        group.calculatedAt.getTime() < lastCheckTime.getTime()
      ) {
        groupsToRun.push(group);
      } else if (
        group.state === "updating" &&
        group.calculatedAt.getTime() < lastCheckTime.getTime()
      ) {
        // the group is stuck in "updating" and has no run working it
        const runningRun = await Run.findOne({
          where: { creatorId: group.id, state: "running" },
        });
        if (!runningRun) groupsToRun.push(group);
      } else {
        // the group is up-to-date
      }
    }

    await Promise.all(groupsToRun.map((group) => group.run()));
  }
}
