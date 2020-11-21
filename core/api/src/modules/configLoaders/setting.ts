import { ConfigurationObject, logModel } from "../../classes/codeConfig";
import { plugin } from "../..";

export async function loadSetting(configObject: ConfigurationObject) {
  const setting = await plugin.updateSetting(
    configObject.pluginName,
    configObject.key,
    configObject.value
  );

  logModel(setting, false);
  return setting;
}
