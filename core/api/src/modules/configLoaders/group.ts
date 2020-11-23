import {
  ConfigurationObject,
  validateAndFormatGuid,
  logModel,
} from "../../classes/codeConfig";
import { Group } from "../..";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { Op } from "sequelize";

export async function loadGroup(configObject: ConfigurationObject) {
  let isNew = false;
  const guid = await validateAndFormatGuid(Group, configObject.id);

  let group = await Group.scope(null).findOne({
    where: { guid, locked: true },
  });
  if (!group) {
    isNew = true;
    group = await Group.create({
      guid,
      locked: true,
      name: configObject.name,
      type: configObject.type,
    });
  }

  await group.update({ name: configObject.name });

  if (configObject.rules) {
    const rules = [...configObject.rules];
    for (const i in rules) {
      if (rules[i]["profilePropertyRuleId"]) {
        const profilePropertyRuleGuid = await validateAndFormatGuid(
          ProfilePropertyRule,
          rules[i]["profilePropertyRuleId"]
        );
        const profilePropertyRule = await ProfilePropertyRule.findByGuid(
          profilePropertyRuleGuid
        );
        delete rules[i]["profilePropertyRuleId"];
        rules[i].key = profilePropertyRule.key;
      }
    }

    await group.setRules(configObject.rules);
  }

  await group.update({ state: "ready" });
  logModel(group, isNew);
  return group;
}

export async function deleteUnseenGroups(guids: string[]) {
  const groups = await Group.scope(null).findAll({
    where: { locked: true, guid: { [Op.notIn]: guids } },
  });

  for (const i in groups) await groups[i].destroy();
}
