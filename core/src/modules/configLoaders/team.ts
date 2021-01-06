import {
  ConfigurationObject,
  logModel,
  getCodeConfigLockKey,
  validateAndFormatGuid,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { Team, Permission } from "../..";
import { Op } from "sequelize";

export async function loadTeam(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
) {
  let isNew = false;

  const guid = await validateAndFormatGuid(Team, configObject.id);
  validateConfigObjectKeys(Team, configObject);

  let team = await Team.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), guid },
  });
  if (!team) {
    isNew = true;
    team = await Team.create({
      guid,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
    });
  }

  await team.update({ name: configObject.name });

  if (
    configObject.options?.permissionAllRead !== undefined &&
    configObject.options?.permissionAllRead !== null
  ) {
    await team.update({
      permissionAllRead: configObject.options.permissionAllRead,
    });
  }

  if (
    configObject.options?.permissionAllWrite !== undefined &&
    configObject.options?.permissionAllWrite !== null
  ) {
    await team.update({
      permissionAllWrite: configObject.options.permissionAllWrite,
    });
  }

  if (configObject.permissions) {
    await team.setPermissions(configObject.permissions);
  }

  await Permission.update(
    { locked: getCodeConfigLockKey() },
    { where: { ownerGuid: team.guid } }
  );

  logModel(team, validate ? "validated" : isNew ? "created" : "updated");

  return team;
}

export async function deleteTeams(guids: string[]) {
  const teams = await Team.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), guid: { [Op.notIn]: guids } },
  });

  for (const i in teams) {
    await teams[i].destroy();
    logModel(teams[i], "deleted");
  }

  return teams.map((instance) => instance.guid);
}
