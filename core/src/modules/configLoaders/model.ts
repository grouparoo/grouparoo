import {
  ModelConfigurationObject,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { GrouparooModel } from "../../models/GrouparooModel";
import { Op } from "sequelize";

import { ConfigWriter } from "../configWriter";

export async function loadModel(
  configObject: ModelConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  validateConfigObjectKeys(GrouparooModel, configObject);

  let model = await GrouparooModel.scope(null).findOne({
    where: {
      id: configObject.id,
      locked: { [Op.or]: [getCodeConfigLockKey(), null] }, // allow the default model to be modified
    },
  });
  if (!model) {
    isNew = true;
    model = await GrouparooModel.create({
      id: configObject.id,
      name: configObject.name,
      type: configObject.type,
    });
  }

  await model.update({
    type: configObject.type,
    name: configObject.name,
    locked: ConfigWriter.getLockKey(configObject),
  });

  logModel(model, validate ? "validated" : isNew ? "created" : "updated");

  return { model: [model.id] };
}

export async function deleteModels(ids: string[]) {
  const models = await GrouparooModel.scope(null).findAll({
    where: {
      locked: getCodeConfigLockKey(),
      id: { [Op.notIn]: ids },
    },
  });

  for (const i in models) {
    await models[i].update({ state: "deleted", locked: null });
    logModel(models[i], "deleted");
  }

  return models.map((instance) => instance.id);
}
