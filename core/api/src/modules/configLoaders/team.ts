import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
  validateAndFormatGuid,
} from "../../classes/codeConfig";
import { Team, Permission } from "../..";

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

  if (configObject.options?.permissionAllRead) {
    await team.update({
      permissionAllRead: configObject.options.permissionAllRead,
    });
  }

  if (configObject.options?.permissionAllWrite) {
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
