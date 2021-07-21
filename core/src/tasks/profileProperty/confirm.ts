import { Op } from "sequelize";
import Moment from "moment";
import { CLSTask } from "../../classes/tasks/clsTask";
import { CLS } from "../../modules/cls";
import { Property } from "../../models/Property";
import { plugin } from "../../modules/plugin";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Profile } from "../../models/Profile";
import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";

export class ProfilePropertiesEnqueue extends CLSTask {
  constructor() {
    super();
    this.name = "profileProperties:confirm";
    this.description =
      "Confirm that directlymapped profile properties still exist";
    this.frequency = 1000 * 10;
    this.queue = "profileProperties";
    this.inputs = {};
  }

  async confirmProfileProperties(
    limit: number,
    fromDate: Date,
    sourceId?: string
  ) {
    const properties = await Property.findAllWithCache();
    const directlyMapped = properties.filter(
      (p) => p.directlyMapped && (!sourceId || sourceId === p.sourceId)
    );

    const { count, rows: profileProperties } =
      await ProfileProperty.findAndCountAll({
        limit,
        where: {
          state: "ready",
          confirmedAt: {
            [Op.lt]: fromDate,
          },
          rawValue: {
            [Op.ne]: null,
          },
          propertyId: directlyMapped.map((p) => p.id),
        },
      });

    await ProfileProperty.update(
      {
        state: "pending",
      },
      {
        where: {
          id: profileProperties.map((p) => p.id),
        },
      }
    );

    const profileIds = profileProperties.map((p) => p.profileId);
    await Profile.update({ state: "pending" }, { where: { id: profileIds } });

    return count;
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
      count += await this.confirmProfileProperties(
        limit,
        latestRunAt,
        schedule.sourceId
      );
    }

    // const days = 1;

    // const ts = Moment().add(days, "days").toDate();
    // confirmProfileProperties(ts)

    // const delayMs = 1 * 24 * 60 * 60 * 1000; // 1 day (for testing)

    // re-enqueue if there is more to do
    if (count > 0) await CLS.enqueueTask(this.name, {});

    return count;
  }
}
