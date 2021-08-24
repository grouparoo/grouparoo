import Sequelize from "sequelize";
import { Run } from "../../models/Run";
import { Op } from "sequelize";
import Moment from "moment";
import { CLSTask } from "../../classes/tasks/clsTask";

export class UpdateRunCounts extends CLSTask {
  constructor() {
    super();
    this.name = "runs:updateCounts";
    this.description = "Update the counts of imports and records for runs";
    this.frequency = 1000 * 15;
    this.queue = "runs";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const since = Moment().subtract(1, "day").toDate();

    const runs = await Run.findAll({
      where: {
        state: { [Op.ne]: "stopped" },
        error: { [Op.eq]: null },
        updatedAt: { [Op.gte]: since },
        [Op.or]: [
          { importsCreated: 0 },
          {
            profilesImported: {
              [Op.lt]: Sequelize.col("importsCreated") as unknown as string,
            },
          },
        ],
      },
    });

    let errors: Error[] = [];
    for (const run of runs) {
      try {
        await run.updateTotals();
      } catch (_error) {
        errors.push(_error);
      }
    }

    if (errors.length > 0) {
      const error = new Error(`Error updating runs: ${errors.join(", ")}`);
      error["errors"] = errors;
      throw error;
    }

    return runs.length;
  }
}
