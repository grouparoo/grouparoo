import {
  SettingConfigurationObject,
  logModel,
  getCodeConfigLockKey,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { plugin, Setting } from "../.."; // configLoader imports need to be from root

export async function loadSetting(
  configObject: SettingConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  validateConfigObjectKeys(Setting, configObject);

  const setting = await plugin.updateSetting(
    configObject.pluginName,
    configObject.key,
    configObject.value
  );

  await setting.update({ locked: getCodeConfigLockKey() });

  logModel<Setting>(setting, validate ? "validated" : "updated");

  // Settings is a special case that is not in the seenIds
  return {};
}
