import {
  ConfigurationObject,
  getCodeConfigLockKey,
  getParentByName,
  logModel,
  validateAndFormatGuid,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { Team, TeamMember } from "../..";
import { Op, Transaction } from "sequelize";

export async function loadTeamMember(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  transaction?: Transaction
) {
  let isNew = false;

  const team: Team = await getParentByName(
    Team,
    configObject.teamId,
    transaction
  );

  const guid = await validateAndFormatGuid(TeamMember, configObject.id);
  validateConfigObjectKeys(TeamMember, configObject);

  let teamMember = await TeamMember.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), guid },
    transaction,
  });
  if (!teamMember) {
    isNew = true;
    teamMember = TeamMember.build({
      guid,
      locked: getCodeConfigLockKey(),
      email: configObject.email,
      teamGuid: team.guid,
    });
  }

  teamMember.teamGuid = team.guid;
  if (configObject?.options?.firstName) {
    teamMember.firstName = configObject.options.firstName;
  }
  if (configObject?.options?.lastName) {
    teamMember.lastName = configObject.options.lastName;
  }
  await teamMember.save({ transaction });

  if (configObject?.options?.password) {
    await teamMember.updatePassword(configObject.options.password, transaction);
  }

  logModel(
    teamMember,
    transaction ? "validated" : isNew ? "created" : "updated"
  );

  return teamMember;
}

export async function deleteTeamMembers(guids: string[]) {
  const teamMembers = await TeamMember.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), guid: { [Op.notIn]: guids } },
  });

  for (const i in teamMembers) {
    await teamMembers[i].destroy();
    logModel(teamMembers[i], "deleted");
  }

  return teamMembers.map((instance) => instance.guid);
}
