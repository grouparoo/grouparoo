import {
  ConfigurationObject,
  validateAndFormatId,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { Group } from "../..";
import { Property } from "../../models/Property";
import { Op } from "sequelize";
import { CLS } from "../../modules/cls";

export async function loadGroup(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  const id = await validateAndFormatId(Group, configObject.id);
  validateConfigObjectKeys(Group, configObject);

  let group = await Group.scope(null).findOne({
    where: { id, locked: getCodeConfigLockKey() },
  });
  if (!group) {
    isNew = true;
    group = await Group.create({
      id,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
      type: configObject.type,
    });
  }

  await group.update({ type: configObject.type, name: configObject.name });

  if (configObject.rules) {
    const rules = [...configObject.rules];
    for (const i in rules) {
      if (rules[i]["propertyId"]) {
        const propertyId = await validateAndFormatId(
          Property,
          rules[i]["propertyId"]
        );
        const property = await Property.findById(propertyId);
        delete rules[i]["propertyId"];
        rules[i].key = property.key;
      }
    }

    await group.setRules(group.fromConvenientRules(configObject.rules));
  }

  await group.update({ state: "ready" });

  logModel(group, validate ? "validated" : isNew ? "created" : "updated");

  return { group: [group.id] };
}

export async function deleteGroups(ids: string[]) {
  const groups = await Group.scope(null).findAll({
    where: {
      locked: getCodeConfigLockKey(),
      id: { [Op.notIn]: ids },
      state: { [Op.ne]: "deleted" },
    },
  });

  for (const i in groups) {
    const group = groups[i];
    await group.update({ state: "deleted", locked: null });
    await CLS.enqueueTask("group:destroy", { groupId: group.id });
    logModel(group, "deleted");
  }

  return groups.map((instance) => instance.id);
}
