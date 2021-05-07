import {
  ConfigurationObject,
  extractNonNullParts,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { App } from "../..";
import { Op } from "sequelize";
import { CLS } from "../cls";

export async function loadApp(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  validateConfigObjectKeys(App, configObject);

  let app = await App.scope(null).findOne({
    where: { id: configObject.id, locked: getCodeConfigLockKey() },
  });
  if (!app) {
    isNew = true;
    app = await App.create({
      id: configObject.id,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
      type: configObject.type,
    });
  }

  await app.update({ type: configObject.type, name: configObject.name });
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

  return { app: [app.id] };
}

export async function deleteApps(ids: string[]) {
  const apps = await App.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in apps) {
    await apps[i].update({ state: "deleted", locked: null });
    await CLS.enqueueTask("app:destroy", { appId: apps[i].id });
    logModel(apps[i], "deleted");
  }

  return apps.map((instance) => instance.id);
}
