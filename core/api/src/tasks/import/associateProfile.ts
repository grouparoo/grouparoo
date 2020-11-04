import { Task, api, log, env } from "actionhero";
import { Import } from "../../models/Import";
import { Run } from "../../models/Run";
import { ProfilePropertyType } from "../../modules/ops/profile";
import { Transaction } from "sequelize";

export class ImportAssociateProfile extends Task {
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
      await profile.markPending();

      const oldProfileProperties = await profile.properties();
      const oldGroups = await profile.$get("groups");

      _import.oldProfileProperties = this.simplifyProfileProperties(
        oldProfileProperties
      );
      _import.oldGroupGuids = oldGroups.map((g) => g.guid);
      await _import.save();

      if (_import.creatorType === "run") {
        if (isNew) {
          const run = await Run.findByGuid(_import.creatorGuid);
          await run.incrementWithLock("profilesCreated");
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
