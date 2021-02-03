import {
  ConfigurationObject,
  validateAndFormatId,
  extractNonNullParts,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { App } from "../..";
import { Op } from "sequelize";

export async function loadApp(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
) {
  let isNew = false;
  const id = await validateAndFormatId(App, configObject.id);
  validateConfigObjectKeys(App, configObject);

  let app = await App.scope(null).findOne({
    where: { id, locked: getCodeConfigLockKey() },
  });
  if (!app) {
    isNew = true;
    app = await App.create({
      id,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
      type: configObject.type,
    });
  }

  await app.update({ name: configObject.name });
  await app.setOptions(extractNonNullParts(configObject, "options"));

  if (externallyValidate) {
    const response = await app.test(
      extractNonNullParts(configObject, "options")
    );
    if (!response.success) {
      throw new Error(
        `error testing app ${app.name} (${app.id}) - ${response.error}`
      );
    }
  }

  await app.update({ state: "ready" }, {});

  logModel(app, validate ? "validated" : isNew ? "created" : "updated");

  return app;
}

export async function deleteApps(ids: string[]) {
  const apps = await App.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in apps) {
    await apps[i].destroy();
    logModel(apps[i], "deleted");
  }

  return apps.map((instance) => instance.id);
}
