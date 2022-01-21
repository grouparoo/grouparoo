import {
  SettingConfigurationObject,
  logModel,
  getCodeConfigLockKey,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { plugin } from "../../modules/plugin";
import { Setting } from "../../models/Setting";

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

  logModel(setting, validate ? "validated" : "updated");

  // Settings is a special case that is not in the seenIds
  return {};
}
