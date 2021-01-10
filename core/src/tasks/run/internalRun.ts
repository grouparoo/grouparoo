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
      runGuid: { required: true },
      limit: { required: false },
      offset: { required: false },
    };
  }

  simplifyProfileProperties(complexProperties: ProfilePropertyType) {
    const simpleProperties = {};
    for (let key in complexProperties) {
      simpleProperties[key] = complexProperties[key].values;
    }

    return simpleProperties;
  }

  async updateProfileWithLock(profile: Profile, run: Run) {
    const { releaseLock } = await waitForLock(`profile:${profile.guid}`);

    try {
      const oldProfileProperties = await profile.properties();
      const oldGroups = await profile.$get("groups");

      await profile.buildNullProperties("pending");

      await Import.create({
        profileGuid: profile.guid,
        profileAssociatedAt: new Date(),
        oldProfileProperties: this.simplifyProfileProperties(
          oldProfileProperties
        ),
        oldGroupGuids: oldGroups.map((g) => g.guid),
        rawData: {},
        data: {},
        creatorType: "run",
        creatorGuid: run.guid,
      });

      if (run.creatorType === "property") {
        const property = await ProfileProperty.findOne({
          where: {
            profileGuid: profile.guid,
            propertyGuid: run.creatorGuid,
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
      where: { guid: params.runGuid },
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
        runGuid: run.guid,
        offset: offset + limit,
        limit,
      });
    } else {
      await run.afterBatch("complete");
    }
  }
}
