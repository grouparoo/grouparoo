import { task } from "actionhero";
import { RetryableTask } from "../../classes/retryableTask";
import { Profile } from "../../models/Profile";
import { Run } from "../../models/Run";
import { GroupMember } from "../../models/GroupMember";
import { Op } from "sequelize";

export class ProfileImportAndUpdate extends RetryableTask {
  constructor() {
    super();
    this.name = "profile:importAndUpdate";
    this.description =
      "ask every app to update their information about this profile";
    this.frequency = 0;
    this.queue = "profiles";
    this.inputs = {
      guid: { required: true },
    };
  }

  simplifyProfileProperties(complexProperties) {
    const simpleProperties = {};
    for (let key in complexProperties) {
      simpleProperties[key] = complexProperties[key].value;
    }

    return simpleProperties;
  }

  async run(params) {
    const profile = await Profile.findOne({ where: { guid: params.guid } });
    // the profile may have been deleted or merged by the time this task ran
    if (!profile) {
      return;
    }

    const oldProfileProperties = await profile.properties();

    const oldGroupGuids = (
      await GroupMember.findAll({
        where: { profileGuid: profile.guid },
      })
    ).map((member) => member.groupGuid);

    const imports = await profile.$get("imports", {
      where: { profileUpdatedAt: null },
      order: [["createdAt", "asc"]],
    });

    try {
      for (const i in imports) {
        const _import = imports[i];
        await profile.addOrUpdateProperties(_import.data);
      }

      await profile.import();
      const newProfileProperties = await profile.properties();

      await profile.updateGroupMembership();

      const newGroupGuids = (
        await GroupMember.findAll({
          where: { profileGuid: profile.guid },
        })
      ).map((member) => member.groupGuid);

      for (const i in imports) {
        // All the imports in this batch will have the full set of old ane new properties, even if they didn't directly contribute to the new property
        // This will be safer for exports, as each import will have the largest possible set of changed properties
        // This set will also cover properties derived from profile#import, via no import in particular
        const _import = imports[i];
        _import.oldProfileProperties =
          !_import.oldProfileProperties ||
          Object.keys(_import.oldProfileProperties).length === 0
            ? this.simplifyProfileProperties(oldProfileProperties)
            : _import.oldProfileProperties;
        _import.newProfileProperties = this.simplifyProfileProperties(
          newProfileProperties
        );
        _import.profileUpdatedAt = new Date();

        _import.oldGroupGuids =
          !_import.oldGroupGuids || _import.oldGroupGuids.length === 0
            ? oldGroupGuids
            : _import.oldGroupGuids;
        _import.newGroupGuids = newGroupGuids;
        _import.groupsUpdatedAt = new Date();

        await _import.save();
      }

      const runs = await Run.findAll({
        where: {
          guid: {
            [Op.in]: imports
              .filter((e) => e.creatorType === "run")
              .map((e) => e.creatorGuid),
          },
        },
      });

      for (const i in runs) {
        const run = runs[i];
        await run.increment("profilesImported", {});
      }

      await task.enqueue("profile:export", {
        guid: profile.guid,
      });
    } catch (error) {
      await Promise.all(imports.map((e) => e.setError(error, this.name)));
      throw error;
    }
  }
}
