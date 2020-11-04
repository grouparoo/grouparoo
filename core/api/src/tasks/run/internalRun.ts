import { Task, task, api, config } from "actionhero";
import { Run } from "../../models/Run";
import { Import } from "../../models/Import";
import { Profile } from "../../models/Profile";
import { plugin } from "../../modules/plugin";
import { Transaction } from "sequelize";
import { ProfileProperty } from "../../models/ProfileProperty";
import { ProfilePropertyType } from "../../modules/ops/profile";

export class RunInternalRun extends Task {
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

  async run(params) {
    const offset: number = params.offset || 0;
    const limit: number =
      params.limit ||
      parseInt(
        (await plugin.readSetting("core", "runs-profile-batch-size")).value
      );

    const transaction = await api.sequelize.transaction({
      type: Transaction.TYPES.EXCLUSIVE,
      lock: Transaction.LOCK.UPDATE,
    });

    try {
      const run = await Run.findOne({
        where: { guid: params.runGuid },
        transaction,
      });

      if (run.state === "stopped") {
        await transaction.rollback();
        return;
      }

      await run.update(
        {
          groupMemberLimit: limit,
          groupMemberOffset: offset,
          groupMethod: "internalRun",
        },
        { transaction, silent: true }
      );

      const profiles = await Profile.findAll({
        order: [["createdAt", "asc"]],
        limit,
        offset,
        transaction,
      });

      for (const i in profiles) {
        const profile = profiles[i];

        const oldProfileProperties = await profile.properties();
        const oldGroups = await profile.$get("groups");

        await profile.buildNullProperties();

        await Import.create(
          {
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
          },
          { transaction }
        );

        if (run.creatorType === "profilePropertyRule") {
          await profile.update({ state: "pending" }, { transaction });
          const property = await ProfileProperty.findOne({
            where: {
              profileGuid: profile.guid,
              profilePropertyRuleGuid: run.creatorGuid,
            },
          });
          await property.update(
            {
              state: "pending",
              stateChangedAt: new Date(),
            },
            { transaction }
          );
        } else {
          await profile.markPending();
        }
      }

      await transaction.commit();

      await run.incrementWithLock("importsCreated", profiles.length);
      await run.afterBatch();

      if (profiles.length > 0) {
        await task.enqueueIn(config.tasks.timeout + 1, this.name, {
          runGuid: run.guid,
          offset: offset + limit,
          limit,
        });
      } else {
        await run.afterBatch("complete");
      }
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}
