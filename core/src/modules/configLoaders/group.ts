import {
  ConfigurationObject,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { Group } from "../..";
import { Property } from "../../models/Property";
import { Op } from "sequelize";

import { ConfigWriter } from "../configWriter";

export async function loadGroup(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  validateConfigObjectKeys(Group, configObject);

  let group = await Group.scope(null).findOne({
    where: {
      id: configObject.id,
      [Op.or]: {
        locked: getCodeConfigLockKey(),
        state: "deleted",
      },
    },
  });
  if (!group) {
    isNew = true;
    group = await Group.create({
      id: configObject.id,
      name: configObject.name,
      type: configObject.type,
    });
  }

  await group.update({
    type: configObject.type,
    name: configObject.name,
    locked: ConfigWriter.getLockKey(configObject),
  });

  const previousState = group.state;
  await group.update({ state: "ready" });

  if (configObject.rules) {
    const rules = [...configObject.rules];
    const calculatesWithDate = ["lte", "gt", "lt", "gte", "eq", "ne"];

    for (const i in rules) {
      if (rules[i]["propertyId"]) {
        const property = await Property.findById(rules[i]["propertyId"]);
        delete rules[i]["propertyId"];
        rules[i].key = property.key;

        // if calculating based on a date, parse to unix timestamp
        if (calculatesWithDate.indexOf(rules[i]["operation"]["op"]) >= 0) {
          if (property.type === "date") {
            rules[i]["match"] = Date.parse(rules[i]["match"].toString());
          }
        }
      }
    }

    await group.setRules(group.fromConvenientRules(configObject.rules));
  }

  if (previousState === "deleted") {
    await group.run();
  }

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
    logModel(group, "deleted");
  }

  return groups.map((instance) => instance.id);
}
