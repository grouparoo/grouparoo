import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  validateAndFormatGuid,
} from "../../classes/codeConfig";
import { App, Source, ProfilePropertyRule } from "../..";

export async function loadSource(configObject: ConfigurationObject) {
  let isNew = false;

  const app: App = await getParentByName(App, configObject.appId);

  const guid = await validateAndFormatGuid(Source, configObject.id);
  let source = await Source.scope(null).findOne({
    where: { guid, appGuid: app.guid },
  });
  if (!source) {
    isNew = true;
    source = await Source.create({
      guid,
      locked: true,
      name: configObject.name,
      type: configObject.type,
      appGuid: app.guid,
    });
  }

  await source.update({ name: configObject.name });

  await source.setOptions(extractNonNullParts(configObject, "options"));

  let bootstrappedRule: ProfilePropertyRule;
  let mappedProfileProperty: ProfilePropertyRule;
  let mapping = {};

  async function setMapping() {
    mappedProfileProperty = await getParentByName(
      ProfilePropertyRule,
      Object.values(extractNonNullParts(configObject, "mapping"))[0]
    );
    mapping[Object.keys(extractNonNullParts(configObject, "mapping"))[0]] =
      mappedProfileProperty.key;
    await source.setMapping(mapping);
  }

  try {
    await setMapping();
    if (configObject.bootstrappedProfilePropertyRule) {
      bootstrappedRule = await ProfilePropertyRule.findOne({
        where: {
          guid: await validateAndFormatGuid(
            ProfilePropertyRule,
            configObject.bootstrappedProfilePropertyRule.id
          ),
        },
      });
    }
  } catch (error) {
    if (
      error.toString().match(/cannot find ProfilePropertyRule/) &&
      configObject.bootstrappedProfilePropertyRule
    ) {
      const rule = configObject.bootstrappedProfilePropertyRule;
      const mappedColumn = Object.values(rule.options)[0];
      bootstrappedRule = await source.bootstrapUniqueProfilePropertyRule(
        rule.key || rule.name,
        rule.type,
        mappedColumn,
        await validateAndFormatGuid(ProfilePropertyRule, rule.id)
      );
      await setMapping();
    } else {
      throw error;
    }
  }

  await source.update({ state: "ready" });

  if (isNew) await bootstrappedRule.update({ locked: true });

  logModel(source, isNew);
  if (bootstrappedRule) logModel(bootstrappedRule, isNew);

  return source;
}
