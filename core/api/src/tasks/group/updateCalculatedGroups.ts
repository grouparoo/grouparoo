import { task } from "actionhero";
import { RetryableTask } from "../../classes/retryableTask";
import { Group } from "../../models/Group";
import { plugin } from "../../modules/plugin";
import { Op } from "sequelize";
import Moment from "moment";
import { log } from "actionhero";

export class RunSchedule extends RetryableTask {
  constructor() {
    super();
    this.name = "group:updateCalculatedGroups";
    this.description =
      "enqueue an update of calculated groups that to be updated";
    this.frequency = 1000 * 60 * 5; // Run every 5 minutes
    this.queue = "groups";
  }

  async run() {
    const setting = await plugin.readSetting(
      "core",
      "groups-calculation-delay-minutes"
    );
    const delayMinutes = parseInt(setting.value);
    const lastCheckTime = Moment().subtract(delayMinutes, "minutes");

    log(`checking to update calculated groups since ${lastCheckTime}`);

    const calculatedGroups = await Group.findAll({
      where: {
        type: "calculated",
        calculatedAt: {
          [Op.or]: {
            [Op.eq]: null,
            [Op.lt]: lastCheckTime,
          },
        },
      },
    });

    await Promise.all(
      calculatedGroups.map(async (group) => {
        return task.enqueue("group:run", { groupGuid: group.guid });
      })
    );
  }
}
