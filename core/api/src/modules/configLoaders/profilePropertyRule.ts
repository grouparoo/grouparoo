import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
} from "../../classes/codeConfig";
import { ProfilePropertyRule, Source } from "../..";

export async function loadProfilePropertyRule(
  configObject: ConfigurationObject
) {
  const source: Source = await getParentByName(Source, configObject.source);
  let [profilePropertyRule, isNew] = await ProfilePropertyRule.scope(
    null
  ).findOrCreate({
    where: {
      locked: true,
      key: configObject.key || configObject.name,
      type: configObject.type,
      sourceGuid: source.guid,
    },
  });
  await profilePropertyRule.setOptions(
    extractNonNullParts(configObject, "options")
  );
  await profilePropertyRule.update({ state: "ready" });
  logModel(profilePropertyRule, isNew);
  return profilePropertyRule;
}
