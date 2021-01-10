import {
  ConfigurationObject,
  logModel,
  getCodeConfigLockKey,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { plugin } from "../..";
import { Setting } from "../../models/Setting";

export async function loadSetting(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
) {
  validateConfigObjectKeys(Setting, configObject);

  const setting = await plugin.updateSetting(
    configObject.pluginName,
    configObject.key,
    configObject.value
  );

  await setting.update({ locked: getCodeConfigLockKey() });

  logModel(setting, validate ? "validated" : "updated");
  return setting;
}
