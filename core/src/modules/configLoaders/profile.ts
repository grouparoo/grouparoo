import {
  ConfigurationObject,
  validateConfigObjectKeys,
  extractNonNullParts,
  logModel,
} from "../../classes/codeConfig";
import { Profile } from "../../models/Profile";
import { Property } from "../../models/Property";

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

  const nonNullProperties = extractNonNullParts(configObject, "properties");

  const directlyMappedProperties = (await Property.findAllWithCache())
    .filter((p) => p.directlyMapped === true)
    .map((p) => p.id);

  let hasDirectlyMapped = false;
  for (const propertyId in nonNullProperties) {
    if (directlyMappedProperties.includes(propertyId)) {
      hasDirectlyMapped = true;
      break;
    }
  }

  const serializedProps = JSON.stringify(nonNullProperties);

  if (!hasDirectlyMapped) {
    throw new Error(
      `there are no directly mapped profile properties provided in ${serializedProps}`
    );
  }

  await profile.addOrUpdateProperties(nonNullProperties);

  logModel(
    profile,
    validate ? "validated" : isNew ? "created" : "updated",
    serializedProps
  );

  return {
    profile: [profile.id],
  };
}
