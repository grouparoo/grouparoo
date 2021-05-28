import {
  ConfigurationObject,
  validateConfigObjectKeys,
  extractNonNullParts,
  logModel,
} from "../../classes/codeConfig";
import { Profile } from "../../models/Profile";

export async function loadProfile(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
) {
  if (process.env.GROUPAROO_RUN_MODE !== "cli:config") return;

  validateConfigObjectKeys(Profile, configObject);

  let profile = await Profile.scope(null).findOne({
    where: { id: configObject.id },
  });

  let isNew = false;
  if (!profile) {
    isNew = true;
    profile = await Profile.create({
      id: configObject.id,
    });
  }

  await profile.addOrUpdateProperties(
    extractNonNullParts(configObject, "properties")
  );

  logModel(
    profile,
    validate ? "validated" : isNew ? "created" : "updated",
    JSON.stringify(configObject.properties)
  );

  return {
    profile: [profile.id],
  };
}
