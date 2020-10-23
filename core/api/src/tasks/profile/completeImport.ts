import { api, task } from "actionhero";
import { RetryableTask } from "../../classes/retryableTask";
import { Profile } from "../../models/Profile";
import { Run } from "../../models/Run";
import { Op } from "sequelize";
import { ProfilePropertyType } from "../../modules/ops/profile";

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

    const imports = await profile.$get("imports", {
      where: { profileUpdatedAt: null },
      order: [["createdAt", "asc"]],
    });

    try {
      for (const i in imports) {
        const _import = imports[i];
        await profile.addOrUpdateProperties(_import.data);
      }

      const newProfileProperties = await profile.properties();
      const newGroups = await profile.$get("groups");

      await profile.updateGroupMembership();

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
