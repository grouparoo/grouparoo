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

  validateConfigObjectKeys(Team, configObject);

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
    const permissions = await team.$get("permissions");
    const updatedPermissions: Permission[] = [];
    for (const permission of permissions) {
      const configPermission = configObject.permissions.find(
        (p) => p.topic === permission.topic
      );
      if (configPermission) {
        permission.read = configPermission.read;
        permission.write = configPermission.write;
      }
      updatedPermissions.push(permission);
    }
    console.log(updatedPermissions);

    await team.setPermissions(permissions);
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
