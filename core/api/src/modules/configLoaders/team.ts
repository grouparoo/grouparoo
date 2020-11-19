import {
  ConfigurationObject,
  extractNonNullParts,
  logModel,
} from "../../classes/codeConfig";
import { Team, Permission } from "../..";

export async function loadTeam(configObject: ConfigurationObject) {
  let [team, isNew] = await Team.scope(null).findOrCreate({
    where: { locked: true, name: configObject.name },
  });

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
