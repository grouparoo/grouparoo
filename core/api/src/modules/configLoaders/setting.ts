import {
  ConfigurationObject,
  logModel,
  codeConfigLockKey,
} from "../../classes/codeConfig";
import { plugin } from "../..";

export async function loadSetting(configObject: ConfigurationObject) {
  const setting = await plugin.updateSetting(
    configObject.pluginName,
    configObject.key,
    configObject.value
  );

  await setting.update({ locked: codeConfigLockKey });

  logModel(setting, false);
  return setting;
}
