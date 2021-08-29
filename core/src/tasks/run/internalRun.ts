import { config } from "actionhero";
import { Run } from "../../models/Run";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Op } from "sequelize";
import { ProfileOps } from "../../modules/ops/profile";
import { Import } from "../../models/Import";
import { GroupMember } from "../../models/GroupMember";

export class RunInternalRun extends CLSTask {
  constructor() {
    super();
    this.name = "run:internalRun";
    this.description = "build imports that will check and sync all profiles";
    this.frequency = 0;
    this.queue = "runs";
    this.inputs = {
      runId: { required: true },
    };
  }

  async runWithinTransaction(params) {
    const run = await Run.scope(null).findOne({
      where: { id: params.runId },
    });

    if (!run) return;
    if (run.state === "stopped") return;

    const offset: number = run.groupMemberOffset || 0;
    const limit: number = run.groupMemberLimit || config.batchSize.imports;

    const profiles = await Profile.findAll({
      order: [["createdAt", "asc"]],
      include: [ProfileProperty, GroupMember],
      limit,
      offset,
    });

    if (profiles.length > 0) {
      if (run.creatorType === "property") {
        // ensure the property exists and set this property to pending for these profiles
        await ProfileOps.buildNullProperties(profiles);

        await ProfileProperty.update(
          { state: "pending" },
          {
            where: {
              profileId: { [Op.in]: profiles.map((p) => p.id) },
              propertyId: run.creatorId,
            },
          }
        );
      } else {
        // set all properties to pending for these profiles
        await ProfileProperty.update(
          { state: "pending" },
          { where: { profileId: { [Op.in]: profiles.map((p) => p.id) } } }
        );
      }

      // always mark the profile as pending
      await Profile.update(
        { state: "pending" },
        { where: { id: { [Op.in]: profiles.map((p) => p.id) } } }
      );

      // create imports to track the lineage of the profile property values
      const now = new Date();
      const bulkImports = [];

      for (const profile of profiles) {
        const oldProfileProperties = await profile.simplifiedProperties();
        const oldGroupIds = profile.groupMembers.map((gm) => gm.groupId);

        bulkImports.push({
          profileId: profile.id,
          profileAssociatedAt: now,
          oldProfileProperties,
          oldGroupIds,
          creatorType: "run",
          creatorId: run.id,
        });
      }

      await Import.bulkCreate(bulkImports);
    }

    await run.update({
      groupMemberLimit: limit,
      groupMemberOffset: offset + profiles.length,
    });

    if (profiles.length === 0) {
      await run.afterBatch("complete");
      return 0;
    } else {
      await run.afterBatch();
    }

    return profiles.length;
  }
}
