import Moment from "moment";
import { config } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { CLS } from "../../modules/cls";
import { plugin } from "../../modules/plugin";
import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";
import { ProfileOps } from "../../modules/ops/profile";

export class ProfilesConfirm extends CLSTask {
  constructor() {
    super();
    this.name = "profiles:confirm";
    this.description = "Confirm that profiles still exist in the source";
    this.frequency = 1000 * 30;
    this.queue = "profiles";
    this.inputs = {};
  }

  async runWithinTransaction() {
    const limit: number = config.batchSize.imports;
    const confirmDays = parseInt(
      (await plugin.readSetting("core", "confirm-profiles-days")).value
    );

    let count = 0;

    const schedules = await Schedule.findAll({
      where: { confirmProfiles: true },
      include: [
        {
          model: Run,
          limit: 1,
          where: { state: "complete" },
          order: [["completedAt", "desc"]],
          required: true,
        },
      ],
    });

    for (const schedule of schedules) {
      const latestRun = schedule.runs[0];
      if (!latestRun) continue;

      const pendingImports = await latestRun.$count("imports", {
        where: { profileAssociatedAt: null },
      });

      if (pendingImports !== 0) continue;

      count += await ProfileOps.confirmExistence(
        limit - count,
        latestRun.completedAt,
        schedule.sourceId
      );
    }

    if (confirmDays > 0) {
      const nextConfirmAt = Moment().subtract(confirmDays, "days").toDate();
      count += await ProfileOps.confirmExistence(limit - count, nextConfirmAt);
    }

    // re-enqueue if there is more to do
    if (count > 0) await CLS.enqueueTask(this.name, {});

    return count;
  }
}
