import { api, Task } from "actionhero";
import { Run } from "../../models/Run";
import { Op } from "sequelize";
import { Import } from "../../models/Import";
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
      const run = runs[i];
      const importsCreated = await Import.count({
        where: { creatorGuid: run.guid },
      });
      const profilesCreated = await Import.count({
        where: { creatorGuid: run.guid, createdProfile: true },
      });
      const profilesImported = await Import.count({
        where: { creatorGuid: run.guid, profileUpdatedAt: { [Op.ne]: null } },
      });

      await run.update({ importsCreated, profilesCreated, profilesImported });
      await run.determinePercentComplete(false);
    }

    return runs.length;
  }
}
