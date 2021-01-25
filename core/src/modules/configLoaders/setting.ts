import {
  ConfigurationObject,
  logModel,
  getCodeConfigLockKey,
  validateConfigObjectKeys,
  GuidsByClass,
} from "../../classes/codeConfig";
import { plugin } from "../..";
import { Setting } from "../../models/Setting";

export async function loadSetting(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<GuidsByClass> {
  validateConfigObjectKeys(Setting, configObject);

  const setting = await plugin.updateSetting(
    configObject.pluginName,
    configObject.key,
    configObject.value
  );

  await setting.update({ locked: getCodeConfigLockKey() });

  logModel(setting, validate ? "validated" : "updated");

  // Settings is a special case that is not in the SeenGuids
  return {};
}
