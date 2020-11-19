import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  getParentByName,
} from "../../classes/codeConfig";
import { App, Source } from "../..";

export async function loadSource(configObject: ConfigurationObject) {
  const app: App = await getParentByName(App, configObject.app);

  let [source, isNew] = await Source.scope(null).findOrCreate({
    where: {
      locked: true,
      name: configObject.name,
      type: configObject.type,
      appGuid: app.guid,
    },
  });
  await source.setOptions(extractNonNullParts(configObject, "options"));

  try {
    await source.setMapping(extractNonNullParts(configObject, "mapping"));
  } catch (error) {
    if (
      error.toString().match(/cannot find profile property rule/) &&
      configObject.bootstrappedProfilePropertyRule
    ) {
      const rule = configObject.bootstrappedProfilePropertyRule;
      const mappedColumn = Object.values(rule.options)[0];
      await source.bootstrapUniqueProfilePropertyRule(
        rule.key || rule.name,
        rule.type,
        mappedColumn
      );
      await source.setMapping(extractNonNullParts(configObject, "mapping"));
    } else {
      throw error;
    }
  }

  await source.update({ state: "ready" });
  logModel(source, isNew);
  return source;
}
