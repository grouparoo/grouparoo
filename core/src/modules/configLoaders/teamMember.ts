import {
  ConfigurationObject,
  getCodeConfigLockKey,
  getParentByName,
  logModel,
  validateAndFormatId,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { Team, TeamMember } from "../..";
import { Op } from "sequelize";

export async function loadTeamMember(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
) {
  let isNew = false;

  const team: Team = await getParentByName(Team, configObject.teamId);

  const id = await validateAndFormatId(TeamMember, configObject.id);
  validateConfigObjectKeys(TeamMember, configObject);

  let teamMember = await TeamMember.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), id },
  });
  if (!teamMember) {
    isNew = true;
    teamMember = TeamMember.build({
      id,
      locked: getCodeConfigLockKey(),
      email: configObject.email,
      teamId: team.id,
    });
  }

  teamMember.teamId = team.id;
  if (configObject?.options?.firstName) {
    teamMember.firstName = configObject.options.firstName;
  }
  if (configObject?.options?.lastName) {
    teamMember.lastName = configObject.options.lastName;
  }
  await teamMember.save();

  if (configObject?.options?.password) {
    await teamMember.updatePassword(configObject.options.password);
  }

  logModel(teamMember, validate ? "validated" : isNew ? "created" : "updated");

  return teamMember;
}

export async function deleteTeamMembers(ids: string[]) {
  const teamMembers = await TeamMember.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in teamMembers) {
    await teamMembers[i].destroy();
    logModel(teamMembers[i], "deleted");
  }

  return teamMembers.map((instance) => instance.id);
}
