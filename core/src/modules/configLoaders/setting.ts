import {
  ConfigurationObject,
  logModel,
  codeConfigLockKey,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { plugin } from "../..";
import { Setting } from "../../models/Setting";

export async function loadSetting(configObject: ConfigurationObject) {
  validateConfigObjectKeys(Setting, configObject);

  const setting = await plugin.updateSetting(
    configObject.pluginName,
    configObject.key,
    configObject.value
  );

  await setting.update({ locked: codeConfigLockKey });

  logModel(setting, "updated");
  return setting;
}
