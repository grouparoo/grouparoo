import Moment from "moment";
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
    const limit = parseInt(
      (
        await plugin.readSetting(
          "core",
          "imports-profile-properties-batch-size"
        )
      ).value
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
      const latestRunAt = schedule.runs[0].completedAt;
      count += await ProfileOps.confirmExistence(
        limit - count,
        latestRunAt,
        schedule.sourceId
      );
    }

    const days = 1; // TODO make a setting
    const nextConfirmAt = Moment().subtract(days, "days").toDate();
    count += await ProfileOps.confirmExistence(limit - count, nextConfirmAt);

    // re-enqueue if there is more to do
    if (count > 0) await CLS.enqueueTask(this.name, {});

    return count;
  }
}
