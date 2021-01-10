import { log, env, Task } from "actionhero";
import { Import } from "../../models/Import";
import { ProfilePropertyType } from "../../modules/ops/profile";

export class ImportAssociateProfile extends Task {
  // This Task extends Task rather than CLSTask as we want to be able to view newly created profiles happening in parallel to this task/transaction
  // This Task has no side effects
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
