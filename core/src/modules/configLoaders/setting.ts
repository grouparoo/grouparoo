import {
  ConfigurationObject,
  logModel,
  getCodeConfigLockKey,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { plugin } from "../..";
import { Setting } from "../../models/Setting";
import { Transaction } from "sequelize";

export async function loadSetting(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  transaction?: Transaction
) {
  validateConfigObjectKeys(Setting, configObject);

  const setting = await plugin.updateSetting(
    configObject.pluginName,
    configObject.key,
    configObject.value,
    transaction
  );

  await setting.update({ locked: getCodeConfigLockKey() }, { transaction });

  logModel(setting, transaction ? "validated" : "updated");
  return setting;
}
