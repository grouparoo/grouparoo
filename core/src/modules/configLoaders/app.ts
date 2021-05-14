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

import { ConfigWriter } from "../configWriter";

export async function loadApp(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  validateConfigObjectKeys(App, configObject);

  let locked: string;
  if (process.env.GROUPAROO_RUN_MODE !== "cli:config") {
    locked = getCodeConfigLockKey();
  } else if (ConfigWriter.isLockable(configObject)) {
    locked = ConfigWriter.getLockKey();
  }

  let getParams: { id: string; locked?: string } = { id: configObject.id };
  if (locked) getParams.locked = locked;

  let createParams: {
    id: string;
    name: string;
    type: string;
    locked?: string;
  } = {
    id: configObject.id,
    name: configObject.name,
    type: configObject.type,
  };
  if (locked) createParams.locked = locked;

  let app = await App.scope(null).findOne({
    where: getParams,
  });
  if (!app) {
    isNew = true;
    app = await App.create(createParams);
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
    logModel(apps[i], "deleted");
  }

  return apps.map((instance) => instance.id);
}
