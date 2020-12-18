import {
  ConfigurationObject,
  logModel,
  getCodeConfigLockKey,
  validateAndFormatGuid,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { Team, Permission } from "../..";
import { Op, Transaction } from "sequelize";

export async function loadTeam(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  transaction?: Transaction
) {
  let isNew = false;

  const guid = await validateAndFormatGuid(Team, configObject.id);
  validateConfigObjectKeys(Team, configObject);

  let team = await Team.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), guid },
    transaction,
  });
  if (!team) {
    isNew = true;
    team = await Team.create(
      {
        guid,
        locked: getCodeConfigLockKey(),
        name: configObject.name,
      },
      { transaction }
    );
  }

  await team.update({ name: configObject.name }, { transaction });

  if (
    configObject.options?.permissionAllRead !== undefined &&
    configObject.options?.permissionAllRead !== null
  ) {
    await team.update(
      {
        permissionAllRead: configObject.options.permissionAllRead,
      },
      { transaction }
    );
  }

  if (
    configObject.options?.permissionAllWrite !== undefined &&
    configObject.options?.permissionAllWrite !== null
  ) {
    await team.update(
      {
        permissionAllWrite: configObject.options.permissionAllWrite,
      },
      { transaction }
    );
  }

  if (configObject.permissions) {
    await team.setPermissions(configObject.permissions, transaction);
  }

  await Permission.update(
    { locked: getCodeConfigLockKey() },
    { where: { ownerGuid: team.guid }, transaction }
  );

  logModel(team, transaction ? "validated" : isNew ? "created" : "updated");

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
