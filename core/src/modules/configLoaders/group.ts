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
    where: { id: configObject.id, locked: getCodeConfigLockKey() },
  });
  if (!group) {
    isNew = true;
    group = await Group.create({
      id: configObject.id,
      locked: ConfigWriter.getLockKey(configObject),
      name: configObject.name,
      type: configObject.type,
    });
  }

  await group.update({ type: configObject.type, name: configObject.name });

  if (configObject.rules) {
    const rules = [...configObject.rules];
    const calculatesWithDate = ["lte", "gt", "lt", "gte", "eq", "ne"];
    for (const i in rules) {
      if (rules[i]["propertyId"]) {
        const property = await Property.findById(rules[i]["propertyId"]);
        delete rules[i]["propertyId"];
        rules[i].key = property.key;
      }

      //parses to epoch time
      if (
        calculatesWithDate.indexOf(rules[i]["operation"]["op"]) >= 0 &&
        rules[i]["type"] === "date"
      ) {
        let epochTime: number;
        //will parse as exact timestamp, or will default to 00:00:00.000 UTC if none
        epochTime = Date.parse(rules[i]["match"].toString());
        //if rule uses <= or > and no time is given, base rule on 11:59:59.999
        if (
          calculatesWithDate.indexOf(rules[i]["operation"]["op"]) <= 1 &&
          rules[i]["match"].toString().length === 10
        ) {
          epochTime += 86399999;
        }
        rules[i]["match"] = epochTime;
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
    logModel(group, "deleted");
  }

  return groups.map((instance) => instance.id);
}
