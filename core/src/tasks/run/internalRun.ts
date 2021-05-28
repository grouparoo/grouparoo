import { Run } from "../../models/Run";
import { Profile } from "../../models/Profile";
import { plugin } from "../../modules/plugin";
import { ProfileProperty } from "../../models/ProfileProperty";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Op } from "sequelize";
import { ProfileOps } from "../../modules/ops/profile";

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
    const limit: number =
      run.groupMemberLimit ||
      parseInt(
        (await plugin.readSetting("core", "runs-profile-batch-size")).value
      );

    const profiles = await Profile.findAll({
      order: [["createdAt", "asc"]],
      include: [ProfileProperty],
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
