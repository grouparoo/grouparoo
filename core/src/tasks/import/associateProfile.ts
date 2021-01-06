import { log, env } from "actionhero";
import { CLSTask } from "../../classes/tasks/clsTask";
import { Import } from "../../models/Import";
import { ProfilePropertyType } from "../../modules/ops/profile";

export class ImportAssociateProfile extends CLSTask {
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

  async runWithinTransaction(params) {
    const { importGuid } = params;
    const _import = await Import.findByGuid(importGuid);

    try {
      const { profile, isNew } = await _import.associateProfile();
      await profile.markPending();

      const oldProfileProperties = await profile.properties();
      const oldGroups = await profile.$get("groups");

      _import.createdProfile = isNew;
      _import.oldProfileProperties = this.simplifyProfileProperties(
        oldProfileProperties
      );
      _import.oldGroupGuids = oldGroups.map((g) => g.guid);
      await _import.save();
    } catch (error) {
      if (env !== "test") log(`[ASSOCIATE PROFILE ERROR] ${error}`, "alert");
      await _import.setError(error, this.name);
    }
  }
}
