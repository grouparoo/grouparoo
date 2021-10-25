import {
  AppConfigurationObject,
  extractNonNullParts,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { App } from "../..";
import { Op } from "sequelize";

import { ConfigWriter } from "../configWriter";
import { AppDataRefresh } from "../../models/AppDataRefresh";

export async function loadApp(
  configObject: AppConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  validateConfigObjectKeys(App, configObject, ["refreshQuery"]);

  let app = await App.scope(null).findOne({
    where: {
      id: configObject.id,
      [Op.or]: {
        locked: getCodeConfigLockKey(),
        state: "deleted",
      },
    },
  });
  if (!app) {
    isNew = true;
    app = await App.create({
      id: configObject.id,
      name: configObject.name,
      type: configObject.type,
    });
  }

  await app.update({
    type: configObject.type,
    name: configObject.name,
    locked: ConfigWriter.getLockKey(configObject),
  });

  const options = extractNonNullParts(configObject, "options");
  if (options) await app.setOptions(options);

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

  if (configObject.refreshQuery && configObject.refreshQuery !== "") {
    let appDataRefresh: AppDataRefresh;

    appDataRefresh = await AppDataRefresh.findOne({
      where: {
        appId: configObject.id,
      },
    });

    if (appDataRefresh === null) {
      appDataRefresh = await AppDataRefresh.create({
        appId: configObject.id,
        refreshQuery: configObject.refreshQuery,
      });
      isNew = true;
    }

    await appDataRefresh.update({
      appId: configObject.id,
      refreshQuery: configObject.refreshQuery,
      locked: ConfigWriter.getLockKey(configObject),
      state: "ready",
    });

    logModel(
      appDataRefresh,
      validate ? "validated" : isNew ? "created" : "updated"
    );
  }

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
