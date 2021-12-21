import { Op } from "sequelize";

import {
  GroupConfigurationObject,
  getCodeConfigLockKey,
  logModel,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { Group } from "../../models/Group";
import { TopLevelGroupRules } from "../../modules/topLevelGroupRules";
import { Property } from "../../models/Property";
import { ConfigWriter } from "../configWriter";
import { Deprecation } from "../deprecation";

export async function loadGroup(
  configObject: GroupConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;
  validateConfigObjectKeys(Group, configObject, ["rules", "type"]);

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
      modelId: configObject.modelId,
    });
  }

  await group.update({
    name: configObject.name,
    modelId: configObject.modelId,
    locked: ConfigWriter.getLockKey(configObject),
  });

  const previousState = group.state;
  await group.update({ state: "ready" });

  if (configObject.rules) {
    const rules = [...configObject.rules];
    const calculatesWithDate = ["lte", "gt", "lt", "gte", "eq", "ne"];

    for (const i in rules) {
      if (rules[i]["propertyId"]) {
        let ruleKey: string, ruleType: string;
        const topLevelProperty = TopLevelGroupRules.find(
          (r) => r.key === rules[i]["propertyId"]
        );
        if (topLevelProperty) {
          ruleKey = topLevelProperty.key;
          ruleType = topLevelProperty.type;
        } else {
          const property = await Property.findById(rules[i]["propertyId"]);
          ruleKey = property.key;
          ruleType = property.type;
        }

        delete rules[i]["propertyId"];
        rules[i].key = ruleKey;

        // if calculating based on a date, parse to unix timestamp
        if (calculatesWithDate.includes(rules[i]["operation"]["op"])) {
          if (ruleType === "date") {
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

  if (!!configObject["type"]) {
    if (configObject["type"] === "manual") {
      throw new Error(
        "There are manual Groups. Grouparoo v0.8 removes support for Manual Groups.  Please remove them and try again."
      );
    } else {
      Deprecation.warnRemoved("config", "Group", "type");
    }
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
