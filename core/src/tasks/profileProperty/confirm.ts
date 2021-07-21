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
import { ProfileOps } from "../../modules/ops/profile";
import { GroupMember } from "../../models/GroupMember";
import { Import } from "../../models/Import";

export class ProfilePropertiesEnqueue extends CLSTask {
  constructor() {
    super();
    this.name = "profileProperties:confirm";
    this.description =
      "Confirm that directlyMapped profile properties still exist";
    this.frequency = 1000 * 30;
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

    const profiles = await Profile.findAll({
      limit,
      where: { state: "ready" },
      include: [
        GroupMember,
        {
          model: ProfileProperty,
          required: true,
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
        },
      ],
    });

    const now = new Date();

    const bulkImports = [];
    for (const profile of profiles) {
      delete profile.profileProperties; // get all profile properties
      const oldProfileProperties = await profile.simplifiedProperties();
      const oldGroupIds = profile.groupMembers.map((gm) => gm.groupId);

      bulkImports.push({
        profileId: profile.id,
        profileAssociatedAt: now,
        oldProfileProperties,
        oldGroupIds,
        creatorType: "task",
        creatorId: this.name,
      });
    }

    await Import.bulkCreate(bulkImports);
    await ProfileOps.markPendingByIds(profiles.map((p) => p.id));

    return profiles.length;
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
        limit - count,
        latestRunAt,
        schedule.sourceId
      );
    }

    const days = 1;
    const nextConfirmAt = Moment().subtract(days, "days").toDate();
    count += await this.confirmProfileProperties(limit - count, nextConfirmAt);

    // re-enqueue if there is more to do
    if (count > 0) await CLS.enqueueTask(this.name, {});

    return count;
  }
}
