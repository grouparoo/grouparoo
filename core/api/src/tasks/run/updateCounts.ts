import { api, Task } from "actionhero";
import { Run } from "../../models/Run";
import { Op } from "sequelize";
import Moment from "moment";

export class UpdateRunCounts extends Task {
  constructor() {
    super();
    this.name = "runs:updateCounts";
    this.description = "Update the counts of imports and profiles for runs";
    this.frequency = 1000 * 10;
    this.queue = "runs";
    this.inputs = {};
  }

  async run() {
    const since = Moment().subtract(1, "day");

    const runs = await Run.findAll({
      where: {
        state: { [Op.ne]: "stopped" },
        error: { [Op.eq]: null },
        updatedAt: { [Op.gte]: since.toDate() },
        [Op.or]: [
          { importsCreated: 0 },
          {
            profilesImported: {
              [Op.lt]: api.sequelize.col("importsCreated"),
            },
          },
        ],
      },
    });

    for (const i in runs) {
      await runs[i].updateTotals();
    }

    return runs.length;
  }
}
