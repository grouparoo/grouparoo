import {
  ConfigurationObject,
  getCodeConfigLockKey,
  getParentByName,
  GuidsByClass,
  logModel,
  validateAndFormatGuid,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { Team, TeamMember } from "../..";
import { Op } from "sequelize";

export async function loadTeamMember(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<GuidsByClass> {
  let isNew = false;

  const team: Team = await getParentByName(Team, configObject.teamId);

  const guid = await validateAndFormatGuid(TeamMember, configObject.id);
  validateConfigObjectKeys(TeamMember, configObject);

  let teamMember = await TeamMember.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), guid },
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
  await teamMember.save();

  if (configObject?.options?.password) {
    await teamMember.updatePassword(configObject.options.password);
  }

  logModel(teamMember, validate ? "validated" : isNew ? "created" : "updated");

  return { teammember: [teamMember.guid] };
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
