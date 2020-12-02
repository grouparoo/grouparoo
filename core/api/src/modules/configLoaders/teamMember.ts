import {
  ConfigurationObject,
  codeConfigLockKey,
  getParentByName,
  logModel,
  validateAndFormatGuid,
} from "../../classes/codeConfig";
import { Team, TeamMember } from "../..";
import { Op } from "sequelize";

export async function loadTeamMember(configObject: ConfigurationObject) {
  let isNew = false;

  const team: Team = await getParentByName(Team, configObject.teamId);

  const guid = await validateAndFormatGuid(TeamMember, configObject.id);
  let teamMember = await TeamMember.scope(null).findOne({
    where: { locked: codeConfigLockKey, guid },
  });
  if (!teamMember) {
    isNew = true;
    teamMember = TeamMember.build({
      guid,
      locked: codeConfigLockKey,
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

  logModel(teamMember, isNew ? "created" : "updated");
  return teamMember;
}

export async function deleteTeamMembers(guids: string[]) {
  const teamMembers = await TeamMember.scope(null).findAll({
    where: { locked: codeConfigLockKey, guid: { [Op.notIn]: guids } },
  });

  for (const i in teamMembers) {
    await teamMembers[i].destroy();
    logModel(teamMembers[i], "deleted");
  }
}
