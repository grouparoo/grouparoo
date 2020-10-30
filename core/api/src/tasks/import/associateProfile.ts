import { api, log, env } from "actionhero";
import { RetryableTask } from "../../classes/retryableTask";
import { Import } from "../../models/Import";
import { Run } from "../../models/Run";
import { ProfileOps, ProfilePropertyType } from "../../modules/ops/profile";

export class ImportAssociateProfile extends RetryableTask {
  constructor() {
    super();
    this.name = "import:associateProfile";
    this.description = "find or create the profile this import is about";
    this.frequency = 0;
    this.queue = "imports";
    this.inputs = {
      importGuid: { required: true },
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
    const { importGuid } = params;
    const _import = await Import.findByGuid(importGuid);

    try {
      const { profile, isNew } = await _import.associateProfile();
      await ProfileOps.markPending(profile);

      const oldProfileProperties = await profile.properties();
      const oldGroups = await profile.$get("groups");

      _import.oldProfileProperties = this.simplifyProfileProperties(
        oldProfileProperties
      );
      _import.oldGroupGuids = oldGroups.map((g) => g.guid);
      await _import.save();

      if (_import.creatorType === "run") {
        const transaction = await api.sequelize.transaction();

        try {
          const run = await Run.findOne({
            where: { guid: _import.creatorGuid },
            transaction,
          });
          if (!run) throw new Error(`run ${_import.creatorGuid} not found`);

          if (isNew) {
            await run.increment(["profilesCreated"], {
              transaction,
              silent: true,
            });
            run.set("updatedAt", new Date());
            await run.save({ transaction });
          }

          await transaction.commit();
        } catch (error) {
          await transaction.rollback();
          throw error;
        }
      }
    } catch (error) {
      if (env !== "test") {
        log(`[ASSOCIATE PROFILE ERROR] ${error}`, "alert");
      }
      await _import.setError(error, this.name);
      throw error;
    }
  }
}
