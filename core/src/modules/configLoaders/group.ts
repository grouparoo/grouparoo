import {
  ConfigurationObject,
  validateAndFormatGuid,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { Group } from "../..";
import { Property } from "../../models/Property";
import { Op } from "sequelize";
import { api } from "actionhero";

export async function loadGroup(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
) {
  let isNew = false;
  const guid = await validateAndFormatGuid(Group, configObject.id);
  validateConfigObjectKeys(Group, configObject);

  let group = await Group.scope(null).findOne({
    where: { guid, locked: getCodeConfigLockKey() },
  });
  if (!group) {
    isNew = true;
    group = await Group.create({
      guid,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
      type: configObject.type,
    });
  }

  await group.update({ name: configObject.name });

  if (configObject.rules) {
    const rules = [...configObject.rules];
    for (const i in rules) {
      if (rules[i]["propertyId"]) {
        const propertyGuid = await validateAndFormatGuid(
          Property,
          rules[i]["propertyId"]
        );
        const property = await Property.findByGuid(propertyGuid);
        delete rules[i]["propertyId"];
        rules[i].key = property.key;
      }
    }

    await group.setRules(group.fromConvenientRules(configObject.rules));
  }

  await group.update({ state: "ready" });

  logModel(group, validate ? "validated" : isNew ? "created" : "updated");

  return group;
}

export async function deleteGroups(guids: string[]) {
  const groups = await Group.scope(null).findAll({
    where: {
      locked: getCodeConfigLockKey(),
      guid: { [Op.notIn]: guids },
      state: { [Op.ne]: "deleted" },
    },
  });

  for (const i in groups) {
    const group = groups[i];
    await group.update({ state: "deleted", locked: null });
    await api.cls.enqueueTask("group:destroy", { groupGuid: group.guid });
    logModel(group, "deleted");
  }

  return groups.map((instance) => instance.guid);
}
