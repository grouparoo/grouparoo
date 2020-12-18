import { Task } from "actionhero";
import { Group } from "../../models/Group";
import { plugin } from "../../modules/plugin";
import { Op } from "sequelize";
import Moment from "moment";

export class GroupsUpdateCalculatedGroups extends Task {
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

    const calculatedGroups = await Group.scope(null).findAll({
      where: {
        type: "calculated",
        state: "ready",
        calculatedAt: {
          [Op.or]: {
            [Op.eq]: null,
            [Op.lt]: lastCheckTime,
          },
        },
      },
    });

    await Promise.all(calculatedGroups.map((group) => group.run()));
  }
}
