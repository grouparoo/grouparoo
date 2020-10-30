import { api, task } from "actionhero";
import { Profile } from "../../models/Profile";
import { Run } from "../../models/Run";
import { Op } from "sequelize";
import { ProfilePropertyType } from "../../modules/ops/profile";
import { RetryableTask } from "../../classes/retryableTask";

export class ProfileCompleteImport extends RetryableTask {
  constructor() {
    super();
    this.name = "profile:completeImport";
    this.description =
      "Once the profile properties are imported, update runs, imports, and groups then export";
    this.frequency = 0;
    this.queue = "profiles";
    this.inputs = {
      profileGuid: { required: true },
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
    const profile = await Profile.findOne({
      where: { guid: params.profileGuid },
    });

    if (!profile) return; // the profile may have been deleted or merged by the time this task ran

    // calling this task implies we expect the profile to be in the ready state
    if (profile.state !== "ready") {
      try {
        await profile.update({ state: "ready" });
      } catch (error) {
        if (
          error.toString().match(/cannot transition profile .* to ready state/)
        ) {
          // it's OK.  The next run of profile:checkReady will check this profile again
          return;
        } else {
          throw error;
        }
      }
    }

    const imports = await profile.$get("imports", {
      where: { profileUpdatedAt: null },
      order: [["createdAt", "asc"]],
    });

    try {
      for (const i in imports) {
        const _import = imports[i];
        await profile.addOrUpdateProperties(_import.data);
      }

      await profile.updateGroupMembership();

      const newProfileProperties = await profile.properties();
      const newGroups = await profile.$get("groups");

      for (const i in imports) {
        const _import = imports[i];
        _import.newProfileProperties = this.simplifyProfileProperties(
          newProfileProperties
        );
        _import.profileUpdatedAt = new Date();
        _import.newGroupGuids = newGroups.map((g) => g.guid);
        _import.groupsUpdatedAt = new Date();
        await _import.save();
      }

      const transaction = await api.sequelize.transaction();
      let force = false;

      try {
        const runs = await Run.findAll({
          where: {
            guid: {
              [Op.in]: imports
                .filter((e) => e.creatorType === "run")
                .map((e) => e.creatorGuid),
            },
          },
          transaction,
        });

        for (const i in runs) {
          const run = runs[i];
          await run.increment("profilesImported", {
            silent: true,
            transaction,
          });
          run.set("updatedAt", new Date());
          await run.save({ transaction });
          if (run.force) force = true;
        }

        await transaction.commit();
      } catch (error) {
        await transaction.rollback();
        throw error;
      }

      await task.enqueue("profile:export", {
        profileGuid: profile.guid,
        force,
      });
    } catch (error) {
      await Promise.all(imports.map((e) => e.setError(error, this.name)));
      throw error;
    }
  }
}
