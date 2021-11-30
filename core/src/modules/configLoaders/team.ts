import {
  TeamConfigurationObject,
  logModel,
  getCodeConfigLockKey,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { Team, Permission } from "../..";
import { Op } from "sequelize";

export async function loadTeam(
  configObject: TeamConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;

  validateConfigObjectKeys(Team, configObject, ["options", "permissions"]);

  let team = await Team.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), id: configObject.id },
  });
  if (!team) {
    isNew = true;
    team = await Team.create({
      id: configObject.id,
      locked: getCodeConfigLockKey(),
      name: configObject.name,
    });
  }

  await team.update({ name: configObject.name });

  if (configObject.options) {
    await team.update({
      permissionAllRead: configObject.options.permissionAllRead,
      permissionAllWrite: configObject.options.permissionAllWrite,
    });
  }

  if (configObject.permissions) {
    await team.setPermissions(configObject.permissions);
  }

  await Permission.update(
    { locked: getCodeConfigLockKey() },
    { where: { ownerId: team.id } }
  );

  logModel(team, validate ? "validated" : isNew ? "created" : "updated");

  return { team: [team.id] };
}

export async function deleteTeams(ids: string[]) {
  const teams = await Team.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in teams) {
    await teams[i].destroy();
    logModel(teams[i], "deleted");
  }

  return teams.map((instance) => instance.id);
}
