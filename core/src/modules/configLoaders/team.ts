import { env } from "actionhero";
import {
  ConfigurationObject,
  logModel,
  getCodeConfigLockKey,
  validateAndFormatId,
  validateConfigObjectKeys,
  IdsByClass,
} from "../../classes/codeConfig";
import { Setting } from "../../models/Setting";
import { Team, Permission } from "../..";
import { Op } from "sequelize";

export async function loadTeam(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;

  const id = await validateAndFormatId(Team, configObject.id);
  validateConfigObjectKeys(Team, configObject);

  let team = await Team.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), id },
  });
  if (!team) {
    isNew = true;
    team = await Team.create({
      id,
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
    { where: { ownerId: team.id } }
  );

  // Set the cluster name from the team name and current environment if it
  // hasn't already been changed.
  const clusterNameSetting = await Setting.findOne({
    where: { pluginName: "core", key: "cluster-name" },
  });
  if (
    team.name &&
    clusterNameSetting &&
    clusterNameSetting.value === clusterNameSetting.defaultValue
  ) {
    const nodeEnv = env || "development";
    const clusterName = `${team.name} - ${
      nodeEnv.charAt(0).toUpperCase() + nodeEnv.slice(1)
    }`; // the cluster name would be `Grouparoo - Development`
    await clusterNameSetting.update({ value: clusterName });
  }

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
