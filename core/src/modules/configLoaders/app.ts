import {
  ConfigurationObject,
  validateAndFormatGuid,
  extractNonNullParts,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { App } from "../..";
import { Op, Transaction } from "sequelize";

export async function loadApp(
  configObject: ConfigurationObject,
  transaction?: Transaction
) {
  let isNew = false;
  const guid = await validateAndFormatGuid(App, configObject.id);
  validateConfigObjectKeys(App, configObject);

  let app = await App.scope(null).findOne({
    where: { guid, locked: getCodeConfigLockKey() },
    transaction,
  });
  if (!app) {
    isNew = true;
    app = await App.create(
      {
        guid,
        locked: getCodeConfigLockKey(),
        name: configObject.name,
        type: configObject.type,
      },
      { transaction }
    );
  }

  await app.update({ name: configObject.name }, { transaction });
  await app.setOptions(
    extractNonNullParts(configObject, "options"),
    transaction
  );

  const response = await app.test(
    extractNonNullParts(configObject, "options"),
    transaction
  );
  if (!response.success) {
    throw new Error(
      `error testing app ${app.name} (${app.guid}) - ${response.error}`
    );
  }

  await app.update({ state: "ready" }, { transaction });

  logModel(app, transaction ? "validated" : isNew ? "created" : "updated");

  return app;
}

export async function deleteApps(guids: string[], transaction?: Transaction) {
  const apps = await App.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), guid: { [Op.notIn]: guids } },
  });

  for (const i in apps) {
    await apps[i].destroy({ transaction });
    logModel(apps[i], "deleted");
  }

  return apps.map((instance) => instance.guid);
}
