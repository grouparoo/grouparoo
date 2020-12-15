import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
  codeConfigLockKey,
  validateAndFormatGuid,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { App, Source, Property } from "../..";
import { Op } from "sequelize";

export async function loadSource(configObject: ConfigurationObject) {
  let isNew = false;

  const app: App = await getParentByName(App, configObject.appId);

  const guid = await validateAndFormatGuid(Source, configObject.id);
  validateConfigObjectKeys(Source, configObject);

  let source = await Source.scope(null).findOne({
    where: { guid, locked: codeConfigLockKey, appGuid: app.guid },
  });
  if (!source) {
    isNew = true;
    source = await Source.create({
      guid,
      locked: codeConfigLockKey,
      name: configObject.name,
      type: configObject.type,
      appGuid: app.guid,
    });
  }

  await source.update({ name: configObject.name });

  await source.setOptions(extractNonNullParts(configObject, "options"));

  let bootstrappedRule: Property;
  let mappedProfileProperty: Property;
  let mapping = {};

  async function setMapping() {
    if (configObject.mapping) {
      mappedProfileProperty = await getParentByName(
        Property,
        Object.values(extractNonNullParts(configObject, "mapping"))[0]
      );
      mapping[Object.keys(extractNonNullParts(configObject, "mapping"))[0]] =
        mappedProfileProperty.key;
      await source.setMapping(mapping);
    }
  }

  try {
    await setMapping();
    if (configObject.bootstrappedProperty) {
      bootstrappedRule = await Property.findOne({
        where: {
          guid: await validateAndFormatGuid(
            Property,
            configObject.bootstrappedProperty.id
          ),
        },
      });
    }
  } catch (error) {
    if (
      error.toString().match(/cannot find Property/) &&
      configObject.bootstrappedProperty
    ) {
      const rule = configObject.bootstrappedProperty;
      if (!rule || !rule.options) throw error;
      const mappedColumn = Object.values(rule.options)[0];
      bootstrappedRule = await source.bootstrapUniqueProperty(
        rule.key || rule.name,
        rule.type,
        mappedColumn,
        await validateAndFormatGuid(Property, rule.id)
      );
      await setMapping();
    } else {
      throw error;
    }
  }

  await source.update({ state: "ready" });

  if (isNew && bootstrappedRule) {
    await bootstrappedRule.update({ locked: codeConfigLockKey });
  }

  logModel(source, isNew ? "created" : "updated");
  if (bootstrappedRule) {
    logModel(bootstrappedRule, isNew ? "created" : "updated");
  }

  return source;
}

export async function deleteSources(guids: string[]) {
  const sources = await Source.scope(null).findAll({
    where: { locked: codeConfigLockKey, guid: { [Op.notIn]: guids } },
  });

  for (const i in sources) {
    const source = sources[i];
    const rules = await source.$get("properties");

    for (const j in rules) {
      const rule = rules[j];
      if (rule.directlyMapped) {
        //@ts-ignore
        await rule.destroy({ hooks: false });
        await Property.stopRuns(rule);
        await Property.destroyOptions(rule);
        await Property.destroyPropertyFilters(rule);
        await Property.destroyProfileProperties(rule);
      }
    }

    await source.destroy();
    logModel(source, "deleted");
  }
}
