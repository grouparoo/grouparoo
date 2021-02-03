import { config } from "actionhero";
import { CLS } from "../../modules/cls";
import { Run } from "../../models/Run";
import { Import } from "../../models/Import";
import { Profile } from "../../models/Profile";
import { plugin } from "../../modules/plugin";
import { ProfileProperty } from "../../models/ProfileProperty";
import { ProfilePropertyType } from "../../modules/ops/profile";
import { waitForLock } from "../../modules/locks";
import { CLSTask } from "../../classes/tasks/clsTask";

export class RunInternalRun extends CLSTask {
  constructor() {
    super();
    this.name = "run:internalRun";
    this.description = "build imports that will check and sync all profiles";
    this.frequency = 0;
    this.queue = "runs";
    this.inputs = {
      runId: { required: true },
      limit: { required: false },
      offset: { required: false },
    };
  }

  async updateProfileWithLock(profile: Profile, run: Run) {
    const { releaseLock } = await waitForLock(`profile:${profile.id}`);

    try {
      const oldProfileProperties = await profile.simplifiedProperties();
      const oldGroups = await profile.$get("groups");

      await profile.buildNullProperties("pending");

      await Import.create({
        profileId: profile.id,
        profileAssociatedAt: new Date(),
        oldProfileProperties: oldProfileProperties,
        oldGroupIds: oldGroups.map((g) => g.id),
        rawData: {},
        data: {},
        creatorType: "run",
        creatorId: run.id,
      });

      if (run.creatorType === "property") {
        const property = await ProfileProperty.findOne({
          where: {
            profileId: profile.id,
            propertyId: run.creatorId,
          },
        });

        await property?.update({ state: "pending" });
        await profile.update({ state: "pending" });
      } else {
        await profile.markPending();
      }
    } finally {
      await releaseLock();
    }
  }

  async runWithinTransaction(params) {
    const offset: number = params.offset || 0;
    const limit: number =
      params.limit ||
      parseInt(
        (await plugin.readSetting("core", "runs-profile-batch-size")).value
      );

    const run = await Run.scope(null).findOne({
      where: { id: params.runId },
    });

    if (!run) return;
    if (run.state === "stopped") return;

    await run.update(
      {
        groupMemberLimit: limit,
        groupMemberOffset: offset,
        groupMethod: "internalRun",
      },
      { silent: true }
    );

    const profiles = await Profile.findAll({
      order: [["createdAt", "asc"]],
      limit,
      offset,
    });

    for (const i in profiles) {
      const profile = profiles[i];
      await this.updateProfileWithLock(profile, run);
    }

    await run.afterBatch();

    if (profiles.length > 0) {
      await CLS.enqueueTaskIn(config.tasks.timeout + 1, this.name, {
        runId: run.id,
        offset: offset + limit,
        limit,
      });
    } else {
      await run.afterBatch("complete");
    }
  }
}
