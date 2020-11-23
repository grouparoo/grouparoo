import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  validateAndFormatGuid,
} from "../../classes/codeConfig";
import { Team, Permission } from "../..";
import { Op } from "sequelize";

export async function loadTeam(configObject: ConfigurationObject) {
  let isNew = false;

  const guid = await validateAndFormatGuid(Team, configObject.id);
  let team = await Team.scope(null).findOne({ where: { locked: true, guid } });
  if (!team) {
    isNew = true;
    team = await Team.create({
      guid,
      locked: true,
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

  // await team.setPermissions();

  await Permission.update(
    { locked: true },
    { where: { ownerGuid: team.guid } }
  );

  logModel(team, isNew);
  return team;
}

export async function deleteTeams(guids: string[]) {
  const teams = await Team.scope(null).findAll({
    where: { locked: true, guid: { [Op.notIn]: guids } },
  });

  for (const i in teams) await teams[i].destroy();
}
